package vn.edu.saigontech.source.DAO.DAOImpl;

/** This class is used to get dars data and relevant information
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */ 

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.DarsDegreeGranted;
import vn.edu.saigontech.source.Model.DarsEnrichmentCourse;
import vn.edu.saigontech.source.Model.DarsEnrichmentSemester;
import vn.edu.saigontech.source.Model.DarsOthersCourse;
import vn.edu.saigontech.source.Model.DarsOthersSemester;
import vn.edu.saigontech.source.Model.DarsStudentInfo;
import vn.edu.saigontech.source.Model.DarsStudentInfoScore;
import vn.edu.saigontech.source.Model.DarsTOEFL_IELTS;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class DarsDAO implements vn.edu.saigontech.source.DAO.DarsDAO {
	
	private Connection conn;
	public DarsDAO() throws ClassNotFoundException, SQLException {
//		conn = oConnection.getOracleConnection();
	}
	
	/** Get student's general information 
	 * 
	 */
	@Override
	public List<DarsStudentInfo> getDarsStudentInfo() {
		List<DarsStudentInfo> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select id_seq, name_e,ncr2unicodestring(name_v), status, note, typebox, sequencenum from studentinfo" 
					+" where status <> 0 and id_seq not in (161,162)" 
					+" order by sequencenum";
			statement = conn.prepareStatement(sql);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsStudentInfo(rs.getString("id_seq"), rs.getString("name_e"), rs.getString("ncr2unicodestring(name_v)")
						, rs.getString("status"), rs.getString("note"), rs.getString("typebox")
						, rs.getString("sequencenum")));
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
	
	/** Get TOEFL_IELTS score
	 * @param stuId Student Id
	 */
	@Override
	public List<DarsTOEFL_IELTS> getDarsTOEFL_IELTS(String stuId) {
		List<DarsTOEFL_IELTS> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql =  "select (case when status in(2,3) then  nvl(note,' ') else"+ 
				" (case when itp is not null  then 'ITP '||  itp|| ' ('|| to_char(itp_date,'mm/dd/yyyy')||')<br>'  end ) ||"+ 
				" (case when pbt is not null  then 'PBT '||  pbt|| ' ('|| to_char(pbt_date,'mm/dd/yyyy')||')<br>'  end ) ||"+ 
				" (case when cbt is not null  then 'CBT '||  cbt|| ' ('|| to_char(cbt_date,'mm/dd/yyyy')||')<br>'  end ) ||"+ 
				" (case when ibt is not null  then 'IBT '||   ibt|| ' ('|| to_char(ibt_date,'mm/dd/yyyy')||')<br>'  end ) ||"+
				" (case when ielts is not null  then 'IELTS '||  ielts|| ' ('|| to_char(ielts_date,'mm/dd/yyyy')||')'  end ) end) TOEFL"+
				" from student_toefl where id_student= ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsTOEFL_IELTS("TOEFL"));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	/** Get score data of student in entrance examination
	 * @param stuId Student Id
	 * @param id_seq which is taken from id_seq of previous query
	 */
	@Override
	public DarsStudentInfoScore getDarsStudentInfoScore(String stuId, String id_seq) {
		DarsStudentInfoScore arr = null;
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql =  "select sss.id_seq, sss.description, sss.contents,"+ 
					" si.typebox"+ 
					" from student_studentinfo sss, studentinfo si"+
					" where sss.studentinfoid = si.id_seq and"+ 
					" sss.studentid = ? and"+ 
				 	" sss.studentinfoid = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, id_seq);
			rs = statement.executeQuery();
			if (rs.next()) {
				arr = new DarsStudentInfoScore(rs.getString("id_seq"),rs.getString("description"),rs.getString("contents"),rs.getString("typebox"));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

	/** Get semesters in which the student studied enrichment courses
	 * @param stuId Student Id
	 */
	@Override
	public List<DarsEnrichmentSemester> getDarsEnrichmentSemester(String stuId) {
		List<DarsEnrichmentSemester> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"select distinct semester_name,aca_year,semester,num_semester_year"+ 
					" from v_course"+ 
					" where aas_sgt= 4"+ 
					 " and id_student= ?"+
					 " order by num_semester_year";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsEnrichmentSemester(rs.getString("semester_name"), rs.getString("aca_year"),rs.getString("semester"), rs.getString("num_semester_year")));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/** For each semester in which student studied enrichment courses, get the specific enrichment courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semesterId SemesterId (Ex: 2,3,...)
	 */
	@Override
	public List<DarsEnrichmentCourse> getDarsEnrichmentCourse(String stuId, String acaYear, String semesterId) {
		List<DarsEnrichmentCourse> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					 "select aca_year,subjectid,subjectname,credits,credits_earn,letter_mark"+
					 " from v_course"+
					 " where id_student= ?"+
					 " and aca_year= ?"+
					 " and semester= ?"+
					 " and aas_sgt= 4"+
					 " order by subjectid";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semesterId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsEnrichmentCourse(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6)));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/** Get semesters in which student studied courses which is categorized as Other courses
	 * @param stuId Student Id
	 */
	@Override
	public List<DarsOthersSemester> getDarsOthersSemester(String stuId) {
		List<DarsOthersSemester> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					"select distinct semester_name,aca_year,semester,num_semester_year"+ 
					" from v_course"+ 
					" where aas_sgt= 2"+
					" and id_student= ?"+
					" order by num_semester_year";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsOthersSemester(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4)));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	/** For each semester in which student studied courses which is categorized as Other courses, get specific courses
	 * @param stuId Student Id
	 * @param acaYear Academic year
	 * @param semesteId Semester Id
	 */
	@Override
	public List<DarsOthersCourse> getDarsOtherCourse(String stuId, String acaYear, String semesterId) {
		List<DarsOthersCourse> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					 "select aca_year,subjectid,subjectname,credits,credits_earn,letter_mark"+
					 " from v_course"+
					 " where id_student= ?"+
					 " and aca_year= ?"+
					 " and semester= ?"+
					 " and aas_sgt= 2"+
					 " order by subjectid";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			statement.setString(2, acaYear);
			statement.setString(3, semesterId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsOthersCourse(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6)));
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

	/** Get data of degree granting
	 * @param stuId Student Id
	 */
	@Override
	public List<DarsDegreeGranted> getDarsDegreeGranted(String stuId) {
		List<DarsDegreeGranted> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = 
					" select  (sem.name ||'/' ||sfp.aca_year ) semseter"+ 
					" from studentfinishprogram sfp, semester sem"+ 
					" where sfp.semester = sem.id_seq"+ 
					" and id_student = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, stuId);
			rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new DarsDegreeGranted(rs.getString(1)));
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
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

}
