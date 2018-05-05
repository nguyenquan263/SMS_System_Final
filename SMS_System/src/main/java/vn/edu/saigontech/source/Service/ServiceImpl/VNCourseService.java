package vn.edu.saigontech.source.Service.ServiceImpl;
//Written by Nguyen Ngoc Minh Quan
//This service class call DAO class and get data class that we need and show on controller.
//This class also help us make a request to backend for inserting or deleting classes.
import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.VNCourseDAO;
import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.VNCourseRegistered;

public class VNCourseService implements vn.edu.saigontech.source.Service.VNCourseService {

	private VNCourseDAO vcd;

	public VNCourseService() throws ClassNotFoundException, SQLException {
		super();
		this.vcd = new VNCourseDAO();
	}

	@Override
	public List<VNCourseAvailable> getAllVNClassAvailable(Integer studentID, Integer acaYear, Integer Semester)
			throws SQLException, ClassNotFoundException {
		return vcd.getAllVNClassAvailable(studentID, acaYear, Semester);
	}

	@Override
	public List<VNCourseRegistered> getAllVNClassRegistered(Integer studentID, Integer acaYear, Integer Semester)
			throws SQLException, ClassNotFoundException {
		return vcd.getAllVNClassRegistered(studentID, acaYear, Semester);
	}

	@Override
	public String deleteVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress,
			String classCodes, String studyCodes) throws ClassNotFoundException, SQLException {

		return vcd.deleteVNCourses(studentCode, acaYear, Semester, ipAddress, classCodes, studyCodes);
	}

	@Override
	public String insertVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress,
			String classCodesChecked) throws ClassNotFoundException, SQLException {
		return vcd.insertVNCourses(studentCode, acaYear, Semester, ipAddress, classCodesChecked);
	}

}
