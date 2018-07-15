package vn.edu.saigontech.source.Security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;

public class JwtFilter extends GenericFilterBean {

	public void doFilter(final ServletRequest req, final ServletResponse res, final FilterChain chain)
			throws IOException, ServletException {
		final HttpServletRequest request = (HttpServletRequest) req;
		final HttpServletResponse response = (HttpServletResponse) res;
		final String authHeader = request.getHeader("authorization");
		HttpSession session = request.getSession(false);
		
		String path = request.getRequestURI().substring(request.getContextPath().length()).replaceAll("[/]+$", "");
		
        boolean allowedPath = SecurityConstant.ALLOWED_PATHS.contains(path);
        
        System.out.println(" allowedPath = "+allowedPath);   
        if (allowedPath)
        {
        	chain.doFilter(req, res);
        }
		if ("OPTIONS".equals(request.getMethod())) {
			response.setStatus(HttpServletResponse.SC_OK);
			chain.doFilter(req, res);
		} else {
			System.out.println("Header "+authHeader);
			if (authHeader == null || !authHeader.startsWith(SecurityConstant.TOKEN_PREFIX)) {
				throw new ServletException("Missing or invalid Authorization header");
			}

			final String token = authHeader.substring(7);
			
			try {
				
				final Claims claims = Jwts.parser().setSigningKey(SecurityConstant.SECRET_KEY).parseClaimsJws(token).getBody();
				request.setAttribute("claims", claims);
				
				//expireCheck is formed by subtraction between current time and token's expired time 
				Long expireCheck = System.currentTimeMillis() - claims.getExpiration().getTime();
				
				//If expireCheck > 0, it means current time > token's expired time or the token has expired already
				if (expireCheck > 0)
				{
					res.setContentType("application/json");
					res.getWriter().print("{\"message\":\"Token expired\"}");
					return ;
				}
			} catch (final SignatureException e) {
				throw new ServletException("Invalid token");
			}
			
			chain.doFilter(req, res);
		}
	}
}