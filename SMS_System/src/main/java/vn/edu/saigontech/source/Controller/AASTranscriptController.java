package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.AASTranscriptCourse;
import vn.edu.saigontech.source.Model.AASTranscriptSemester;
import vn.edu.saigontech.source.Service.ServiceImpl.AASTranscriptService;
/** This class gets AAS transcript data through REST services
 * @author Nguyen Bao Hoang Long
 * Written on 22/03/2018
 */

@CrossOrigin
@RestController
public class AASTranscriptController {
	AASTranscriptService aasTransService;
	
	/** Get semester in which student studied AAS courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getAASTranscriptSemester/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<AASTranscriptSemester> getAASTranscriptSemester(@PathVariable("stuId") String stuId, @PathVariable("acaYear") String acaYear
			, @PathVariable("semester") String semester) {
		try {
			aasTransService = new AASTranscriptService();
			return aasTransService.getAASTranscriptSemester(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get AAS courses that the student studied
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester
	 */
	@RequestMapping(value = "/getAASTranscriptCourse/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<AASTranscriptCourse> getAASTranscriptCourse(@PathVariable("stuId") String stuId, @PathVariable("acaYear") String acaYear
			, @PathVariable("semester") String semester) {
		try {
			aasTransService = new AASTranscriptService();
			return aasTransService.getAASTranscriptCourse(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
