package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentVNInfo;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentVNInfoService;
//Controller use for get student Info for VN Registration in Front End.
@CrossOrigin
@RestController
public class StudentVNInfoController {
	StudentVNInfoService studentVNInfoService;

	@RequestMapping(value = "/getStudentVNInfo/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public StudentVNInfo getStudentinfoByIDREST(@PathVariable("studentID") int studentID) {
		try {
			studentVNInfoService = new StudentVNInfoService();
			return studentVNInfoService.getStudentVNInfo(studentID);
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getStudentVNAvaImage/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public String getStudentAvaImageByIDREST(@PathVariable("studentID") int studentID) {
		try {
			studentVNInfoService = new StudentVNInfoService();
			return studentVNInfoService.getAvaImage(studentID);
		} catch (Exception e) {
			return null;
		}
	}
}