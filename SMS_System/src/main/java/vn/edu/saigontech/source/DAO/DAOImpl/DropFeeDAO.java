package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;


import vn.edu.saigontech.source.Model.DropFee;
import vn.edu.saigontech.source.dbConnection.oConnection;
//Written by Dang Quoc Thanh Phong
public class DropFeeDAO implements vn.edu.saigontech.source.DAO.DropFeeDAO {
private Connection conn;
	
	public DropFeeDAO() throws ClassNotFoundException, SQLException {
		conn=oConnection.getOracleConnection();
	}
//Method to get drop fee
	@Override
	public List<DropFee> getTuitionFee(Integer Semester, Integer academicYear, String studentId) {
		List<DropFee> array = new ArrayList<>();
		PreparedStatement statement;
		try {
			
			String sql =
					" select v.classname, sb.id || ' ' || sb.num_code course_code, "+
							"sb.name course_name, sb.credits, "+
							"v.usd_classfee, v.vnd_classfee, v.percent_refund, "+
							"v.usd_drop_classfee, v.vnd_drop_classfee, "+ 
							"nvl(v.percent_submit,1) percent_submit "+    
						" from v_drop_classfee_detail v, subject sb "+
						" where semester =? and aca_year =? "+
						" and v.subjectcode = sb.id_seq "+
						" and id_student =? "+
						" order by course_code";
			statement = conn.prepareStatement(sql);
			statement.setInt(1, Semester);
			statement.setInt(2, academicYear);	
			statement.setString(3, studentId);
			
			ResultSet rs = statement.executeQuery();
			DropFee currentFee;
			while (rs.next()) {
				currentFee = new DropFee();
				currentFee.setCourseCode(rs.getString(1));
				currentFee.setCourseName(rs.getString(2));
				currentFee.setClassName(rs.getString(3));
				currentFee.setCredit(rs.getDouble(4));
				currentFee.setUsdClassFee(rs.getDouble(5));
				currentFee.setVndClassFee(rs.getDouble(6));
				currentFee.setPercentReturn(rs.getDouble(7));
				currentFee.setUsdDropFee(rs.getDouble(8));
				currentFee.setVndDropFee(rs.getDouble(9));
				currentFee.setPercentSubmit(rs.getDouble(10));
				array.add(currentFee);
			}
			conn.close();
			statement.close();
			rs.close();
			return array;
		}
		catch (SQLException e) {
			return null;
		}
	}

}
