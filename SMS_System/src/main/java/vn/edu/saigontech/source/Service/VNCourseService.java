package vn.edu.saigontech.source.Service;


import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.VNCourseRegistered;

public interface VNCourseService {
	public List<VNCourseAvailable> getAllVNClassAvailable(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException;

	public List<VNCourseRegistered> getAllVNClassRegistered(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException;
	public String deleteVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress, String classCodes,
			String studyCodes) throws ClassNotFoundException, SQLException;

	public String insertVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress, String classCodesOffered) throws ClassNotFoundException, SQLException;
}
