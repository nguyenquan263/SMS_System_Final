package vn.edu.saigontech.source.DAO.DAOImpl;

/** This class is used to get ESL Transcript and relevant information
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;


import vn.edu.saigontech.source.Controller.ESLTranscriptTOEFL;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptCourseBefore;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterAfter;
import vn.edu.saigontech.source.Model.ESLTranscriptSemesterBefore;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class ESLTranscriptDAO implements vn.edu.saigontech.source.DAO.ESLTranscriptDAO {
	private Connection conn;

	public ESLTranscriptDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	
	/** Get semesters in which student studied ESL courses
	 * @param stuId Student Id
	 */
	@Override
	public List<ESLTranscriptSemesterBefore> getESLTranscriptSemesterBefore(String stuId) {
		List<ESLTranscriptSemesterBefore> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			
			String sql = "select id_student,semester_name,semestervn,credits,credits_earn,"
					+ " aca_year,semester,num_semester_year,term_gpa_esl,cum_gpa_esl from v_gpa_esl_before"
					+ " where id_student= ? order by num_semester_year";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			
			while (rs.next()) {
				arr.add(new ESLTranscriptSemesterBefore(rs.getString("id_student"), rs.getString("semester_name"), rs.getString("semestervn"),
						rs.getString("credits"), rs.getString("credits_earn"), rs.getString("aca_year"), rs.getString("semester"), rs.getString("num_semester_year"),
						rs.getString("term_gpa_esl"), rs.getString("cum_gpa_esl")));
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
	
	/** In each semesters (before SPRING 2003) in which student studied ESL courses, get specific ESL course
	 *  @param stuId Student Id
	 *  @param semester SemesterId
	 * @param acaYear Academic Year
	 */
	@Override
	public List<ESLTranscriptCourseBefore> getESLTranscriptCourseBefore(String stuId, String semester, String acaYear) {
		List<ESLTranscriptCourseBefore> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			String sql = "select sb.name subjectname, sb.id subjectid, st.average_mark mark,"
					+ " (case when st.final_mark = -60 or st.final_mark = -70 or st.final_mark = -80 then 'F(A/P/C)'"
					+ " when st.mid_mark = -60 or st.mid_mark = -70 or st.mid_mark = -80  then 'F(A/P/C)'"
					+ " else convert_to_letter(st.average_mark) end)letter_mark from sub_subject sb, study_sub st"
					+ " where sb.id_seq = st.subcode and upper(sb.id) not like upper('TOEFL')"
					+ " and st.id_student = ? and st.aca_year = ? and st.semester = ? order by sb.name";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new ESLTranscriptCourseBefore(rs.getString("subjectname"), rs.getString("subjectid"), rs.getString("mark"),
						rs.getString("letter_mark")));
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

	/** Get toefl score in each ESL semester
	 * @param stuId Student ID
	 * @param acaYear Academic Year
	 * @param semester Semester Id
	 */
	@Override
	public List<ESLTranscriptTOEFL> getESLTranscriptTOEFL(String stuId, String acaYear, String semester) {
		List<ESLTranscriptTOEFL> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			String sql = "select subjectid,subjectname,average_mark,toefl_pass" + " from v_esl_advance"
					+ " where id_student= ? and aca_year= ? and semester= ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new ESLTranscriptTOEFL(rs.getString("subjectid"), rs.getString("subjectname")
						, rs.getString("average_mark"), rs.getString("toefl_pass")));
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

	/** Get semesters (after SPRING 2003) in which student studied ESL courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@Override
	public List<ESLTranscriptSemesterAfter> getESLTranscriptSemesterAfter(String stuId, String acaYear,
			String semester) {
		List<ESLTranscriptSemesterAfter> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		if (semester.equals("4"))
		{
			semester = "1";
		}
		try {
			String numYear = acaYear + semester;
			String sql =
					"select id_student,semester_name,"+ 
					 " (case when semester=4 then 'Mùa Xuân'"+
					 " when semester =1 then 'Mùa Hè'"+  
					 " when semester=3 then 'Mùa Thu' end)  semestervn,"+ 
					 " aca_year,semester,num_semester_year,term_gpa_esl,cum_gpa_esl"+ 
					 " from v_cum_gpa_esl"+ 
					 " where id_student= ?"+
					 " and num_semester_year >=20031"+
					 " and num_semester_year < ?"+
					" order by num_semester_year";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, numYear);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new ESLTranscriptSemesterAfter(rs.getString("id_student"), rs.getString("semester_name"), rs.getString("semestervn"),
						rs.getString("aca_year"),rs.getString("semester"),rs.getString("num_semester_year"),rs.getString("term_gpa_esl"),rs.getString("cum_gpa_esl")));
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
	
	/** In each semester (after SPRING 2003) in which student studied ESL courses, get specific ESL courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@Override
	public List<ESLTranscriptCourseAfter> getESLTranscriptCourseAfter(String stuId, String acaYear, String semester) {
		List<ESLTranscriptCourseAfter> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			String sql =
					"select aca_year,subjectid,subjectname,credits,credits_earn,letter_mark,average_mark"+ 
					" from v_course"+ 
					" where id_student= ?"+
					" and aca_year= ?"+
					" and semester= ?"+
					" and aas_sgt= 1"+	
					" order by subjectid";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new ESLTranscriptCourseAfter(rs.getString("aca_year"), rs.getString("subjectid"),rs.getString("subjectname"), rs.getString("credits"),
						rs.getString("credits_earn"),rs.getString("letter_mark"),rs.getString("average_mark")));
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
