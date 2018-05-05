package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.AssignmentGradeAAS;
import vn.edu.saigontech.source.Model.AssignmentGradeGE;
import vn.edu.saigontech.source.Model.GradeAASDetail;
import vn.edu.saigontech.source.Model.GradeGEDetail;
import vn.edu.saigontech.source.Model.GradeGETitle;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.Model.TeacherComment;
import vn.edu.saigontech.source.Service.ServiceImpl.GradeService;

@CrossOrigin
@RestController
public class GradeController {
	GradeService gradeAASService;
	
	/** Get AAS grade data
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getGradeAAS/{semester}&{acaYear}&{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<GradeAASDetail> getGradeAAS(@PathVariable("semester") Integer semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("stuId") Integer stuId) {
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getAllGrade(stuId, acaYear, semester);
		} catch (Exception e) {
			return null;
		}
	}
	
	/** Get policy 2 grade deduction
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param subjectCode Subject code
	 * @param studentCode Student code
	 */
	@RequestMapping(value = "/getPolicyGrade/{semester}&{acaYear}&{subjectCode}&{studentCode}", method = RequestMethod.GET, produces = "application/json")
	public List<Policy2Model> getPolicy2ForGrade(@PathVariable("semester") String semester, @PathVariable("acaYear") String acaYear, @PathVariable("subjectCode") String subjectCode,
			@PathVariable("studentCode") String studentCode) {
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getPolicy2ForGrade(semester, acaYear, subjectCode, studentCode);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get assignment grade in AAS courses
	 * @param studyCode Study code
	 * @param classCode Class code
	 */
	@RequestMapping(value = "/getAssgimentGradeAAS/{studyCode}&{classCode}", method = RequestMethod.GET, produces = "application/json")
	public List<AssignmentGradeAAS> getAssignmentGradeAAS(@PathVariable("studyCode") String studyCode, @PathVariable("classCode") String classCode){
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getAssignmentGradeAAS(studyCode, classCode);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get ESL grade title (Ex:  General English Integrated Level 2, General English Integrated Level 5, etc.)
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param studentId Student Id
	 */
	@RequestMapping(value = "/getGradeGE/{semester}&{acaYear}&{studentId}", method = RequestMethod.GET, produces = "application/json")
	public List<GradeGETitle> getGradeGETitle(@PathVariable("semester") String semester, @PathVariable("acaYear") String acaYear
			,@PathVariable("studentId") String studentId){
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getAllGradeGETitle(semester, acaYear, studentId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get grade ESL data
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param studentId Student Id
	 */
	@RequestMapping(value = "/getGradeGEDetail/{semester}&{acaYear}&{studentId}", method = RequestMethod.GET, produces = "application/json")
	public List<GradeGEDetail> getGradeGEDetail(@PathVariable("semester") String semester, @PathVariable("acaYear") String acaYear
			,@PathVariable("studentId") String studentId){
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getAllGradeGE(studentId, acaYear, semester);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get assignment grade in ESL
	 * @param studyCode Study code
	 * @param classCode Class code
	 */
	@RequestMapping(value = "/getAssgimentGradeGE/{studyCode}&{classCode}", method = RequestMethod.GET, produces = "application/json")
	public List<AssignmentGradeGE> getAssignmentGradeGE(@PathVariable("studyCode") String studyCode, @PathVariable("classCode") String classCode){
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getAssignmentGradeGE(studyCode, classCode);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	/** Get teachers' comments
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getTeacherComment/{semester}&{acaYear}&{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<TeacherComment> getTeacherComment(@PathVariable("semester") String semester, @PathVariable("acaYear") String acaYear
			, @PathVariable("stuId") String stuId){
		try {
			gradeAASService = new GradeService();
			return gradeAASService.getTeacherComment(semester, acaYear, stuId);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}

