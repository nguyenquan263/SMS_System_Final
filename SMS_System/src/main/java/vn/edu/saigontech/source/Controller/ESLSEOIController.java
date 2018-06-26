package vn.edu.saigontech.source.Controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;

import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.Model.teacherInformationForESLSEOI;
import vn.edu.saigontech.source.Service.ServiceImpl.VNCourseService;
import vn.edu.saigontech.source.Service.ServiceImpl.seoiESLService;


@CrossOrigin
@RestController
public class ESLSEOIController {
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

	@RequestMapping(value = "/getESLSEOITeacherInfoREST/{classid}&{teacherid}", method = RequestMethod.GET, produces = "application/json")
	public teacherInformationForESLSEOI getESLSEOITeacher(@PathVariable("classid") Integer classID,
			@PathVariable("teacherid") Integer teacherID) {
		try {
			sel = new seoiESLService();
			return sel.getTeacherInformationByClassID(classID, teacherID);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	@RequestMapping(value = "/insertESLSEOIPointREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.APPLICATION_JSON_VALUE, consumes = {
			"application/json","application/x-www-form-urlencoded", "multipart/form-data" })
	public String insertVncourse(@RequestParam(value = "studentID", required = true) String studentID,
			@RequestParam(value = "Semester", required = true) String Semester,
			@RequestParam(value = "acaYear", required = true) String acaYear,
			@RequestParam(value = "instructorID", required = true) String instructorID,
			@RequestParam(value = "classID", required = true) String classID,
			@RequestParam(value = "questionID", required = true) String questionID,
			@RequestParam(value = "pointList", required = true) String pointList) {

		try {
			sel = new seoiESLService();
			return sel.addPoints(studentID, Semester, acaYear, classID, instructorID, questionID, pointList);
			
		} catch (Exception e) {
			return e.getMessage();
		}

	}
	
	@RequestMapping(value = "/insertESLSEOICommentREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.APPLICATION_JSON_VALUE, consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public String insertVncourse(@RequestParam(value = "studentID", required = true) String studentID,
			@RequestParam(value = "Semester", required = true) String Semester,
			@RequestParam(value = "acaYear", required = true) String acaYear,
			@RequestParam(value = "instructorID", required = true) String instructorID,
			@RequestParam(value = "classID", required = true) String classID,
			@RequestParam(value = "comment", required = true) String comment) {

		try {
			sel = new seoiESLService();
			return sel.addComment(studentID, Semester, acaYear, classID, instructorID, comment);
			
		} catch (Exception e) {
			return e.getMessage();
		}

	}

}
