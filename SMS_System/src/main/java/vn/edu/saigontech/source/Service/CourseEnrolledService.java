package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.CourseEnrolled;

public interface CourseEnrolledService {
	public List<CourseEnrolled> getCourseEnrolledList(Integer Semester, Integer academicYear, String studentId);
}
