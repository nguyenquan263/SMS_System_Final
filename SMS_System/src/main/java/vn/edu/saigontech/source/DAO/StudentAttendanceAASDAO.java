package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceAAS;

public interface StudentAttendanceAASDAO {
	public List<StudentAttendanceAAS> getAllStudentAttendanceAAS(Integer Semester, Integer academicYear, String studentId);
}
