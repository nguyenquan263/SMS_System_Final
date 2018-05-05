package vn.edu.saigontech.source.DAO;
//Written by Nguyen Ngoc Minh Quan
//This interface will be implemented by DAO Class that get information of ESL classes from DB.
import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLCourseAvailable;
import vn.edu.saigontech.source.Model.ESLCourseRegistered;



public interface ESLCourseDAO {
	public List<ESLCourseAvailable> getAlleslClassavailable(Integer studentID, Integer acaYear, Integer Semester) throws SQLException, ClassNotFoundException;
	public List<ESLCourseRegistered> getAlleslClassregistered(Integer studentID, Integer acaYear, Integer Semester) throws SQLException, ClassNotFoundException;
	public String deleteSelectedCourse(Integer[] deleteClassCode, Integer studentID, Integer academicYear, Integer semester,String ipAddress) throws ClassNotFoundException, SQLException;
	public String insertSelectedCourse(Integer[] insertClassCode, Integer studentID, Integer academicYear, Integer semester, String ipAddress) throws ClassNotFoundException, SQLException;
}
