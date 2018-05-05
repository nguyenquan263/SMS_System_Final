package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentProhibited;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentProhibitedService;

@CrossOrigin
@RestController
public class StudentProhibitedController 
{
	StudentProhibitedService studentProhibitedService;

	@RequestMapping(value = "/getStudentProhibitedInformation/{semester}&{acaYear}&{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<StudentProhibited> getStudentinfoByIDREST(@PathVariable("semester") Integer semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("stuId") Integer stuId) {
		try {
			studentProhibitedService = new StudentProhibitedService();
			return studentProhibitedService.getAllstudentProhibitedInformationbyCondition(semester, acaYear, stuId);
		} catch (Exception e) {
			return null;
		}
	}}
