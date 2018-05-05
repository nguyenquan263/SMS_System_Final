package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.CourseEnrolled;


public interface CourseEnrolledDAO {
	public List<CourseEnrolled> getCourseEnrolledList(Integer Semester, Integer academicYear, String studentId);
}
