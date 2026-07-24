/**
 * 账户认证与数据同步模块 (Supabase)
 * 零依赖，用原生 fetch 调用 Supabase REST API
 * 功能：登录/登出、用户管理、学习数据云端同步
 */
(function () {
  'use strict';

  // ===== Supabase 配置 =====
  var SUPABASE_URL = 'https://uktzkfrznckfxomajydz.supabase.co';
  var SUPABASE_ANON_KEY = 'sb_publishable_8bspXmMvNrY4ymfsGuxNwA_F8B6V7K2';
  var REST = SUPABASE_URL + '/rest/v1';

  // ===== 本地会话存储 =====
  var SESSION_KEY = 'english_app_session';

  // SHA256 哈希（与数据库存储方式一致）
  async function sha256(text) {
    if (window.crypto && window.crypto.subtle) {
      var buf = new TextEncoder().encode(text);
      var hash = await window.crypto.subtle.digest('SHA-256', buf);
      return Array.from(new Uint8Array(hash))
        .map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }
    // 降级方案：用慢速JS实现（极少触发）
    return simpleSha256(text);
  }

  // ===== 通用请求 =====
  async function rpc(fnName, params) {
    var resp = await fetch(REST + '/rpc/' + fnName, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });
    return resp.json();
  }

  async function select(table, query) {
    var url = REST + '/' + table + (query || '');
    var resp = await fetch(url, {
      headers: { 'apikey': SUPABASE_ANON_KEY }
    });
    return resp.json();
  }

  async function upsert(table, data) {
    var resp = await fetch(REST + '/' + table + '?on_conflict=user_id', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates'
      },
      body: JSON.stringify(data)
    });
    return resp.json();
  }

  async function patch(table, filter, data) {
    var resp = await fetch(REST + '/' + table + '?' + filter, {
      method: 'PATCH',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(data)
    });
    return { ok: resp.ok };
  }

  // ===== 认证 API =====
  var Auth = {
    /** 当前登录用户（从本地会话恢复） */
    current: null,

    /** 初始化：从 localStorage 恢复会话 */
    init: function () {
      try {
        var saved = localStorage.getItem(SESSION_KEY);
        if (saved) this.current = JSON.parse(saved);
      } catch (e) {}
      return this.current;
    },

    /**
     * 登录
     * @returns {object} {ok, user, loginCount, error}
     */
    login: async function (username, password) {
      var hashed = await sha256(password);
      var result = await rpc('fn_login', {
        p_username: username, p_password: hashed
      });
      if (!result || result[0] === null || (result[0] && result[0].uid === null)) {
        return { ok: false, error: '用户名或密码错误' };
      }
      var u = result[0];
      this.current = {
        id: u.uid, username: u.uname, role: u.urole,
        nickname: u.unickname, loginCount: u.ulogin_count
      };
      localStorage.setItem(SESSION_KEY, JSON.stringify(this.current));
      return { ok: true, user: this.current, loginCount: u.ulogin_count };
    },

    /** 登出 */
    logout: function () {
      this.current = null;
      localStorage.removeItem(SESSION_KEY);
    },

    /** 是否已登录 */
    isLoggedIn: function () { return !!this.current; },

    /** 是否管理员 */
    isAdmin: function () { return this.current && this.current.role === 'admin'; },

    // ===== 用户管理（管理员）=====

    /** 创建用户 */
    createUser: async function (username, password, role, nickname) {
      var hashed = await sha256(password);
      var adminHashed = await sha256(this.current.username === 'admin' ? 'Pp3381024!' : '');
      // 用当前管理员凭据
      var adminPwd = localStorage.getItem('_admin_pwd') || '';
      var result = await rpc('fn_create_user', {
        p_admin_username: this.current.username,
        p_admin_password: adminPwd,
        p_new_username: username,
        p_new_password: hashed,
        p_role: role || 'student',
        p_nickname: nickname || username
      });
      return { ok: result === true, error: result === true ? null : '创建失败(用户名可能已存在)' };
    },

    /** 删除用户 */
    deleteUser: async function (username) {
      var adminPwd = localStorage.getItem('_admin_pwd') || '';
      var result = await rpc('fn_delete_user', {
        p_admin_username: this.current.username,
        p_admin_password: adminPwd,
        p_target_username: username
      });
      return { ok: result === true };
    },

    /** 重置用户密码 */
    resetPassword: async function (username, newPwd) {
      var hashed = await sha256(newPwd);
      var adminPwd = localStorage.getItem('_admin_pwd') || '';
      var result = await rpc('fn_reset_password', {
        p_admin_username: this.current.username,
        p_admin_password: adminPwd,
        p_target_username: username,
        p_new_password: hashed
      });
      return { ok: result === true };
    },

    /** 获取所有用户列表 */
    listUsers: async function () {
      return await select('app_users', '?select=username,role,nickname,login_count,created_at,last_login&order=created_at.asc');
    },

    // ===== 学习数据同步 =====

    /** 读取用户学习数据 */
    loadData: async function (userId) {
      var data = await select('user_data', '?user_id=eq.' + userId);
      return (data && data[0]) ? data[0] : null;
    },

    /** 保存用户学习数据 */
    saveData: async function (userId, data) {
      data.user_id = userId;
      data.updated_at = new Date().toISOString();
      return await upsert('user_data', data);
    }
  };

  // 暴露：登录时缓存管理员密码（仅用于 RPC 调用，session内有效）
  Auth._cacheAdminPwd = function (pwd) {
    localStorage.setItem('_admin_pwd', pwd);
  };

  window.Auth = Auth;
})();
