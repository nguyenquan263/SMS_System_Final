package vn.edu.saigontech.source.DAO;
import java.sql.SQLException;
//the interface that allow user do some actions on VN classes.
import java.util.List;

import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.VNCourseRegistered;
//Written by Nguyen Ngoc Minh Quan
//this interface will be implemented by a DAO class that can get information of VN class from DB, and do some actions on those class like inserting and deleting.
public interface VNCourseDAO {
	public List<VNCourseAvailable> getAllVNClassAvailable(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException;

	public List<VNCourseRegistered> getAllVNClassRegistered(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException;
	public String deleteVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress, String classCodes,
			String studyCodes) throws ClassNotFoundException, SQLException;

	public String insertVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress, String classCodesOffered) throws ClassNotFoundException, SQLException;
}
