package vn.edu.saigontech.source.Model;

public class AASRegistrationResult {
	private Integer token;
	private String error;
	
	public AASRegistrationResult() {}
	
	public AASRegistrationResult(Integer token, String error) {
		this.token = token;
		this.error = error;
	}

	public Integer getToken() {
		return token;
	}

	public void setToken(Integer token) {
		this.token = token;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	@Override
	public String toString() {
		return "AASRegistrationResult [token=" + token + ", error=" + error + "]";
	}
	
	
}
