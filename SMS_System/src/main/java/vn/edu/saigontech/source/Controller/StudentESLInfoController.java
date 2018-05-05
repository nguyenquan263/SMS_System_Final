package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentESLInfo;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentESLInfoService;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentVNInfoService;


@CrossOrigin
@RestController
public class StudentESLInfoController {
	StudentESLInfoService studentESLInfoService;
	
	@RequestMapping(value = "/getStudentESLInfo/{acaYear}&{semester}&{studentID}", method = RequestMethod.GET, produces = "application/json")
	public StudentESLInfo getStudentinfoByIDREST(@PathVariable("acaYear") int acaYear, @PathVariable("semester") int semester, @PathVariable("studentID") int studentID) {
		try {
			studentESLInfoService = new StudentESLInfoService();
			return studentESLInfoService.getStudentInfoRegistrationbyID(acaYear, semester, studentID);
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getStudentESLAvaImage/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public String getStudentAvaImageByIDREST(@PathVariable("studentID") int studentID) {
		try {
			studentESLInfoService = new StudentESLInfoService();
			return studentESLInfoService.getAvaImage(studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
