package vn.edu.saigontech.source.Model;

public class infoReturnLogin {
	private String token;
	private Integer studentID;
	public infoReturnLogin(String token, Integer studentID) {
		super();
		this.token = token;
		this.studentID = studentID;
	}
	
	public infoReturnLogin() {
		super();
	}

	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Integer getStudentID() {
		return studentID;
	}
	public void setStudentID(Integer studentID) {
		this.studentID = studentID;
	}

	@Override
	public String toString() {
		return "infoReturnLogin [token=" + token + ", studentID=" + studentID + "]";
	}
	
	

}
