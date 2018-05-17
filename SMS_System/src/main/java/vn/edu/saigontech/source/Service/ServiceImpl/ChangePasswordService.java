package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.ChangePasswordDAO;

public class ChangePasswordService implements vn.edu.saigontech.source.Service.ChangPasswordSevice {
	private ChangePasswordDAO changePasswordDAO;
	public ChangePasswordService() throws ClassNotFoundException, SQLException {
		changePasswordDAO = new ChangePasswordDAO();
	}
	@Override
	public void changeUserPassword(String userName, String newPassword) {
		changePasswordDAO.changeUserPassword(userName, newPassword);
		
	}

}
