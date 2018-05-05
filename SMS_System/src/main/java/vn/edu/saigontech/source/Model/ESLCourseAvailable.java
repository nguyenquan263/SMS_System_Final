package vn.edu.saigontech.source.Model;
//written by Nguyen Ngoc Minh Quan
//this class use for storing information of all ESL class available for student which has studentCODE.
public class ESLCourseAvailable {
	private Integer classCode;// class code of the course
	private Integer subjectCode; // subject code of 
	private String classID;// class id of the course
	private String subjectID;// subject id of the course
	private String subjectName;// subject name of the course
	private Integer numberStudentRegistered;// number student registered
	private Integer numberStudentClass;// number student max.
	private Integer numberOfRow;// number of row
	public ESLCourseAvailable(Integer classCode, Integer subjectCode, String classID, String subjectID,
			String subjectName, Integer numberStudentregistered, Integer numberStudentclass, Integer numberOfrow) {
		super();
		this.classCode = classCode;
		this.subjectCode = subjectCode;
		this.classID = classID;
		this.subjectID = subjectID;
		this.subjectName = subjectName;
		this.numberStudentRegistered = numberStudentregistered;
		this.numberStudentClass = numberStudentclass;
		this.numberOfRow = numberOfrow;
	}
	public ESLCourseAvailable() {
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
	public Integer getNumberOfrow() {
		return numberOfRow;
	}
	public void setNumberOfrow(Integer numberOfrow) {
		this.numberOfRow = numberOfrow;
	}
	@Override
	public String toString() {
		return "eslCourseavailable [classCode=" + classCode + ", subjectCode=" + subjectCode + ", classID=" + classID
				+ ", subjectID=" + subjectID + ", subjectName=" + subjectName + ", numberStudentregistered="
				+ numberStudentRegistered + ", numberStudentclass=" + numberStudentClass + ", numberOfrow="
				+ numberOfRow + "]";
	}
	
	

}
