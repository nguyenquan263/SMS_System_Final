package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentVNInfoDAO;
import vn.edu.saigontech.source.Model.StudentVNInfo;

public class StudentVNInfoService implements vn.edu.saigontech.source.Service.StudentVNInfoService {
	private StudentVNInfoDAO studentVNInfoDAO;
	public StudentVNInfoService() throws ClassNotFoundException, SQLException {
		studentVNInfoDAO = new StudentVNInfoDAO();
	}
	@Override
	public StudentVNInfo getStudentVNInfo(Integer studentID) {
		
		try {
			return studentVNInfoDAO.getStudentInfoRegistrationbyID(studentID);
		} catch (ClassNotFoundException e) {
			return null;
		} catch (SQLException e) {
			return null;
		}
		
	}
	@Override
	public String getAvaImage(Integer studentID) {
		try {
			return studentVNInfoDAO.getAvaImage(studentID);
		} catch (ClassNotFoundException e) {
			return null;
		} catch (SQLException e) {
			return null;
		}
	}

}
