package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ESLCourseDAO;
import vn.edu.saigontech.source.Model.ESLCourseAvailable;
import vn.edu.saigontech.source.Model.ESLCourseRegistered;

public class ESLCourseService implements vn.edu.saigontech.source.Service.ESLCourseService {
	private ESLCourseDAO ecd;

	public ESLCourseService() throws ClassNotFoundException, SQLException {
		ecd = new ESLCourseDAO();
	}

	@Override
	public List<ESLCourseAvailable> getAlleslClassavailable(Integer studentID, Integer acaYear, Integer Semester)
			throws SQLException, ClassNotFoundException {

		return ecd.getAlleslClassavailable(studentID, acaYear, Semester);
	}

	@Override
	public List<ESLCourseRegistered> getAlleslClassregistered(Integer studentID, Integer acaYear, Integer Semester)
			throws SQLException, ClassNotFoundException {
		return ecd.getAlleslClassregistered(studentID, acaYear, Semester);
	}

	@Override
	public String deleteSelectedCourse(Integer[] deleteClassCode, Integer studentID, Integer academicYear,
			Integer semester, String ipAddress) throws ClassNotFoundException, SQLException {

		String result = ecd.deleteSelectedCourse(deleteClassCode, studentID, academicYear, semester, ipAddress);
		if (result == "" || result == null) {
			return "Delete Course(s) Successfully!";
		} else
			return result;
	}

	@Override
	public String insertSelectedCourse(Integer[] insertClassCode, Integer studentID, Integer academicYear,
			Integer semester, String ipAddress) throws ClassNotFoundException, SQLException {
		System.out.println(insertClassCode.length);
		String result = ecd.insertSelectedCourse(insertClassCode, studentID, academicYear, semester, ipAddress);
		if (result == "Success!" || result == null) {
			return "Insert Course(s) Successfully!";
		} else
			return result;
	}

}
