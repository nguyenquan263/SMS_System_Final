package vn.edu.saigontech.source.Service;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.StudentESLInfo;

public interface StudentESLInfoService {
	public StudentESLInfo getStudentInfoRegistrationbyID(Integer acaYear, Integer semester, Integer studentID) throws ClassNotFoundException, SQLException;
	public String getAvaImage(int id) throws ClassNotFoundException, SQLException;
}
