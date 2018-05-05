package vn.edu.saigontech.source.Controller;

import java.sql.SQLException;
import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Security.SecurityConstant;
import vn.edu.saigontech.source.Model.User;
import vn.edu.saigontech.source.Service.ServiceImpl.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.*;
import io.jsonwebtoken.SignatureAlgorithm;


@CrossOrigin
@RestController
public class LoginSecurityController {
	private UserService userService;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody User login) throws ServletException, ClassNotFoundException, SQLException{
		userService = new UserService();
		String jwtToken = "";
        
		if (login.getUserName() == null || login.getPassword() == null) {
			throw new ServletException("Please fill in username and password");
		}

		String username = login.getUserName();
		String password = login.getPassword();
		System.out.println("before call userService.getUserIDbyUsernameandPassword(username, password);");
		int result = userService.getUserIDbyUsernameandPassword(username, password);
		System.out.println("after call userService.getUserIDbyUsernameandPassword(username, password);");

//		if (result == -1) {
//			throw new ServletException("Invalid login. Please check your name and password.");
//		}

		jwtToken = Jwts.builder().setExpiration(new Date(System.currentTimeMillis() + SecurityConstant.EXPIRATION_TIME)).setSubject(username).claim("roles", "user").setIssuedAt(new Date())
				.signWith(SignatureAlgorithm.HS256, SecurityConstant.SECRET_KEY).compact();

		
		return jwtToken + " "+Integer.toString(result);
		
	}
}
