package vn.edu.saigontech.source.Controller;
//Written by Nguyen Ngoc Minh Quan.
//controller that allow user get information of VN classes and inserting or deleting them.
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.VNCourseRegistered;

import vn.edu.saigontech.source.Service.ServiceImpl.VNCourseService;

@CrossOrigin
@RestController
public class VNCourseController {
	private VNCourseService vcs;
	//class VN classes thich are available.
	@RequestMapping(value = "/getVNclassAvailableREST/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<VNCourseAvailable> getVNclassAvailable(@PathVariable("studentID") Integer studentID,
			@PathVariable("acaYear") Integer acaYear, @PathVariable("Semester") Integer Semester) {
		try {
			vcs = new VNCourseService();
			return vcs.getAllVNClassAvailable(studentID, acaYear, Semester);
		} catch (Exception e) {
			return null;
		}
	}
	//class VN classes thich are registered.
	@RequestMapping(value = "/getVNclassRegisteredREST/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<VNCourseRegistered> getVNclassRegistered(@PathVariable("studentID") Integer studentID,
			@PathVariable("acaYear") Integer acaYear, @PathVariable("Semester") Integer Semester) {
		try {
			vcs = new VNCourseService();
			return vcs.getAllVNClassRegistered(studentID, acaYear, Semester);
		} catch (Exception e) {
			return null;
		}
	}
	//delete VN class for student.
	@RequestMapping(value = "/deleteVncourseREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.TEXT_PLAIN_VALUE, consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public String deleteVncourse(@RequestParam(value = "studentCode", required = true) Integer studentCode,
			@RequestParam(value = "acaYear", required = true) Integer acaYear,
			@RequestParam(value = "Semester", required = true) Integer Semester,
//			@RequestParam(value = "ipAddress", required = true) String ipAddress,
			@RequestParam(value = "classCodes", required = true) String classCodes,
			@RequestParam(value = "studyCodes", required = true) String studyCodes,
			HttpServletRequest request) {

		try {
			String ipAddress = request.getRemoteAddr();
			vcs = new VNCourseService();
			return vcs.deleteVNCourses(studentCode, acaYear, Semester, ipAddress, classCodes, studyCodes);
		} catch (Exception e) {
			return e.getMessage();
		}

	}
	//insert classes for Student.
	@RequestMapping(value = "/insertVncourseREST", method = RequestMethod.POST, produces = org.springframework.http.MediaType.APPLICATION_JSON_VALUE, consumes = {
			"application/json", "application/x-www-form-urlencoded", "multipart/form-data" })
	public String insertVncourse(@RequestParam(value = "studentCode", required = true) String studentCode,
			@RequestParam(value = "acaYear", required = true) String acaYear,
			@RequestParam(value = "Semester", required = true) String Semester,
//			@RequestParam(value = "ipAddress", required = true) String ipAddress,
			@RequestParam(value = "classCodeOpen", required = true) String classCodesChecked,
			HttpServletRequest request) {

		try {
			String ipAddress = request.getRemoteAddr();
			vcs = new VNCourseService();
			return vcs.insertVNCourses(Integer.parseInt(studentCode), Integer.parseInt(acaYear),
					Integer.parseInt(Semester), ipAddress, classCodesChecked);
		} catch (Exception e) {
			return e.getMessage();
		}

	}
	
	
}
