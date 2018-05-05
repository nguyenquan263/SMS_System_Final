package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ClassInformation;

import vn.edu.saigontech.source.Service.ServiceImpl.ClassInformationService;


@CrossOrigin
@RestController
public class ClassInformationController {
	
	ClassInformationService classInformationService;
	
	@RequestMapping(value = "/getAllclassInformation1/{Semester}&{acaYear}&{Type}", method = RequestMethod.GET, produces = "application/json")
	public List<ClassInformation> getStudentinfoByIDREST(@PathVariable("Semester") Integer Semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("Type") int Type) {
		try {
			classInformationService = new ClassInformationService();
			return classInformationService.getAllclassInformationbyCondition(Semester, acaYear, Type);
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getAllclassInformation2/{Semester}&{acaYear}", method = RequestMethod.GET, produces = "application/json")
	public List<ClassInformation> getStudentinfoByIDREST(@PathVariable("Semester") Integer Semester, @PathVariable("acaYear") Integer acaYear) {
		try {
			classInformationService = new ClassInformationService();
			return classInformationService.getAllclassInformation(Semester, acaYear);
		} catch (Exception e) {
			return null;
		}
	}

}
