package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.TimetableForRegisDAO;
import vn.edu.saigontech.source.Model.TimetableForRegis;

public class TimetableForRegisService implements vn.edu.saigontech.source.Service.TimetableForRegisService {
	private TimetableForRegisDAO td;
	
	public TimetableForRegisService() {
		td = new TimetableForRegisDAO();
	}
	
	@Override
	public TimetableForRegis getTimetable(String classCode, String acaYear, String semester)
			throws ClassNotFoundException, SQLException {
		
		return td.getTimetable(classCode, acaYear, semester);
	}

}
