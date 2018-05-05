package vn.edu.saigontech.source.Model;
//Written by Nguyen Ngoc Minh Quan.
// the class that store information about classes that student registered.
public class VNCourseRegistered {
	private Integer studyCode;
	private Integer classCode;
	private Integer subjectCode;
	private String classID;
	private String subjectID;
	private String subjectName;
	private String total;
	private String isDisable;
	private Integer classStatus;
	public VNCourseRegistered(Integer studyCode, Integer classCode, Integer subjectCode, String classID,
			String subjectID, String subjectName, String total, String isDisable, Integer classStatus) {
		super();
		this.studyCode = studyCode;
		this.classCode = classCode;
		this.subjectCode = subjectCode;
		this.classID = classID;
		this.subjectID = subjectID;
		this.subjectName = subjectName;
		this.total = total;
		this.isDisable = isDisable;
		this.classStatus = classStatus;
	}
	public VNCourseRegistered() {
		super();
	}
	public Integer getStudyCode() {
		return studyCode;
	}
	public void setStudyCode(Integer studyCode) {
		this.studyCode = studyCode;
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
	public String getTotal() {
		return total;
	}
	public void setTotal(String total) {
		this.total = total;
	}
	public String getIsDisable() {
		return isDisable;
	}
	public void setIsDisable(String isDisable) {
		this.isDisable = isDisable;
	}
	public Integer getClassStatus() {
		return classStatus;
	}
	public void setClassStatus(Integer classStatus) {
		this.classStatus = classStatus;
	}
	@Override
	public String toString() {
		return "vnCourseRegistered [studyCode=" + studyCode + ", classCode=" + classCode + ", subjectCode="
				+ subjectCode + ", classID=" + classID + ", subjectID=" + subjectID + ", subjectName=" + subjectName
				+ ", Total=" + total + ", isDisable=" + isDisable + ", classStatus=" + classStatus + "]";
	}
	
	
}
