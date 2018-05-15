package vn.edu.saigontech.source.Service;

public interface UserService {
	public Integer getUserIDbyUsernameandPassword(String username, String password);
	public Integer getUserIDbyCodeandPassword(String code, String password);
}
