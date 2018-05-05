package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceGE;

public interface StudentAttendanceGEDAO {
	public List<StudentAttendanceGE> getAllStudentAttendanceGE(Integer Semester, Integer academicYear, String studentId);
}
