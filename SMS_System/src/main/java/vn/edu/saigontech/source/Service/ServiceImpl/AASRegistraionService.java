package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.AASRegistrationDAO;
import vn.edu.saigontech.source.Model.AASRegistrationResult;
import vn.edu.saigontech.source.Model.BeforeAASRegistration;

public class AASRegistraionService implements vn.edu.saigontech.source.Service.AASRegistraionService {
	
	private AASRegistrationDAO aasRegistrationDAO;
	
	public AASRegistraionService() throws ClassNotFoundException, SQLException {
		aasRegistrationDAO= new AASRegistrationDAO();
	}

	@Override
	public AASRegistrationResult insertCourseRegistration(Integer studentID, Integer domain, String ipAddress, Integer acaYear,
			Integer semester, String classCode,Integer catalog,Integer isToefl) throws SQLException {
		// TODO Auto-generated method stub
		return aasRegistrationDAO.insertCourseRegistration(studentID, domain, ipAddress, acaYear, semester, classCode,catalog,isToefl);
	}

	@Override
	public Integer deleteCourseRegistration(Integer studentID, Integer domain, String ipAddress, Integer acaYear,
			Integer semester, String classCode) throws SQLException {
		// TODO Auto-generated method stub
		return aasRegistrationDAO.deleteCourseRegistration(studentID, domain, ipAddress, acaYear, semester, classCode);
	}

	@Override
	public BeforeAASRegistration beforeAasRegistration(Integer studentID, Integer acaYear, Integer semester) {
		// TODO Auto-generated method stub
		return aasRegistrationDAO.beforeAasRegistration(studentID, acaYear, semester);
	}
	

	

}
