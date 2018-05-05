package vn.edu.saigontech.source.Service;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.AASRegistrationResult;
import vn.edu.saigontech.source.Model.BeforeAASRegistration;

public interface AASRegistraionService {
	public AASRegistrationResult insertCourseRegistration(Integer studentID,Integer domain,String ipAddress,Integer acaYear,Integer semester,String classCode,Integer catalog,Integer isToefl) throws SQLException;
	public Integer deleteCourseRegistration(Integer studentID,Integer domain,String ipAddress,Integer acaYear,Integer semester,String classCode) throws SQLException;
	public BeforeAASRegistration beforeAasRegistration(Integer studentID, Integer acaYear,Integer semester);
}
