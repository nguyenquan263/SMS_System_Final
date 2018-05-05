package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceDateLearn;

public interface StudentAttendanceDateLearnDAO {
	public List<StudentAttendanceDateLearn> getAllStudentAttendanceDateLearn(Integer Semester, Integer academicYear, String studentId);
}
