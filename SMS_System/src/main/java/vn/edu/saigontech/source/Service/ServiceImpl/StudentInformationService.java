package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentInformationDAO;
import vn.edu.saigontech.source.Model.StudentInformation;

public class StudentInformationService implements vn.edu.saigontech.source.Service.StudentInformationService {

	private StudentInformationDAO studentInformationDAO;

	public StudentInformationService() throws ClassNotFoundException, SQLException {
		studentInformationDAO = new StudentInformationDAO();

	}

	@Override
	public StudentInformation getStudentinfoByID(Integer ID) {

		return studentInformationDAO.getStudentinfoByID(ID);

	}

}