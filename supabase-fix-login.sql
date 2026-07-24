-- 修正 fn_login 函数（解决列名歧义）
-- 仅需执行此段即可

DROP FUNCTION IF EXISTS public.fn_login(TEXT, TEXT);

CREATE FUNCTION public.fn_login(p_username TEXT, p_password TEXT)
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

  UPDATE public.app_users
    SET login_count = login_count + 1, last_login = NOW()
    WHERE app_users.id = v_user.id;

  RETURN QUERY
    SELECT v_user.id, v_user.username, v_user.role,
           COALESCE(v_user.nickname, v_user.username), (v_user.login_count + 1);
END;
$$;
