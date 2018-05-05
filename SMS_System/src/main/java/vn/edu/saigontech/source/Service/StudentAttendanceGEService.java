package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceGE;

public interface StudentAttendanceGEService {
	public List<StudentAttendanceGE> getAllStudentAttendanceGE(Integer Semester, Integer academicYear, String studentId);
}
