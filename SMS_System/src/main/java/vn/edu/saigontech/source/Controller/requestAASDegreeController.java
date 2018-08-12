package vn.edu.saigontech.source.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import vn.edu.saigontech.source.Model.AASDegreeRequest;
import vn.edu.saigontech.source.Service.ServiceImpl.requestAASDegreeService;
@CrossOrigin
@RestController
public class requestAASDegreeController {
	requestAASDegreeService rads;

	
	@RequestMapping(value = "/getAASDegreeRequestByStudentIDREST/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public AASDegreeRequest getAASREquest(@PathVariable("studentID") Integer studentID) {
		try {
			rads = new requestAASDegreeService();
			return rads.getRequestbyStudentID(studentID);
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/checkStudentFinishAAS/{studentID}", method = RequestMethod.GET, produces = "application/json")
	public Boolean getStudentFinish(@PathVariable("studentID") Integer studentID) {
		try {
			rads = new requestAASDegreeService();
			return rads.isStudentFinishAASProgram(studentID);
		} catch (Exception e) {
			return null;
		}
	}

}
