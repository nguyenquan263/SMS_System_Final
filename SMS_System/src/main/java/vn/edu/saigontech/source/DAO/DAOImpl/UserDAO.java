package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import vn.edu.saigontech.source.dbConnection.oConnection;

public class UserDAO implements vn.edu.saigontech.source.DAO.UserDAO {
	
	private Connection conn;

	public UserDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	@Override
	public Integer getUserIDbyUsernameandPassword(String username, String password) {
		try{
			Statement statement = conn.createStatement();
			String sql = "select code from USERS "
						+"where username like '"+username+"' "
						+"and password like '"+password+"' "
						+"and domain like 'STUDENT'";
			System.out.println(sql);
			ResultSet rs = statement.executeQuery(sql);
	
			rs.next();
			return rs.getInt(1);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return -1;
		}
	}
	@Override
	public Integer getUserIDbyCodeandPassword(String code, String password) {
		try{
			Statement statement = conn.createStatement();
			String sql = "select code from USERS "
						+"where code ='"+code+"' "
						+"and password like '"+password+"' "
						+"and domain like 'STUDENT'";
			System.out.println(sql);
			ResultSet rs = statement.executeQuery(sql);
	
			rs.next();
			return rs.getInt(1);
		} catch (Exception e) {
			System.out.println(e);
			return -1;
		}
	}

}
