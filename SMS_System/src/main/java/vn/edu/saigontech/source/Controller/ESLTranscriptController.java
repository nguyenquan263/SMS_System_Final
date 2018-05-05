package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.ESLTranscriptCourseAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseBefore;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterBefore;
import vn.edu.saigontech.source.Service.ServiceImpl.ESLTranscriptService;
/** This class is used to get ESL transcript data through REST services
 * @author Nguyen Bao Hoang Long
 * Written on 22/03/2018
 */

@CrossOrigin
@RestController
public class ESLTranscriptController {
	private ESLTranscriptService eslTranscriptService;
	
	/** Get semesters (before SPRING 2003) in which the student studied ESL courses
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getELSTranscriptSemesterBefore/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLTranscriptSemesterBefore> getESLTranscriptSemesterBefore(@PathVariable("stuId") String stuId) {
		try {
			eslTranscriptService = new ESLTranscriptService();
			return eslTranscriptService.getESLTranscriptSemesterBefore(stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get ESL courses (before SPRING 2003) that the student studied
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getELSTranscriptCourseBefore/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLTranscriptCourseBefore> getESLranscriptCourseBefore(@PathVariable("stuId") String stuId,
			@PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			eslTranscriptService = new ESLTranscriptService();
			return eslTranscriptService.getESLTranscriptCourseBefore(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get TOEFL score in each ESL semester
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getELSTranscriptTOEFL/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLTranscriptTOEFL> getESLranscriptTOEFL(@PathVariable("stuId") String stuId,
			@PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			eslTranscriptService = new ESLTranscriptService();
			return eslTranscriptService.getESLTranscriptTOEFL(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get semesters (after SPRING 2003) in which student studied ESL courses 
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getESLTranscriptSemesterAfter/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLTranscriptSemesterAfter> getESLTranscriptSemesterAfter(@PathVariable("stuId") String stuId,
			@PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			eslTranscriptService = new ESLTranscriptService();
			return eslTranscriptService.getESLTranscriptSemesterAfter(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get ESL courses (after SPRING 2003) that the student studied
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester
	 */
	@RequestMapping(value = "/getESLTranscriptCourseAfter/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<ESLTranscriptCourseAfter> getESLTranscriptCourseAfter(@PathVariable("stuId") String stuId,
			@PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			eslTranscriptService = new ESLTranscriptService();
			return eslTranscriptService.getESLTranscriptCourseAfter(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
