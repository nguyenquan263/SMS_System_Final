package vn.edu.saigontech.source.DAO.DAOImpl;

/** This class is used to get Policy 2 violation data
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class Policy2DAO implements vn.edu.saigontech.source.DAO.Policy2DAO {

	private Connection conn;

	public Policy2DAO() throws ClassNotFoundException, SQLException {
		
	}
	
	/** Get Policy2 data
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@Override
	public List<Policy2Model> getPolicy2Data(String semester, String acaYear, String stuId) {
		List<Policy2Model> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select id_seq,  numofviolate, minusgrade,note, coursetype"+
					" from student_policy2"+
					" where studentcode = ?"+
					" and aca_year = ?"+
					" and semester = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new Policy2Model( rs.getString("id_seq"), null, null,rs.getString("numofviolate"),
						rs.getString("minusgrade"), rs.getString("note"), rs.getString("coursetype")));
			}
			rs.close();
			statement.close();
			conn.close();
			return arr;
		} catch (SQLException e) {
			e.printStackTrace();
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
