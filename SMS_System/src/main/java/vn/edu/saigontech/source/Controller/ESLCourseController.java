package vn.edu.saigontech.source.Controller;
//Written by Nguyen Ngoc Minh Quan.
//controller that allow user get information of ESL classes and inserting or deleting them.
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ESLCourseAvailable;
import vn.edu.saigontech.source.Model.ESLCourseRegistered;

import vn.edu.saigontech.source.Service.ServiceImpl.ESLCourseService;

@CrossOrigin
@RestController
public class ESLCourseController {
	private ESLCourseService vcs;
	//class ESL classes thich are available.
	@RequestMapping(value = "/getESLclassAvailableREST/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLCourseAvailable> getESLclassAvailable(@PathVariable("studentID") Integer studentID,
			@PathVariable("acaYear") Integer acaYear, @PathVariable("Semester") Integer Semester) {
		try {
			vcs = new ESLCourseService();
			return vcs.getAlleslClassavailable(studentID, acaYear, Semester);
		} catch (Exception e) {
			return null;
		}
	}
	//class ESL classes thich are registered.
	@RequestMapping(value = "/getESLclassRegisteredREST/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLCourseRegistered> getESLclassRegistered(@PathVariable("studentID") Integer studentID,
			@PathVariable("acaYear") Integer acaYear, @PathVariable("Semester") Integer Semester) {
		try {
			vcs = new ESLCourseService();
			return vcs.getAlleslClassregistered(studentID, acaYear, Semester);
		} catch (Exception e) {
			return null;
		}
	}
	//Delete ESL Course for student.
	@RequestMapping(value = "/deleteEslcourseREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.TEXT_PLAIN_VALUE, consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public String deleteEslcourse(@RequestParam(value = "studentCode", required = true) Integer studentCode,
			@RequestParam(value = "acaYear", required = true) Integer acaYear,
			@RequestParam(value = "Semester", required = true) Integer Semester,
			//@RequestParam(value = "ipAddress", required = true) String ipAddress,
			@RequestParam(value = "classCodes", required = true) String classCodes,
			HttpServletRequest request) {

		try {
			String ipAddress = request.getRemoteAddr();
			System.out.println("ok");
			vcs = new ESLCourseService();
			String[] tempStringArr = classCodes.split(",");
			
			Integer[] tempNumArr = new Integer[tempStringArr.length];
			
			for (int i = 0 ; i < tempNumArr.length ; i++)
				tempNumArr[i] = Integer.parseInt(tempStringArr[i]);
			//call method to delete that course
			return vcs.deleteSelectedCourse(tempNumArr, studentCode, acaYear, Semester, ipAddress);
		} catch (Exception e) {
			return e.getMessage();
		}

	}
	//Insert ESL Course for student
	@RequestMapping(value = "/insertEslcourseREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.TEXT_PLAIN_VALUE, consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public String insertEslcourse(@RequestParam(value = "studentCode", required = true) Integer studentCode,
			@RequestParam(value = "acaYear", required = true) Integer acaYear,
			@RequestParam(value = "Semester", required = true) Integer Semester,
			//@RequestParam(value = "ipAddress", required = true) String ipAddress,
			@RequestParam(value = "classCodes", required = true) String classCodes,
			HttpServletRequest request) {

		try {
			String ipAddress = request.getRemoteAddr();
			System.out.println(classCodes);
			vcs = new ESLCourseService();
			String[] tempStringArr = classCodes.split(",");
			
			Integer[] tempNumArr = new Integer[tempStringArr.length];
			
			for (int i = 0 ; i < tempNumArr.length ; i++)
				tempNumArr[i] = Integer.parseInt(tempStringArr[i]);
			//call method to insert selected course
			return vcs.insertSelectedCourse(tempNumArr, studentCode, acaYear, Semester, ipAddress);
		} catch (Exception e) {
			return e.getMessage();
		}

	}
	

}
