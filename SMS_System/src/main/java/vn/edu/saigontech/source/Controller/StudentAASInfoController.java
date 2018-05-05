package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ESLLevel;
import vn.edu.saigontech.source.Model.StudentAASInfo;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentAASInfoService;


@CrossOrigin
@RestController
public class StudentAASInfoController {
	StudentAASInfoService studentAASInfoService;
	
	@RequestMapping(value = "/getStudentAASInfo/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public StudentAASInfo getStudentinfoByIDREST(@PathVariable("studentID") int studentID) {
		try {
			studentAASInfoService = new StudentAASInfoService();
			return studentAASInfoService.getStudentAASInfo(studentID);
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getESLLevel/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public ESLLevel getESLLevel(@PathVariable("studentID") int studentID) {
		try {
			studentAASInfoService = new StudentAASInfoService();
			return studentAASInfoService.getESLLevel(studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
