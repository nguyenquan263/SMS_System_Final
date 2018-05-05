package vn.edu.saigontech.source.Model;
/** This Object is used to contain information of AAS Student
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
public class StudentAASInfo {
	private String studentID;
	private String studentName;
	private String specialization;
	private String catalogYear;
	private Integer catalogCode;
	private Integer isToefl;
	private Integer isLevel3;
	private Integer active;
	private Integer isPass6AasCourse;
	
	public StudentAASInfo() {}

	public StudentAASInfo(String studentID, String studentName, String specialization, String catalogYear,
			Integer catalogCode, Integer isToefl, Integer isLevel3, Integer active, Integer isPass6AasCourse) {
		this.studentID = studentID;
		this.studentName = studentName;
		this.specialization = specialization;
		this.catalogYear = catalogYear;
		this.catalogCode = catalogCode;
		this.isToefl = isToefl;
		this.isLevel3 = isLevel3;
		this.active = active;
		this.isPass6AasCourse = isPass6AasCourse;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getCatalogYear() {
		return catalogYear;
	}

	public void setCatalogYear(String catalogYear) {
		this.catalogYear = catalogYear;
	}

	public Integer getCatalogCode() {
		return catalogCode;
	}

	public void setCatalogCode(Integer catalogCode) {
		this.catalogCode = catalogCode;
	}

	public Integer getIsToefl() {
		return isToefl;
	}

	public void setIsToefl(Integer isToefl) {
		this.isToefl = isToefl;
	}

	public Integer getIsLevel3() {
		return isLevel3;
	}

	public void setIsLevel3(Integer isLevel3) {
		this.isLevel3 = isLevel3;
	}

	public Integer getIsPass6AasCourse() {
		return isPass6AasCourse;
	}

	public void setIsPass6AasCourse(Integer isPass6AasCourse) {
		this.isPass6AasCourse = isPass6AasCourse;
	}

	public String getStudentID() {
		return studentID;
	}

	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}

	public Integer getActive() {
		return active;
	}

	public void setActive(Integer active) {
		this.active = active;
	}
	
	
	
	
	
	
}
