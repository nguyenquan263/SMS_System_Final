package vn.edu.saigontech.source.DAO;

public interface UserDAO {
	public Integer getUserIDbyUsernameandPassword(String username, String password);
	public Integer getUserIDbyCodeandPassword(String code, String password);
}
