package vn.edu.saigontech.source.Model;
//Written by Nguyen Ngoc Minh Quan
//the class that store info about class that is availabled for student.
public class VNCourseAvailable {
	private Integer classCode;
	private Integer subjectCode;
	private String classID;
	private String courseCode;
	private String courseName;
	private String total;
	public VNCourseAvailable(Integer classCode, Integer subjectCode, String classID, String courseCode,
			String courseName, String total) {
		super();
		this.classCode = classCode;
		this.subjectCode = subjectCode;
		this.classID = classID;
		this.courseCode = courseCode;
		this.courseName = courseName;
		this.total = total;
	}
	public VNCourseAvailable() {
		super();
	}
	public Integer getClassCode() {
		return classCode;
	}
	public void setClassCode(Integer classCode) {
		this.classCode = classCode;
	}
	public Integer getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(Integer subjectCode) {
		this.subjectCode = subjectCode;
	}
	public String getClassID() {
		return classID;
	}
	public void setClassID(String classID) {
		this.classID = classID;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	@Override
	public String toString() {
		return "vnCourseAvailable [classCode=" + classCode + ", subjectCode=" + subjectCode + ", classID=" + classID
				+ ", courseCode=" + courseCode + ", courseName=" + courseName + ", Total=" + total + "]";
	}
	
	

}
