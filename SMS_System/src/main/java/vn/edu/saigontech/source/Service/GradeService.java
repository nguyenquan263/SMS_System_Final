package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.AssignmentGradeAAS;
import vn.edu.saigontech.source.Model.AssignmentGradeGE;
import vn.edu.saigontech.source.Model.GradeAASDetail;
import vn.edu.saigontech.source.Model.GradeGEDetail;
import vn.edu.saigontech.source.Model.GradeGETitle;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.Model.TeacherComment;

public interface GradeService 
{
	public List<GradeAASDetail> getAllGrade(Integer studentId, Integer acaYear, Integer semester);
	public List<Policy2Model> getPolicy2ForGrade(String semester, String acaYear, String subjectCode, String studentCode);
	public List<AssignmentGradeAAS> getAssignmentGradeAAS(String studyCode, String classCode);
	public List<GradeGETitle> getAllGradeGETitle(String semester, String acaYear, String studentId);
	public List<GradeGEDetail> getAllGradeGE(String studentId, String acaYear, String semester);
	public List<AssignmentGradeGE> getAssignmentGradeGE(String studyCode, String classCode);
	public List<TeacherComment> getTeacherComment(String semester, String acaYear, String stuId);
}
