package vn.edu.saigontech.source.Model;
/** This Object is used to contain Enrichment Class Registered information which is offered for student in current semester and current year
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
public class EnrichmentRegistered {
	private Integer classCode;
	private String classID;
	private String subjectID;
	private String subjectName;
	private Integer numberStudentRegistered;
	private Integer numberStudentClass;
	private String courseIDPrerequisite;
	private String isDiable;
	private String classStatus;
	
	public EnrichmentRegistered() {}
	public EnrichmentRegistered(Integer classCode, String classID, String subjectID, String subjectName,
			Integer numberStudentRegistered, Integer numberStudentClass, String courseIDPrerequisite, String isDiable,
			String classStatus) {
		this.classCode = classCode;
		this.classID = classID;
		this.subjectID = subjectID;
		this.subjectName = subjectName;
		this.numberStudentRegistered = numberStudentRegistered;
		this.numberStudentClass = numberStudentClass;
		this.courseIDPrerequisite = courseIDPrerequisite;
		this.isDiable = isDiable;
		this.classStatus = classStatus;
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
	public Integer getNumberStudentRegistered() {
		return numberStudentRegistered;
	}
	public void setNumberStudentRegistered(Integer numberStudentRegistered) {
		this.numberStudentRegistered = numberStudentRegistered;
	}
	public Integer getNumberStudentClass() {
		return numberStudentClass;
	}
	public void setNumberStudentClass(Integer numberStudentClass) {
		this.numberStudentClass = numberStudentClass;
	}
	public String getCourseIDPrerequisite() {
		return courseIDPrerequisite;
	}
	public void setCourseIDPrerequisite(String courseIDPrerequisite) {
		this.courseIDPrerequisite = courseIDPrerequisite;
	}
	public String getIsDiable() {
		return isDiable;
	}
	public void setIsDiable(String isDiable) {
		this.isDiable = isDiable;
	}
	public String getClassStatus() {
		return classStatus;
	}
	public void setClassStatus(String classStatus) {
		this.classStatus = classStatus;
	}
	
	
}
