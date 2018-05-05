package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentAASInfoDAO;
import vn.edu.saigontech.source.Model.ESLLevel;
import vn.edu.saigontech.source.Model.StudentAASInfo;

public class StudentAASInfoService implements vn.edu.saigontech.source.Service.StudentAASInfoService {
	
	private StudentAASInfoDAO studentAASInfoDAO;
	
	public StudentAASInfoService() throws ClassNotFoundException, SQLException {
		studentAASInfoDAO= new StudentAASInfoDAO();
	}
	@Override
	public StudentAASInfo getStudentAASInfo(Integer studentID) {
		// TODO Auto-generated method stub
		return studentAASInfoDAO.getStudentAASInfo(studentID);
	}
	@Override
	public ESLLevel getESLLevel(Integer studentID) {
		// TODO Auto-generated method stub
		return studentAASInfoDAO.getESLLevel(studentID);
	}

}
