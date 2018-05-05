package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Controller.ESLTranscriptTOEFL;
import vn.edu.saigontech.source.DAO.DAOImpl.ESLTranscriptDAO;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseBefore;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterBefore;

public class ESLTranscriptService implements vn.edu.saigontech.source.Service.ESLTranscriptService
{
	private ESLTranscriptDAO eslTranscriptDAO;
	
	public ESLTranscriptService() throws ClassNotFoundException, SQLException {
		eslTranscriptDAO = new ESLTranscriptDAO();
	}
	@Override
	public List<ESLTranscriptSemesterBefore> getESLTranscriptSemesterBefore(String stuId) {
		return eslTranscriptDAO.getESLTranscriptSemesterBefore(stuId);
	}
	@Override
	public List<ESLTranscriptCourseBefore> getESLTranscriptCourseBefore(String stuId, String acaYear,
			String semester) {
		return eslTranscriptDAO.getESLTranscriptCourseBefore(stuId, semester, acaYear);
	}
	@Override
	public List<ESLTranscriptTOEFL> getESLTranscriptTOEFL(String stuId, String acaYear, String semester) {
		return eslTranscriptDAO.getESLTranscriptTOEFL(stuId, acaYear, semester);
	}
	@Override
	public List<ESLTranscriptSemesterAfter> getESLTranscriptSemesterAfter(String stuId, String acaYear,
			String semester) {
		return eslTranscriptDAO.getESLTranscriptSemesterAfter(stuId, acaYear, semester);
	}
	@Override
	public List<ESLTranscriptCourseAfter> getESLTranscriptCourseAfter(String stuId, String acaYear, String semester) {
		return eslTranscriptDAO.getESLTranscriptCourseAfter(stuId, acaYear, semester);
	}

}
