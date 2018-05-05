package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ClassPassed;
import vn.edu.saigontech.source.Service.ServiceImpl.ClassPassedService;

@CrossOrigin
@RestController
public class ClassPassedController {
	ClassPassedService classPassedService;
	
	@RequestMapping(value = "/getClassPassed/{acaYear}&{semester}&{studentID}&{catalogID}", method = RequestMethod.GET, produces = "application/json")
	public List<ClassPassed> getClassPassedREST(@PathVariable("acaYear") int acaYear,
			@PathVariable("semester") int semester,@PathVariable("studentID") int studentID,
			@PathVariable("catalogID") int catalogID) {
		try {
			classPassedService= new ClassPassedService();
			return classPassedService.getClassPassed(acaYear, semester, studentID, catalogID);
		} catch (Exception e) {
			return null;
		} 
	}
}
