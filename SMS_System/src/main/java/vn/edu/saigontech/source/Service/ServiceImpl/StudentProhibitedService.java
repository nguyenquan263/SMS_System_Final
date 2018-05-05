package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ClassInformationDAO;
import vn.edu.saigontech.source.DAO.DAOImpl.StudentProhibitedDAO;
import vn.edu.saigontech.source.Model.StudentProhibited;

public class StudentProhibitedService implements vn.edu.saigontech.source.Service.StudentProhibitedService
{
	private StudentProhibitedDAO studentProhibitedDAO;
	
	public StudentProhibitedService() throws ClassNotFoundException, SQLException {
		studentProhibitedDAO = new StudentProhibitedDAO();
	}
	
	@Override
	public List<StudentProhibited> getAllstudentProhibitedInformationbyCondition(Integer semester, Integer acaYear,
			Integer stuId) {
		return studentProhibitedDAO.getAllstudentProhibitedInformationbyCondition(semester, acaYear, stuId);
	}

}
