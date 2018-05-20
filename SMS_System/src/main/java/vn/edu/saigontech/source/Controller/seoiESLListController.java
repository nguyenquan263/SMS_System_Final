package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;
import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.Service.ServiceImpl.VNCourseService;
import vn.edu.saigontech.source.Service.ServiceImpl.seoiESLService;

@CrossOrigin
@RestController
public class seoiESLListController {
	private seoiESLService sel;
	
	@RequestMapping(value = "/getSystemTimeSEOIREST", method = RequestMethod.GET, produces = "application/json")
	public systemTimeForSEOI getSystemTime() {
		try {
			sel = new seoiESLService();
			return sel.getSystemTime();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getESLClassSEOIREST/{semester}&{acayear}&{studentid}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLClassInformationForSEOI> getESLSEOIClasses(@PathVariable("studentid") Integer studentID,
			@PathVariable("acayear") Integer acaYear, @PathVariable("semester") Integer Semester) {
		try {
			sel = new seoiESLService();
			return sel.getAllESLClassForSEOI(Semester, acaYear, studentID);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getESLSEOIQuestionREST/{semester}&{acayear}&{type}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLSEOIQuestion> getESLSEOIQuestion(@PathVariable("type") Integer type,
			@PathVariable("acayear") Integer acaYear, @PathVariable("semester") Integer Semester) {
		try {
			sel = new seoiESLService();
			return sel.getAllQuestionSEOI(Semester, acaYear, type);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

}
