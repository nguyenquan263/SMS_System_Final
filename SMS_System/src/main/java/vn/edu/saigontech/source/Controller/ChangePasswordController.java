package vn.edu.saigontech.source.Controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Service.ServiceImpl.ChangePasswordService;

@CrossOrigin
@RestController
public class ChangePasswordController {
  ChangePasswordService changePasswordService;
  @RequestMapping(value = "/changePassword", method = RequestMethod.POST, produces = "application/json", consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public void changPasswordREST(@RequestParam("userName") String userName,@RequestParam("newPassword") String newPassword,HttpServletRequest request)
	{
		try {
			System.out.println(userName+"  "+newPassword);
			changePasswordService = new ChangePasswordService();
		    changePasswordService.changeUserPassword(userName,newPassword);
		} catch (Exception e) {
			e.getStackTrace();
	
		} 		
	}
  
}
