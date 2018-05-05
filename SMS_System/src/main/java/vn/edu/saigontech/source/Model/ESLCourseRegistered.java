package vn.edu.saigontech.source.Model;
//Written by Nguyen Ngoc Minh Quan
//this interface use for storing information of all ESL class that registered by Student.
public class ESLCourseRegistered {
	private Integer subjectCode;// subject code of the course.
	private Integer classCode;// class code of the course.
	private String classID;// class id of the the course.
	private String subjectID; // subject id of the course.
	private String subjectName;// subject name of the course.
	private Integer numberStudentRegistered;// number of student registered.
	private Integer numberStudentClass;// number of max student can register.
	private Integer geCourse;// ge course.
	private Integer classStatus;// status of the class.
	public ESLCourseRegistered(Integer subjectCode, Integer classCode, String classID, String subjectID,
			String subjectName, Integer numberStudentregistered, Integer numberStudentclass, Integer geCourse,
			Integer classStatus) {
		super();
		this.subjectCode = subjectCode;
		this.classCode = classCode;
		this.classID = classID;
		this.subjectID = subjectID;
		this.subjectName = subjectName;
		this.numberStudentRegistered = numberStudentregistered;
		this.numberStudentClass = numberStudentclass;
		this.geCourse = geCourse;
		this.classStatus = classStatus;
	}
	public ESLCourseRegistered() {
		super();
	}
	public Integer getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(Integer subjectCode) {
		this.subjectCode = subjectCode;
	}
	public Integer getClassCode() {
		return classCode;
	}
	public void setClassCode(Integer classCode) {
		this.classCode = classCode;
	}
	public String getClassID() {
		return classID;
	}
	public void setClassID(String classID) {
		this.classID = classID;
	}
	public String getSubjectID() {
		return subjectID;
	}
	public void setSubjectID(String subjectID) {
		this.subjectID = subjectID;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public Integer getNumberStudentregistered() {
		return numberStudentRegistered;
	}
	public void setNumberStudentregistered(Integer numberStudentregistered) {
		this.numberStudentRegistered = numberStudentregistered;
	}
	public Integer getNumberStudentclass() {
		return numberStudentClass;
	}
	public void setNumberStudentclass(Integer numberStudentclass) {
		this.numberStudentClass = numberStudentclass;
	}
	public Integer getGeCourse() {
		return geCourse;
	}
	public void setGeCourse(Integer geCourse) {
		this.geCourse = geCourse;
	}
	public Integer getClassStatus() {
		return classStatus;
	}
	public void setClassStatus(Integer classStatus) {
		this.classStatus = classStatus;
	}
	@Override
	public String toString() {
		return "eslCourseregistered [subjectCode=" + subjectCode + ", classCode=" + classCode + ", classID=" + classID
				+ ", subjectID=" + subjectID + ", subjectName=" + subjectName + ", numberStudentregistered="
				+ numberStudentRegistered + ", numberStudentclass=" + numberStudentClass + ", geCourse=" + geCourse
				+ ", classStatus=" + classStatus + "]";
	}
	
}