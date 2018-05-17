package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.OtherSEOIOtherCoursesInfo;

public interface OtherSEOIDAO {
	public List<OtherSEOIOtherCoursesInfo> getOtherCourseInfo(String semester, String acaYear, String stuId);
	public boolean isStatus(String stuId, String classId, String teacherId);
	public boolean isCheckTime(String classId);
}