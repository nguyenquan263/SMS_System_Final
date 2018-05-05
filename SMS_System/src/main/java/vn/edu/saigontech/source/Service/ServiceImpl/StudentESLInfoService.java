package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentESLInfoDAO;
import vn.edu.saigontech.source.DAO.DAOImpl.StudentVNInfoDAO;
import vn.edu.saigontech.source.Model.StudentESLInfo;

public class StudentESLInfoService implements vn.edu.saigontech.source.Service.StudentESLInfoService {
	private StudentESLInfoDAO studentESLInfoDAO;
	public StudentESLInfoService() throws ClassNotFoundException, SQLException {
		studentESLInfoDAO = new StudentESLInfoDAO();
	}
	@Override
	public StudentESLInfo getStudentInfoRegistrationbyID(Integer acaYear, Integer semester, Integer studentID) throws ClassNotFoundException, SQLException {
		return studentESLInfoDAO.getStudentInfoRegistrationbyID(acaYear, semester, studentID);
	}
	@Override
	public String getAvaImage(int id) throws ClassNotFoundException, SQLException {
		return studentESLInfoDAO.getAvaImage(id);
	}

}
