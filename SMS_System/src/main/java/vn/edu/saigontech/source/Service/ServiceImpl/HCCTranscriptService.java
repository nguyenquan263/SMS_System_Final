package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.HCCTranscriptDAO;
import vn.edu.saigontech.source.Model.HCCTranscript;
import vn.edu.saigontech.source.Model.HCCTranscriptAverageGPA;
import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;

public class HCCTranscriptService implements vn.edu.saigontech.source.Service.HCCTranscriptService{
	
	private HCCTranscriptDAO hccTranscriptDAO;
	
	public HCCTranscriptService() throws ClassNotFoundException, SQLException {
		hccTranscriptDAO = new HCCTranscriptDAO();
	}
	
	@Override
	public List<HCCTranscriptGeneralInfo> getHCCTranscriptGeneralInfo(String stuId) {
		return hccTranscriptDAO.getHCCTranscriptGeneralInfo(stuId);
	}

	@Override
	public List<HCCTranscript> getHCCTranscript(String stuId) {
		return hccTranscriptDAO.getHCCTranscript(stuId);
	}

	@Override
	public List<HCCTranscriptAverageGPA> getAverageGPA(String stuId, String acaYear, String semester) {
		return hccTranscriptDAO.getAverageGPA(stuId, acaYear, semester);
	}

}
