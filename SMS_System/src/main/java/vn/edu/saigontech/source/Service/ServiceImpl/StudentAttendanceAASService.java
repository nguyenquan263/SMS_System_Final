package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentAttendanceAASDAO;
import vn.edu.saigontech.source.Model.StudentAttendanceAAS;
//Written by Dang Quoc Thanh Phong
public class StudentAttendanceAASService implements vn.edu.saigontech.source.Service.StudentAttendanceAASService {
	private StudentAttendanceAASDAO studentAttendanceAASDAO;
	
	public StudentAttendanceAASService() throws ClassNotFoundException, SQLException {
		studentAttendanceAASDAO = new StudentAttendanceAASDAO();
	}
	//Call to DAO to get data
	@Override
	public List<StudentAttendanceAAS> getAllStudentAttendanceAAS(Integer Semester, Integer academicYear,
			String studentId) {
		return studentAttendanceAASDAO.getAllStudentAttendanceAAS(Semester, academicYear, studentId);
	}

}
