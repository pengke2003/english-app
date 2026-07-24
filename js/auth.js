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
    console.log('[Auth] 开始哈希, crypto.subtle可用:', !!(window.crypto && window.crypto.subtle));
    if (window.crypto && window.crypto.subtle) {
      try {
        var buf = new TextEncoder().encode(text);
        var hash = await window.crypto.subtle.digest('SHA-256', buf);
        var hex = Array.from(new Uint8Array(hash))
          .map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
        console.log('[Auth] 哈希结果:', hex.substring(0, 16) + '...');
        return hex;
      } catch (e) {
        console.error('[Auth] crypto.subtle失败, 降级:', e.message);
      }
    }
    // 降级：纯JS实现SHA256（兼容所有环境）
    return sha256JS(text);
  }

  // 纯JS SHA256实现（降级方案，兼容无crypto.subtle的环境）
  // 使用经过验证的实现，正确处理32位无符号运算
  function sha256JS(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }

    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length';
    var i, j;
    var result = '';

    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;

    var hash = sha256JS.h = sha256JS.h || [];
    var k = sha256JS.k = sha256JS.k || [];
    var primeCounter = k[lengthProperty];

    var isComposite = {};
    for (var candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (i = 0; i < 313; i += candidate) {
          isComposite[i] = candidate;
        }
        hash[primeCounter] = (mathPow(candidate, .5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += '\x80';
    while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii[lengthProperty]; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return '';
      words[i >> 2] |= j << ((3 - i) % 4) * 8;
    }
    words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
    words[words[lengthProperty]] = (asciiBitLength);

    for (j = 0; j < words[lengthProperty];) {
      var w = words.slice(j, j += 16);
      var oldHash = hash;
      hash = hash.slice(0, 8);

      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2];
        var a = hash[0], e = hash[4];
        var temp1 = hash[7]
          + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6]))
          + k[i]
          + (w[i] = (i < 16) ? w[i] : (
              w[i - 16]
              + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
              + w[i - 7]
              + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
            ) | 0
          );
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }

      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j + 1; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        result += ((b < 16) ? 0 : '') + b.toString(16);
      }
    }
    return result;
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
      console.log('[Auth] 开始登录, 用户:', username);
      var hashed = await sha256(password);
      console.log('[Auth] 密码已哈希, 开始请求...');
      var result = await rpc('fn_login', {
        p_username: username, p_password: hashed
      });
      console.log('[Auth] 登录响应:', JSON.stringify(result));
      if (!result || !Array.isArray(result) || result.length === 0 ||
          result[0] === null || (result[0] && result[0].uid === null)) {
        console.log('[Auth] 登录失败: 用户名或密码错误');
        return { ok: false, error: '用户名或密码错误' };
      }
      var u = result[0];
      console.log('[Auth] 登录验证通过, uid:', u.uid);
      try { document.title = '[登录中] ' + u.uname; } catch(e){}
      this.current = {
        id: u.uid, username: u.uname, role: u.urole,
        nickname: u.unickname, loginCount: u.ulogin_count
      };
      try {
        localStorage.setItem(SESSION_KEY, JSON.stringify(this.current));
        console.log('[Auth] 会话已保存');
      } catch (e) {
        console.warn('[Auth] localStorage保存失败(不影响登录):', e.message);
      }
      console.log('[Auth] 登录完成, 返回成功');
      try { document.title = '初中英语辅导'; } catch(e){}
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
