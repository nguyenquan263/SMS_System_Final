package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentAttendanceGEDAO;
import vn.edu.saigontech.source.Model.StudentAttendanceGE;
//Written by Dang Quoc Thanh Phong
public class StudentAttendanceGEService implements vn.edu.saigontech.source.Service.StudentAttendanceGEService {
	private StudentAttendanceGEDAO studentAttendanceGEDAO;
	
	public StudentAttendanceGEService() throws ClassNotFoundException, SQLException {
		studentAttendanceGEDAO = new StudentAttendanceGEDAO();
	}
	//Call to DAO to get data
	@Override
	public List<StudentAttendanceGE> getAllStudentAttendanceGE(Integer Semester, Integer academicYear,String studentId) {
		return studentAttendanceGEDAO.getAllStudentAttendanceGE(Semester, academicYear, studentId);
	}

}
