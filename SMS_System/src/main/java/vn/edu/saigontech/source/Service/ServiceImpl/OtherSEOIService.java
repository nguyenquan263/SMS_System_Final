package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.OtherSEOIDAO;
import vn.edu.saigontech.source.Model.OtherSEOIOtherCoursesInfo;
import vn.edu.saigontech.source.Model.OtherSEOIQuestion;

public class OtherSEOIService implements vn.edu.saigontech.source.Service.OtherSEOIService{
	private OtherSEOIDAO otherSEOIDAO;
	
	public OtherSEOIService() throws ClassNotFoundException, SQLException {
		otherSEOIDAO = new OtherSEOIDAO();
	}
	
	@Override
	public List<OtherSEOIOtherCoursesInfo> getOtherCourseInfo(String semester, String acaYear, String stuId) {
		return otherSEOIDAO.getOtherCourseInfo(semester, acaYear, stuId);
	}

	@Override
	public boolean isStatus(String stuId, String classId, String teacherId) {
		return otherSEOIDAO.isStatus(stuId, classId, teacherId);
	}

	@Override
	public boolean isCheckTime(String classId) {
		return otherSEOIDAO.isCheckTime(classId);
	}

	@Override
	public void insertOtherStudentEvaluationComment(String stuId, String class_id, String id_teacher, String comment) {
		otherSEOIDAO.insertOtherStudentEvaluationComment(stuId, class_id, id_teacher, comment);
	}

	@Override
	public void insertOtherStudentEvaluation(String stuId, String class_id, String question_id, String value,
			String id_teacher) {
		otherSEOIDAO.insertOtherStudentEvaluation(stuId, class_id, question_id, value, id_teacher);
	}

	@Override
	public List<OtherSEOIQuestion> getOtherSEOIQuestions() {
		return otherSEOIDAO.getOtherSEOIQuestions();
	}
	
	
	
}	
