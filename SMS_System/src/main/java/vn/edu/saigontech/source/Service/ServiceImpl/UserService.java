package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.UserDAO;



public class UserService implements vn.edu.saigontech.source.Service.UserService {
	private UserDAO userDAO;
	public UserService() throws ClassNotFoundException, SQLException {
		userDAO = new UserDAO();

	}
	@Override
	public Integer getUserIDbyUsernameandPassword(String username, String password) {
		return userDAO.getUserIDbyUsernameandPassword(username, password);
	}
	@Override
	public Integer getUserIDbyCodeandPassword(String code, String password) {
		// TODO Auto-generated method stub
		return userDAO.getUserIDbyCodeandPassword(code, password);
	}

}
