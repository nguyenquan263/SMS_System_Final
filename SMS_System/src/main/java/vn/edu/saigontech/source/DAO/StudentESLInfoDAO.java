package vn.edu.saigontech.source.DAO;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.StudentESLInfo;

public interface StudentESLInfoDAO {
	public StudentESLInfo getStudentInfoRegistrationbyID(Integer acaYear, Integer semester, Integer studentID)  throws ClassNotFoundException, SQLException;
	public String getAvaImage(int id) throws ClassNotFoundException, SQLException;
	public Boolean studentIsIT(int id)  throws ClassNotFoundException, SQLException;
	public Integer studentSemesterbegin(int id)  throws ClassNotFoundException, SQLException;
	

}
