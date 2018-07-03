package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.OtherSEOIOtherCoursesInfo;
import vn.edu.saigontech.source.Model.OtherSEOIQuestion;
import vn.edu.saigontech.source.dbConnection.oConnection;

/** This class is used to get Other SEOI data
 * @author Nguyen Bao Hoang Long
 * Written on 13/5/2018
 */
public class OtherSEOIDAO implements vn.edu.saigontech.source.DAO.OtherSEOIDAO{
	private Connection conn;
	
	/** Get general courses information of other SEOI courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@Override
	public List<OtherSEOIOtherCoursesInfo> getOtherCourseInfo(String semester, String acaYear, String stuId) {
		List<OtherSEOIOtherCoursesInfo> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"select distinct tc.id_seq teacher_id, ncr2unicodestring(tc.lastname), ncr2unicodestring(tc.firstname),cl.id_seq class_id, cl.name "+ 
					"from study st,classes cl, assigntoclass ass, teacher tc, timetable tt, detail_timetable dt, subject subj "+ 
					"where st.semester = ? "+
					"and st.aca_year = ? "+
					"and st.id_student = ? "+
					"and st.subjectcode = cl.subjectcode "+ 
					"and cl.aca_year = ? "+ 
					"and cl.semester = ? "+
					"and ass.id_student = ? "+
					"and ass.classcode = cl.id_seq "+ 
					"and dt.timetablecode = tt.id_seq and tt.aca_year = ? "+
					"and tt.semester = ? "+
					"and tt.id_teacher = tc.id_seq "+ 
					"and dt.classcode = cl.id_seq "+ 
					"and cl.subjectcode = subj.id_seq "+ 
					"and subj.aas_sgt = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, semester);
			statement.setString(2, acaYear);
			statement.setString(3,stuId);
			statement.setString(4, acaYear);
			statement.setString(5, semester);
			statement.setString(6, stuId);
			statement.setString(7, acaYear);
			statement.setString(8, semester);
			statement.setString(9, "2");
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new OtherSEOIOtherCoursesInfo(rs.getString("teacher_id"),rs.getString("ncr2unicodestring(tc.lastname)"),
						rs.getString("ncr2unicodestring(tc.firstname)"), rs.getString("class_id"), rs.getString("name")));
			}
			rs.close();
			statement.close();
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

	/** To check if the student has evaluate a specific teacher in a specific course already or not
	 * @param stuId Student Id
	 * @param classId Class Id
	 * @param teacherId Teacher Id
	 */
	@Override
	public boolean isStatus(String stuId, String classId, String teacherId) {
		boolean status = false;
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"select * from other_student_evaluation where id_student = ? and class_id = ? and id_teacher = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, classId);
			statement.setString(3,teacherId);

			rs = statement.executeQuery();
			if (rs.next()) {				
				status = true;
			}
			rs.close();
			statement.close();
			return status;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
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
	
	/** To check if it is in the evaluation time
	 * @param classId Class Id
	 */
	@Override
	public boolean isCheckTime(String classId) {
		boolean status = false;
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"select to_char(from_date,'mm/dd/yyyy hh:mm:ss') begindate, to_char(to_date,'mm/dd/yyyy hh:mm:ss') expiredate "+ 
					 "from evaluationperiod "+ 
					 "where  SYSDATE >=from_date "+ 
					 "and  SYSDATE <=to_date "+
					 "and class_id = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, classId);
			rs = statement.executeQuery();
			if (rs.next()) {				
				status = true;
			}
			rs.close();
			statement.close();
			return status;
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
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
	
	/** To insert student's comment into Other_student_eval_comment table
	 */
	@Override
	public String insertOtherStudentEvaluationComment(String stuId, String class_id, String id_teacher, String comment) {
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					" merge INTO Other_student_eval_comment osec " +
							 " USING (SELECT ? AS id_student, ? AS class_id, ? AS id_teacher, ? AS comments FROM dual) tb " +
							 " ON (osec.id_student = tb.id_student " +
						     " AND osec.class_id = tb.class_id " +
						     " AND osec.id_teacher = tb.id_teacher) " +
							 " WHEN matched THEN " +
							 " UPDATE SET " +
							 " osec.comments = tb.comments " +
							 " WHEN NOT matched THEN " +
							 " INSERT VALUES(tb.id_student, tb.class_id, tb.id_teacher, tb.comments, DEFAULT)";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, class_id);				
			statement.setString(3, id_teacher);
			statement.setString(4, comment);	
			rs = statement.executeQuery();
			
			rs.close();
			statement.close();
			return "Completed";
		} catch (SQLException e) {
			e.printStackTrace();
			return "Failed";
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

	/** To insert student's evaluation into Other_student_evaluation table
	 */
	@Override
	public String insertOtherStudentEvaluation(String stuId, String class_id, String question_id, String value,
			String id_teacher) {
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"insert into other_student_evaluation (id_student, class_id, id_question, id_teacher, value) values(?, ?, ?, ?, ?)";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, class_id);
			statement.setString(3, question_id);				
			statement.setString(4, id_teacher);
			statement.setString(5, value);
			rs = statement.executeQuery();
			
			rs.close();
			statement.close();
			return "Completed";
		} catch (SQLException e) {
			e.printStackTrace();
			return "Failed";
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
	
	
	/** To get list of Other SEOI questions
	 */
	@Override
	public List<OtherSEOIQuestion> getOtherSEOIQuestions() {
		List<OtherSEOIQuestion> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"SELECT id_seq, content_en, ncr2unicodestring(content_vn), type FROM other_evaluation_question where status = ? " +
							 "and (type = ? or type = ?) ORDER BY TYPE, order_id";
			statement = conn.prepareStatement(sql);
			statement.setString(1, "1");
			statement.setString(2, "0");
			statement.setString(3,"1");
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new OtherSEOIQuestion(rs.getString("id_seq"),rs.getString("content_en"),rs.getString("ncr2unicodestring(content_vn)"),rs.getString("type")));
			}
			rs.close();
			statement.close();
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
