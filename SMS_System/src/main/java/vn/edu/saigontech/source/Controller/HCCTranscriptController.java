package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.HCCTranscript;
import vn.edu.saigontech.source.Model.HCCTranscriptAverageGPA;
import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;
import vn.edu.saigontech.source.Service.ServiceImpl.HCCTranscriptService;

@CrossOrigin
@RestController
public class HCCTranscriptController {
	private HCCTranscriptService hccTranscriptService;
	
	/** Get student's general information
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getHCCTranscriptGeneralInfo/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<HCCTranscriptGeneralInfo> getHCCTranscriptGeneralInfo(@PathVariable("stuId") String stuId) {
		try {
			hccTranscriptService = new HCCTranscriptService();
			return hccTranscriptService.getHCCTranscriptGeneralInfo(stuId);
		} catch (Exception e) {
			return null;
		}
	}
	
	/** Get HCC Transcript data
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getHCCTranscript/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<HCCTranscript> getHCCTranscript(@PathVariable("stuId") String stuId) {
		try {
			hccTranscriptService = new HCCTranscriptService();
			return hccTranscriptService.getHCCTranscript(stuId);
		} catch (Exception e) {
			return null;
		}
	}
	
	/** Get HCC Transcript average GPA
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@RequestMapping(value = "/getHCCTranscriptAverageGPA/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<HCCTranscriptAverageGPA> getAverageGPA(@PathVariable("stuId") String stuId,@PathVariable("acaYear") String acaYear,
			@PathVariable("semester") String semester) {
		try {
			hccTranscriptService = new HCCTranscriptService();
			return hccTranscriptService.getAverageGPA(stuId, acaYear, semester);
		} catch (Exception e) {
			return null;
		}
	}
	
}
