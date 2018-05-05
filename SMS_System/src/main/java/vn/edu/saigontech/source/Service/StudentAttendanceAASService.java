package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceAAS;

public interface StudentAttendanceAASService {
	public List<StudentAttendanceAAS> getAllStudentAttendanceAAS(Integer Semester, Integer academicYear, String studentId);
}
