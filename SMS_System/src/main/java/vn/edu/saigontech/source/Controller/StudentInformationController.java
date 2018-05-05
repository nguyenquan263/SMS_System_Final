package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentInformation;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentInformationService;
@CrossOrigin
@RestController
public class StudentInformationController {
	StudentInformationService studentInformationService;

	@RequestMapping(value = "/getStudentinfoByIDREST/{id}", method = RequestMethod.GET, produces = "application/json")
	public StudentInformation getStudentinfoByIDREST(@PathVariable("id") int id) {
		try {
			studentInformationService = new StudentInformationService();
			return studentInformationService.getStudentinfoByID(id);
		} catch (Exception e) {
			return null;
		}
	}
}
