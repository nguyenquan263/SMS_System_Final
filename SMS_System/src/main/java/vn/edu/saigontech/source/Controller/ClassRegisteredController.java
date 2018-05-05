package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ClassRegistered;
import vn.edu.saigontech.source.Service.ServiceImpl.ClassRegisteredService;

@CrossOrigin
@RestController
public class ClassRegisteredController {
	ClassRegisteredService classRegisteredService;
	
	@RequestMapping(value = "/getClassRegistered/{acaYear}&{semester}&{studentID}", method = RequestMethod.GET, produces = "application/json")
	public List<ClassRegistered> getClassRegisteredREST(@PathVariable("acaYear") int acaYear,
			@PathVariable("semester") int semester,@PathVariable("studentID") int studentID) {
		try {
			classRegisteredService= new ClassRegisteredService();
			return classRegisteredService.getClassRegistered(acaYear, semester, studentID);
		} catch (Exception e) {
			return null;
		} 
	}
}
