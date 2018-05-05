package vn.edu.saigontech.source.Model;
//Written by Nguyen Ngoc Minh Quan
//This class store info of classes that are available in class-information component.
public class ClassInformation {
	private String numPermax;//number student registered per max students.
	private String classCode;//Class code of this class.
	private String courseCode;//Course code of this class.
	private String className;//Name of this class.
	public ClassInformation() {
		super();
	}
	public ClassInformation(String numPermax, String classCode, String courseCode, String className) {
		super();
		this.numPermax = numPermax;
		this.classCode = classCode;
		this.courseCode = courseCode;
		this.className = className;
	}
	public String getNumPermax() {
		return numPermax;
	}
	public void setNumPermax(String numPermax) {
		this.numPermax = numPermax;
	}
	public String getClassCode() {
		return classCode;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
}
