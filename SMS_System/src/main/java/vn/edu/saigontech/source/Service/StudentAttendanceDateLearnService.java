package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceDateLearn;

public interface StudentAttendanceDateLearnService {
	public List<StudentAttendanceDateLearn> getAllStudentAttendanceDateLearn(Integer Semester, Integer academicYear, String studentId);
}
