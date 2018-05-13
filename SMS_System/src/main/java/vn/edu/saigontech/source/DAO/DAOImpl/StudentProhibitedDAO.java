package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.StudentProhibited;
import vn.edu.saigontech.source.dbConnection.oConnection;

/** This class is used to get student prohibition data (prohibited due to exceeding absent percentage)
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class StudentProhibitedDAO implements vn.edu.saigontech.source.DAO.StudentProhibitedDAO
{
	private Connection conn;

	public StudentProhibitedDAO() throws ClassNotFoundException, SQLException {
		
	}
	
	/** Get student prohibited data
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@Override
	public List<StudentProhibited> getAllstudentProhibitedInformationbyCondition(Integer semester, Integer acaYear,
			Integer stuId) {
		List<StudentProhibited> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = " select classcode id_seq,classid, classid name, hours_absent tong, percent_prohibited percent " +
					" from v_prohibited_examination " + 
					" where semester =?"+
					  " and aca_year = ?" +
					  " and id_student = ?"+ 
					  " and percent_prohibited >=10.0 "+
					" order by classid ";
			statement = conn.prepareStatement(sql);
			statement.setInt(1, semester);
			statement.setInt(2, acaYear);
			statement.setInt(3, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new StudentProhibited(rs.getString("id_seq"),rs.getString("classid"),rs.getString("name"), rs.getString("tong"), rs.getString("percent")));
			}
			rs.close();
			statement.close();
			conn.close();
			return arr;
		} catch (SQLException e) {
			return null;
		}
		finally
		{
			try {
				if (rs != null)
					rs.close();
				if (statement != null)
					statement.close();
				if (conn != null)
					conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

}
