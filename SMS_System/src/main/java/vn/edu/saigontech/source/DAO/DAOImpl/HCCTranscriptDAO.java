package vn.edu.saigontech.source.DAO.DAOImpl;

/** This class is used to get HCC transcript data
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

import vn.edu.saigontech.source.Model.HCCTranscript;
import vn.edu.saigontech.source.Model.HCCTranscriptAverageGPA;
import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class HCCTranscriptDAO implements vn.edu.saigontech.source.DAO.HCCTranscriptDAO{

	private Connection conn;

	public HCCTranscriptDAO() throws ClassNotFoundException, SQLException {
		
	}
	
	/** Get student's general information
	 * @param stuId Student Id
	 */
	@Override
	public List<HCCTranscriptGeneralInfo> getHCCTranscriptGeneralInfo(String stuId) {
		List<HCCTranscriptGeneralInfo> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "SELECT (lastname || ' ' || firstname) as name,"+
    				  " id, (dob || '/' || mob || '/' || yob) as bday,"+
    				  " id_hccs, pid_hccs, (SELECT catalog_year FROM catalog WHERE id_seq = catalog_code)AS catalog,"+ 
    				  "(SELECT name FROM major WHERE id_seq=programe) programe"+
    			 	  " FROM student where id_seq = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new HCCTranscriptGeneralInfo( rs.getString("name"), rs.getString("id"),rs.getString("bday")
						,rs.getString("id_hccs"),rs.getString("pid_hccs"), rs.getString("catalog"), rs.getString("programe")));
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
	
	/** Get HCC Transcript data
	 * @param stuId Student Id
	 */
	@Override
	public List<HCCTranscript> getHCCTranscript(String stuId) {
		List<HCCTranscript> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "SELECT v.semester_name,subjectid, v.aca_year, v.grade, v.letter_mark, v.subjectname, v.credits, v.credits_earn ,average_mark,num_semester_year"+ 
					 " FROM v_course_workforce v"+
					 " WHERE v.id_student = ?"+ 
					 " ORDER BY v.num_semester_year";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new HCCTranscript( rs.getString("semester_name"), rs.getString("subjectid"), rs.getString("aca_year"),rs.getString("grade"),
						rs.getString("letter_mark"), rs.getString("subjectname"), rs.getString("credits"), rs.getString("credits_earn"), rs.getString("average_mark"), rs.getString("num_semester_year")));
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
	
	/** Get average GPA
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@Override
	public List<HCCTranscriptAverageGPA> getAverageGPA(String stuId, String acaYear, String semester) {
		List<HCCTranscriptAverageGPA> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select fun_cumgpa_hcc(?,?,?) gpa_hcc from dual";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new HCCTranscriptAverageGPA(rs.getDouble("gpa_hcc")));
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
