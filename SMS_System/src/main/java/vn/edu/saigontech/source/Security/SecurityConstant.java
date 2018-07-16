package vn.edu.saigontech.source.Security;

public class SecurityConstant {
	public static final String SECRET_KEY = "OAuth2_SMS_System";
    public static final long EXPIRATION_TIME = 1200_000; // 30 minutes
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String ALLOWED_PATHS = "/login"; //Only path /login is allowed to access without token
}
