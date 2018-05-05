package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.AASTranscriptDAO;
import vn.edu.saigontech.source.Model.AASTranscriptCourse;
import vn.edu.saigontech.source.Model.AASTranscriptSemester;

public class AASTranscriptService implements vn.edu.saigontech.source.Service.AASTranscriptService{
	
	private AASTranscriptDAO aasTransDao;
	public AASTranscriptService() throws ClassNotFoundException, SQLException {
		aasTransDao = new AASTranscriptDAO();
	}
	
	@Override
	public List<AASTranscriptSemester> getAASTranscriptSemester(String stuId, String acaYear, String semester) {
		return aasTransDao.getAASTranscriptSemester(stuId, acaYear, semester);
	}

	@Override
	public List<AASTranscriptCourse> getAASTranscriptCourse(String stuId, String acaYear, String semester) {
		return aasTransDao.getAASTranscriptCourse(stuId, acaYear, semester);
	}
	
}
