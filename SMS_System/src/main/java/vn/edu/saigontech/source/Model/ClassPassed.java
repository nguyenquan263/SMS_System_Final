package vn.edu.saigontech.source.Model;
/** This Object is used to contain Class information which student passed in the past
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
public class ClassPassed {
	private Integer classCode;
	private Integer subjectCode;
	private String classID;
	private String courseCode;
	private String courseName;
	private String courseIDPrerequisite;
	private Integer numberStudentClass;
	private Integer numberStudentRegistered;
	
	public ClassPassed() {}
	
	public ClassPassed(Integer classCode, Integer subjectCode, String classID, String courseCode, String courseName,
			String courseIDPrerequisite, Integer numberStudentClass, Integer numberStudentRegistered) {
		this.classCode = classCode;
		this.subjectCode = subjectCode;
		this.classID = classID;
		this.courseCode = courseCode;
		this.courseName = courseName;
		this.courseIDPrerequisite = courseIDPrerequisite;
		this.numberStudentClass = numberStudentClass;
		this.numberStudentRegistered = numberStudentRegistered;
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

	public String getCourseIDPrerequisite() {
		return courseIDPrerequisite;
	}

	public void setCourseIDPrerequisite(String courseIDPrerequisite) {
		this.courseIDPrerequisite = courseIDPrerequisite;
	}

	public Integer getNumberStudentClass() {
		return numberStudentClass;
	}

	public void setNumberStudentClass(Integer numberStudentClass) {
		this.numberStudentClass = numberStudentClass;
	}

	public Integer getNumberStudentRegistered() {
		return numberStudentRegistered;
	}

	public void setNumberStudentRegistered(Integer numberStudentRegistered) {
		this.numberStudentRegistered = numberStudentRegistered;
	}
	
	
	
}
