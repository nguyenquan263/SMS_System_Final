package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;

import java.sql.SQLException;

import vn.edu.saigontech.source.dbConnection.oConnection;

public class ChangePasswordDAO implements vn.edu.saigontech.source.DAO.ChangePasswordDAO {
	private Connection conn;

	public  ChangePasswordDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}

	@Override
	public void changeUserPassword(String userName, String newPassword) {
		PreparedStatement statement;
		try{
			String sql = "update users " + 
					" set password = ? " + 
					" where code = ?"; 
			statement = conn.prepareStatement(sql);
			System.out.println(userName+"    "+newPassword);
			statement.setString(1,newPassword);
			statement.setString(2,userName);
			statement.executeUpdate();
		} catch (Exception e) {
			e.getStackTrace();
			System.out.println(e);
		}

	}

}
