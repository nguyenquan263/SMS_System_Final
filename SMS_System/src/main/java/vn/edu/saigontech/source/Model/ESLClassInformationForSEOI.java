package vn.edu.saigontech.source.Model;

public class ESLClassInformationForSEOI {
	private String instructorName;
	private String className;
	private String status;
	private Integer classID;
	private Integer teacherID;
	public ESLClassInformationForSEOI(String instructorName, String className, String status, Integer classID,
			Integer teacherID) {
		super();
		this.instructorName = instructorName;
		this.className = className;
		this.status = status;
		this.classID = classID;
		this.teacherID = teacherID;
	}
	public ESLClassInformationForSEOI() {
		super();
	}
	public String getInstructorName() {
		return instructorName;
	}
	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Integer getClassID() {
		return classID;
	}
	public void setClassID(Integer classID) {
		this.classID = classID;
	}
	public Integer getTeacherID() {
		return teacherID;
	}
	public void setTeacherID(Integer teacherID) {
		this.teacherID = teacherID;
	}
	@Override
	public String toString() {
		return "ESLClassInformationForSEOI [instructorName=" + instructorName + ", className=" + className + ", status="
				+ status + ", classID=" + classID + ", teacherID=" + teacherID + "]";
	}
	
}
