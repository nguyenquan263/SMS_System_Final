package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.GradeDAO;
import vn.edu.saigontech.source.Model.AssignmentGradeAAS;
import vn.edu.saigontech.source.Model.AssignmentGradeGE;
import vn.edu.saigontech.source.Model.GradeAASDetail;
import vn.edu.saigontech.source.Model.GradeGEDetail;
import vn.edu.saigontech.source.Model.GradeGETitle;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.Model.TeacherComment;

public class GradeService implements vn.edu.saigontech.source.Service.GradeService
{
	private GradeDAO gradeDAO;
	
	public GradeService() throws ClassNotFoundException, SQLException {
		gradeDAO = new GradeDAO();
	}
	
	@Override
	public List<GradeAASDetail> getAllGrade(Integer studentId, Integer acaYear, Integer semester) {
		return gradeDAO.getAllGradeAAS(studentId, acaYear, semester);
	}

	@Override
	public List<Policy2Model> getPolicy2ForGrade(String semester, String acaYear, String subjectCode, String studentCode) {
		return gradeDAO.getPolicy2ForGradeAAS(semester, acaYear, subjectCode, studentCode);
	}

	@Override
	public List<AssignmentGradeAAS> getAssignmentGradeAAS(String studyCode, String classCode) {
		return gradeDAO.getAssignmentGradeAAS(studyCode, classCode);
	}

	@Override
	public List<GradeGETitle> getAllGradeGETitle(String semester, String acaYear, String studentId) {
		return gradeDAO.getAllGradeGETitle(semester, acaYear, studentId);
	}

	@Override
	public List<GradeGEDetail> getAllGradeGE(String studentId, String acaYear, String semester) {
		return gradeDAO.getAllGradeGE(studentId, acaYear, semester);
	}

	@Override
	public List<AssignmentGradeGE> getAssignmentGradeGE(String studyCode, String classCode) {
		return gradeDAO.getAssignmentGradeGE(studyCode, classCode);
	}

	@Override
	public List<TeacherComment> getTeacherComment(String semester, String acaYear, String stuId) {
		return gradeDAO.getTeacherComment(semester, acaYear, stuId);
	}

}
