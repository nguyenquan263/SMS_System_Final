package vn.edu.saigontech.source.Controller;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.DarsDegreeGranted;
import vn.edu.saigontech.source.Model.DarsEnrichmentCourse;
import vn.edu.saigontech.source.Model.DarsEnrichmentSemester;
import vn.edu.saigontech.source.Model.DarsOthersCourse;
import vn.edu.saigontech.source.Model.DarsOthersSemester;
import vn.edu.saigontech.source.Model.DarsStudentInfo;
import vn.edu.saigontech.source.Model.DarsStudentInfoScore;
import vn.edu.saigontech.source.Model.DarsTOEFL_IELTS;
import vn.edu.saigontech.source.Service.ServiceImpl.DarsService;

@CrossOrigin
@RestController
public class DarsController {
	private DarsService darsService;
	
	@RequestMapping(value = "/getDarsStudentInfo/", method = RequestMethod.GET, produces = "application/json")
	public List<DarsStudentInfo> getAASTranscriptSemester() {
		try {
			darsService = new DarsService();
			return darsService.getDarsStudentInfo();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsTOELF_IELTS/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<DarsTOEFL_IELTS> getDarsTOELF_IELTS(@PathVariable("stuId") String stuId) {
		try {
			darsService = new DarsService();
			return darsService.getDarsToEFL_ITELTS(stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsStudentInfoScore/{stuId}&{id_seq}", method = RequestMethod.GET, produces = "application/json")
	public DarsStudentInfoScore getDarsStudentInfoScore(@PathVariable("stuId") String stuId,@PathVariable("id_seq") String id_seq) {
		try {
			darsService = new DarsService();
			return darsService.getDarsStudentInfoScore(stuId, id_seq);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsEnrichmentSemester/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<DarsEnrichmentSemester> getDarsEnrichmentSemester(@PathVariable("stuId") String stuId) {
		try {
			darsService = new DarsService();
			return darsService.getDarsEnrichmentSemester(stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsEnrichmentCourse/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<DarsEnrichmentCourse> getDarsEnrichmentCourse(@PathVariable("stuId") String stuId, @PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			darsService = new DarsService();
			return darsService.getDarsEnrichmentCourse(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsOthersSemester/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public  List<DarsOthersSemester> getDarsOthersSemester(@PathVariable("stuId") String stuId) {
		try {
			darsService = new DarsService();
			return darsService.getDarsOthersSemester(stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsOtherCourse/{stuId}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public List<DarsOthersCourse> getDarsOtherCourse(@PathVariable("stuId") String stuId, @PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			darsService = new DarsService();
			return darsService.getDarsOtherCourse(stuId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	@RequestMapping(value = "/getDarsDegreeGranted/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<DarsDegreeGranted> getDarsDegreeGranted(@PathVariable("stuId") String stuId) {
		try {
			darsService = new DarsService();
			return darsService.getDarsDegreeGranted(stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
