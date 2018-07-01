package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.OtherSEOIOtherCoursesInfo;
import vn.edu.saigontech.source.Model.OtherSEOIQuestion;

public interface OtherSEOIService {
	public List<OtherSEOIOtherCoursesInfo> getOtherCourseInfo(String semester, String acaYear, String stuId);
	public boolean isStatus(String stuId, String classId, String teacherId);
	public boolean isCheckTime(String classId);
	public void insertOtherStudentEvaluationComment(String stuId, String class_id, String id_teacher, String comment);
	public void insertOtherStudentEvaluation(String stuId, String class_id, String question_id, String value,
			String id_teacher);
	public List<OtherSEOIQuestion> getOtherSEOIQuestions();
}
