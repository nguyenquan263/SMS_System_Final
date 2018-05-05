package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ClassOpened;
import vn.edu.saigontech.source.Service.ServiceImpl.ClassOpenedService;

@CrossOrigin
@RestController
public class ClassOpenedController {
	ClassOpenedService classOpenedService;
	
	@RequestMapping(value = "/getClassOpened/{acaYear}&{semester}&{studentID}&{majorCode}&{catalogID}", method = RequestMethod.GET, produces = "application/json")
	public List<ClassOpened> getClassOpenedREST(@PathVariable("acaYear") int acaYear,
			@PathVariable("semester") int semester,@PathVariable("studentID") int studentID,
			@PathVariable("majorCode") int majorCode,@PathVariable("catalogID") int catalogID) {
		try {
			classOpenedService= new ClassOpenedService();
			return classOpenedService.getClassOpened(acaYear, semester, studentID, majorCode, catalogID);
		} catch (Exception e) {
			return null;
		} 
	}
}
