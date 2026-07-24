-- ============================================================
-- 初中英语辅导 App - 数据库初始化脚本
-- 在 Supabase 控制台 SQL Editor 中执行此脚本
-- ============================================================

-- 1. 用户表（含管理员和普通用户）
CREATE TABLE IF NOT EXISTS public.app_users (
  id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  username    TEXT UNIQUE NOT NULL,
  password    TEXT NOT NULL,           -- SHA256 哈希值（前端哈希后传入）
  role        TEXT NOT NULL DEFAULT 'student',  -- 'admin' 或 'student'
  nickname    TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  login_count INTEGER DEFAULT 0,
  last_login  TIMESTAMPTZ
);

-- 2. 用户学习数据表（每个用户一行，存所有学习状态）
CREATE TABLE IF NOT EXISTS public.user_data (
  user_id      BIGINT PRIMARY KEY REFERENCES public.app_users(id) ON DELETE CASCADE,
  -- 单词记忆进度
  wm_grade     TEXT DEFAULT 'all',
  wm_index     INTEGER DEFAULT 0,
  wm_seen      JSONB DEFAULT '[]'::jsonb,  -- 已学单词 en 列表
  -- 挑战/考试统计
  wc_total     INTEGER DEFAULT 0,  -- 单词挑战累计
  wc_correct   INTEGER DEFAULT 0,
  gc_total     INTEGER DEFAULT 0,  -- 语法挑战累计
  gc_correct   INTEGER DEFAULT 0,
  exam_scores  JSONB DEFAULT '[]'::jsonb,  -- 真题测试历史 [{date,total,word,grammar}]
  listen_scores JSONB DEFAULT '[]'::jsonb, -- 听力测验历史
  -- 听力能力分析（自适应用）
  listen_stats JSONB DEFAULT '{}'::jsonb, -- {维度: {correct,total}}
  -- 通用进度
  updated_at   TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 开启 RLS（行级安全）
ALTER TABLE public.app_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_data ENABLE ROW LEVEL SECURITY;

-- 4. 安全策略
-- SELECT 策略：只能用 USING，不能用 WITH CHECK
CREATE POLICY "允许查询用户" ON public.app_users
  FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "允许插入用户" ON public.app_users
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "允许更新用户" ON public.app_users
  FOR UPDATE TO anon, authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "允许删除用户" ON public.app_users
  FOR DELETE TO anon, authenticated
  USING (true);

-- user_data 表：允许匿名读写
CREATE POLICY "允许读取学习数据" ON public.user_data
  FOR SELECT TO anon, authenticated
  USING (true);

CREATE POLICY "允许插入学习数据" ON public.user_data
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "允许更新学习数据" ON public.user_data
  FOR UPDATE TO anon, authenticated
  USING (true) WITH CHECK (true);

CREATE POLICY "允许删除学习数据" ON public.user_data
  FOR DELETE TO anon, authenticated
  USING (true);

-- 5. RPC 函数：登录校验（返回用户信息，不含密码）
CREATE OR REPLACE FUNCTION public.fn_login(p_username TEXT, p_password TEXT)
RETURNS TABLE(uid BIGINT, uname TEXT, urole TEXT, unickname TEXT, ulogin_count INTEGER)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_user RECORD;
BEGIN
  SELECT au.id, au.username, au.role, au.nickname, au.login_count, au.password
    INTO v_user
    FROM public.app_users au
    WHERE au.username = p_username
    LIMIT 1;

  IF NOT FOUND THEN
    RETURN QUERY SELECT NULL::BIGINT, NULL::TEXT, NULL::TEXT, NULL::TEXT, NULL::INTEGER;
    RETURN;
  END IF;

  IF v_user.password <> p_password THEN
    RETURN QUERY SELECT NULL::BIGINT, NULL::TEXT, NULL::TEXT, NULL::TEXT, NULL::INTEGER;
    RETURN;
  END IF;

  -- 登录成功：更新登录次数和最后登录时间
  UPDATE public.app_users
    SET login_count = login_count + 1, last_login = NOW()
    WHERE app_users.id = v_user.id;

  RETURN QUERY
    SELECT v_user.id, v_user.username, v_user.role,
           COALESCE(v_user.nickname, v_user.username), (v_user.login_count + 1);
END;
$$;

-- 6. RPC 函数：管理员创建用户
CREATE OR REPLACE FUNCTION public.fn_create_user(
  p_admin_username TEXT, p_admin_password TEXT,
  p_new_username TEXT, p_new_password TEXT, p_role TEXT, p_nickname TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_admin RECORD;
BEGIN
  -- 验证管理员身份
  SELECT role, password INTO v_admin
    FROM public.app_users
    WHERE username = p_admin_username LIMIT 1;

  IF NOT FOUND OR v_admin.role <> 'admin' OR v_admin.password <> p_admin_password THEN
    RETURN FALSE;
  END IF;

  -- 检查用户名是否已存在
  IF EXISTS (SELECT 1 FROM public.app_users WHERE username = p_new_username) THEN
    RETURN FALSE;
  END IF;

  -- 创建新用户
  INSERT INTO public.app_users (username, password, role, nickname)
    VALUES (p_new_username, p_new_password, p_role, p_nickname);

  -- 初始化学习数据
  INSERT INTO public.user_data (user_id) SELECT id FROM public.app_users WHERE username = p_new_username;

  RETURN TRUE;
END;
$$;

-- 7. RPC 函数：管理员删除用户
CREATE OR REPLACE FUNCTION public.fn_delete_user(
  p_admin_username TEXT, p_admin_password TEXT, p_target_username TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
  v_admin RECORD;
BEGIN
  SELECT role, password INTO v_admin
    FROM public.app_users WHERE username = p_admin_username LIMIT 1;
  IF NOT FOUND OR v_admin.role <> 'admin' OR v_admin.password <> p_admin_password THEN
    RETURN FALSE;
  END IF;
  IF p_target_username = p_admin_username THEN RETURN FALSE; END IF; -- 不能删自己
  DELETE FROM public.app_users WHERE username = p_target_username AND role <> 'admin';
  RETURN FOUND;
END;
$$;

-- 8. RPC 函数：管理员重置用户密码
CREATE OR REPLACE FUNCTION public.fn_reset_password(
  p_admin_username TEXT, p_admin_password TEXT, p_target_username TEXT, p_new_password TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
AS $$
DECLARE
  v_admin RECORD;
BEGIN
  SELECT role, password INTO v_admin FROM public.app_users WHERE username = p_admin_username LIMIT 1;
  IF NOT FOUND OR v_admin.role <> 'admin' OR v_admin.password <> p_admin_password THEN
    RETURN FALSE;
  END IF;
  UPDATE public.app_users SET password = p_new_password WHERE username = p_target_username;
  RETURN FOUND;
END;
$$;

-- 9. 创建默认管理员账户
--    密码 Pp3381024! 的 SHA256 哈希（前端会用相同算法哈希后比对）
--    这里先算好哈希值。SHA256("Pp3381024!") = ?
--    我们在初始化脚本执行时用 pgcrypto 计算
CREATE EXTENSION IF NOT EXISTS pgcrypto;
INSERT INTO public.app_users (username, password, role, nickname)
SELECT 'admin', encode(digest('Pp3381024!', 'sha256'), 'hex'), 'admin', '管理员'
WHERE NOT EXISTS (SELECT 1 FROM public.app_users WHERE username = 'admin');

-- 初始化管理员的学习数据
INSERT INTO public.user_data (user_id)
SELECT id FROM public.app_users WHERE username = 'admin'
ON CONFLICT (user_id) DO NOTHING;

-- ============================================================
-- 完成提示：执行后应有以下内容
-- 1. app_users 表（含 admin 账户）
-- 2. user_data 表
-- 3. 5 个 RPC 函数（fn_login, fn_create_user, fn_delete_user, fn_reset_password）
-- ============================================================
