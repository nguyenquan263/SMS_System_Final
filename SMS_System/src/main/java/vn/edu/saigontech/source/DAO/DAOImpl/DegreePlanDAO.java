package vn.edu.saigontech.source.DAO.DAOImpl;
/** This class provides data of the link of the degree plan pdf file 
 *  @author Nguyen Bao Hoang Long
 *  Written on 22/3/2018
 */
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.DegreePlanAttachment;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class DegreePlanDAO implements vn.edu.saigontech.source.DAO.DegreePlanDAO{
	private Connection conn;

	public DegreePlanDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	
	/** Get the link of degree plan pdf file
	 * @param stuId Student Id
	 */
	@Override
	public List<DegreePlanAttachment> getDegreePlanAttachment(String stuId) {
		List<DegreePlanAttachment> arr = new ArrayList<>();
		Statement statement = null;
		ResultSet rs = null;
		try {
			statement = conn.createStatement();
			String sql = "select attachment"+ 
					 " from student st , degree_plan_upload dp"+ 
					 " where st.catalog_code = dp.catalog_code"+ 
					 " and st.programe = dp.major_code"+ 
					 " and st.id_seq = "+stuId;
			rs = statement.executeQuery(sql);
			while (rs.next()) {				
				arr.add(new DegreePlanAttachment( rs.getString(1)));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
}
