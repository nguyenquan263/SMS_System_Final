package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.SystemTimeDAO;
import vn.edu.saigontech.source.Model.AcademicYear;
import vn.edu.saigontech.source.Model.SystemDateAndTime;
import vn.edu.saigontech.source.Model.SystemTime;

public class SystemTimeService implements vn.edu.saigontech.source.Service.SystemTimeService {
	private SystemTimeDAO systemTimeDAO;
	
	public SystemTimeService() throws ClassNotFoundException, SQLException {
		systemTimeDAO= new SystemTimeDAO();
	}
	@Override
	public SystemTime getSystemTime() {
		// TODO Auto-generated method stub
		return systemTimeDAO.getSystemTime();
	}
	@Override
	public List<AcademicYear> getAcaYear() {
		return systemTimeDAO.getAcaYear();
	}
	@Override
	public SystemDateAndTime getSystemDateAndTime(String format) {
		return systemTimeDAO.getSystemDateAndTime(format);
	}

}
