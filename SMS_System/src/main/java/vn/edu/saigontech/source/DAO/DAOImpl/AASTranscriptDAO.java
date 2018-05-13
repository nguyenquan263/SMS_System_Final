package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

import vn.edu.saigontech.source.Model.AASTranscriptCourse;
import vn.edu.saigontech.source.Model.AASTranscriptSemester;
import vn.edu.saigontech.source.dbConnection.oConnection;
/** This class is used to get AAS Transcript data
 * @author Nguyen Bao Hoang Long
 * Written on: 22/3/2018
 */

public class AASTranscriptDAO implements vn.edu.saigontech.source.DAO.AASTranscriptDAO{
	
	private Connection conn;

	public AASTranscriptDAO() throws ClassNotFoundException, SQLException {
//		conn = oConnection.getOracleConnection();
	}
	
	/** Get semesters in AAS. (Ex: SPRING 2018, SUMMER 2017,etc)
	 * @param stuId Student ID
	 * @param acaYear Academic year
	 * @param semesterId Semester ID (Ex: 2,3,etc.)
	 */
	@Override
	public List<AASTranscriptSemester> getAASTranscriptSemester(String stuId, String acaYear, String semesterId) {
		List<AASTranscriptSemester> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			//If semesterId == 4, it means it's SPRING semester, we have to change it into 1 because numYears variable bellow 
			//which is the concatenation between academic year and semester Id (Ex: 20184, 20173,...) cannot be
			//like 20181, 20171, 20151, etc. it has to be like 20184, 20174, 20154, etc. 
			if (semesterId.equals("4"))
				semesterId = "1";
			String numYear = acaYear + semesterId;
			String sql = 
					"select id_student,semester_name,aca_year,semester,term_gpa_aas,cum_gpa_aas"+ 
					" from v_cum_gpa_aas"+ 
					" where id_student = ?" +
					" and num_semester_year < ?"+
					" order by num_semester_year"; 
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, numYear);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new AASTranscriptSemester(rs.getString("id_student"),rs.getString("semester_name"),rs.getString("aca_year")
						, rs.getString("semester"), rs.getDouble("term_gpa_aas"), rs.getDouble("cum_gpa_aas")));
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
	
	/** Get course data from each semester in AAS
	 * @param stuId Student ID
	 * @param acaYear Academic year
	 * @param semesterID Semester ID (Ex: 2,3,etc.)
	 */
	@Override
	public List<AASTranscriptCourse> getAASTranscriptCourse(String stuId, String acaYear, String semesterId) {
		List<AASTranscriptCourse> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql ="select aca_year,subjectid,subjectname,credits,credits_earn,letter_mark"+ 
					" from v_course"+ 
					" where id_student= ?"+ 
					" and aca_year= ?"+
					" and semester= ?"+
					" and aas_sgt= 0"+ 
					" order by subjectid";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semesterId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new AASTranscriptCourse(rs.getString("aca_year"),rs.getString("subjectid"),rs.getString("subjectname")
						, rs.getString("credits"), rs.getString("credits_earn"), rs.getString("letter_mark")));
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
