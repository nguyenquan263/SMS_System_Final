package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Service.ServiceImpl.UserService;


@CrossOrigin
@RestController
public class UserController {
	private UserService userService;

	@RequestMapping(value = "/getUserIDbyUsernameandPassword/{username}&{password}", method = RequestMethod.GET, produces = "application/json")
	public Integer getUserIDbyUsernameandPassword(@PathVariable("username") String username
	,@PathVariable("password") String password) {
		try {
			userService = new UserService();
			return userService.getUserIDbyUsernameandPassword(username, password);
		} catch (Exception e) {
			return -1;
		}
	}
}
