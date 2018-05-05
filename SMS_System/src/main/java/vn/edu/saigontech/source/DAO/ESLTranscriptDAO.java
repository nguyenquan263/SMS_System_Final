package vn.edu.saigontech.source.DAO;
import java.util.List;

import vn.edu.saigontech.source.Controller.ESLTranscriptTOEFL;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseBefore;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterBefore;
public interface ESLTranscriptDAO {
	public List<ESLTranscriptSemesterBefore> getESLTranscriptSemesterBefore(String stuId);
	public List<ESLTranscriptCourseBefore> getESLTranscriptCourseBefore(String stuId, String semester, String acaYear);
	public List<ESLTranscriptTOEFL> getESLTranscriptTOEFL(String stuId, String acaYear, String semester);
	public List<ESLTranscriptSemesterAfter> getESLTranscriptSemesterAfter(String stuId, String acaYear, String semester);
	public List<ESLTranscriptCourseAfter> getESLTranscriptCourseAfter(String stuId, String acaYear, String semester);
}
