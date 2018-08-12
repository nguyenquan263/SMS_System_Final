package vn.edu.saigontech.source.Model;

public class AASDegreeRequest {
	private Integer ID;
	private Integer studentID;
	private Integer Status;
	private String officerComment;
	public AASDegreeRequest() {
		super();
	}
	public AASDegreeRequest(Integer iD, Integer studentID, Integer status, String officerComment) {
		super();
		ID = iD;
		this.studentID = studentID;
		Status = status;
		this.officerComment = officerComment;
	}
	public Integer getID() {
		return ID;
	}
	public void setID(Integer iD) {
		ID = iD;
	}
	public Integer getStudentID() {
		return studentID;
	}
	public void setStudentID(Integer studentID) {
		this.studentID = studentID;
	}
	public Integer getStatus() {
		return Status;
	}
	public void setStatus(Integer status) {
		Status = status;
	}
	public String getOfficerComment() {
		return officerComment;
	}
	public void setOfficerComment(String officerComment) {
		this.officerComment = officerComment;
	}
	@Override
	public String toString() {
		return "AASDegreeRequest [ID=" + ID + ", studentID=" + studentID + ", Status=" + Status + ", officerComment="
				+ officerComment + "]";
	}
	
	

}
