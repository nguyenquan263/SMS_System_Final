package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.StudentAttendanceDateLearnDAO;
import vn.edu.saigontech.source.Model.StudentAttendanceDateLearn;
//Written by Dang Quoc Thanh Phong
public class StudentAttendanceDateLearnServive implements vn.edu.saigontech.source.Service.StudentAttendanceDateLearnService {
	private StudentAttendanceDateLearnDAO studentAttendanceDateLearnDAO;
	
	public StudentAttendanceDateLearnServive() throws ClassNotFoundException, SQLException {
		studentAttendanceDateLearnDAO = new StudentAttendanceDateLearnDAO();
	}
	//Call to DAO to get data
	@Override
	public List<StudentAttendanceDateLearn> getAllStudentAttendanceDateLearn(Integer Semester, Integer academicYear,
			String studentId) {

		return studentAttendanceDateLearnDAO.getAllStudentAttendanceDateLearn(Semester, academicYear, studentId);
	}

}
