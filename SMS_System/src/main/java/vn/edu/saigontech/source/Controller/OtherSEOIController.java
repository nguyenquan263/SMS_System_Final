package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.OtherSEOIOtherCoursesInfo;
import vn.edu.saigontech.source.Service.ServiceImpl.AASTranscriptService;
import vn.edu.saigontech.source.Service.ServiceImpl.OtherSEOIService;

/** This class gets Other SEOI transcript data through REST services
 * @author Nguyen Bao Hoang Long
 * Written on 22/03/2018
 */
@CrossOrigin
@RestController
public class OtherSEOIController {

	OtherSEOIService otherSEOIService;
	
	/** Get general courses information of other SEOI courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getOtherSEOICoursesInfo/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<OtherSEOIOtherCoursesInfo> getOtherSEOICoursesInfo(@PathVariable("stuId") String stuId, @PathVariable("acaYear") String acaYear
			, @PathVariable("semester") String semester) {
		try {
			otherSEOIService = new OtherSEOIService();
			return otherSEOIService.getOtherCourseInfo(semester,acaYear,stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** To check if the student has evaluate a specific teacher in a specific course already or not
	 * @param stuId Student Id
	 * @param classId Class Id
	 * @param teacherId Teacher Id
	 */
	@RequestMapping(value = "/isStatus/{stuId}&{classId}&{teacherId}", method = RequestMethod.GET, produces = "application/json")
	public boolean isStatus(@PathVariable("stuId") String stuId, @PathVariable("classId") String classId
			, @PathVariable("teacherId") String teacherId) {
		try {
			otherSEOIService = new OtherSEOIService();
			return otherSEOIService.isStatus(stuId, classId, teacherId);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	/** To check if it is in the evaluation time
	 * @param stuId Student Id
	 * @param classId Class Id
	 * @param teacherId Teacher Id
	 */
	@RequestMapping(value = "/isEvaluationTime/{classId}", method = RequestMethod.GET, produces = "application/json")
	public boolean isCheckTime(@PathVariable("classId") String classId) {
		try {
			otherSEOIService = new OtherSEOIService();
			return otherSEOIService.isCheckTime(classId);
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
}
