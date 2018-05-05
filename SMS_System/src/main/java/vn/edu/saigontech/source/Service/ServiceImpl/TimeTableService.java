package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;


import vn.edu.saigontech.source.DAO.DAOImpl.TimeTableDAO;
import vn.edu.saigontech.source.Model.TimeTable;

//Written by Dang Quoc Thanh Phong
public class TimeTableService implements vn.edu.saigontech.source.Service.TimeTableService{
	TimeTableDAO timeTableDAO;
	
	public TimeTableService() throws ClassNotFoundException, SQLException {
		timeTableDAO=new TimeTableDAO();
	}
	//Call to DAO to get data
	@Override
	public TimeTable getTimeTable(Integer Semester, Integer academicYear, String studentId,String beginDate,String endDate) {
		// TODO Auto-generated method stub
		return timeTableDAO.getTimeTable(Semester, academicYear, studentId, beginDate, endDate);
	}

}
