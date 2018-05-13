package vn.edu.saigontech.source.DAO.DAOImpl;

/** This class is used to get student's grade data
 *  @author Nguyen Bao Hoang Long
 *  Written on 23/3/2018
 */
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.AssignmentGradeAAS;
import vn.edu.saigontech.source.Model.AssignmentGradeGE;
import vn.edu.saigontech.source.Model.GradeAASDetail;
import vn.edu.saigontech.source.Model.GradeGEDetail;
import vn.edu.saigontech.source.Model.GradeGETitle;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.Model.TeacherComment;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class GradeDAO implements vn.edu.saigontech.source.DAO.GradeDAO{

	private Connection conn;

	public GradeDAO() throws ClassNotFoundException, SQLException {
		
	}
	
	/** Get all grade data in AAS courses
	 *  @param studentId Student Id
	 *  @param acaYear Academic year
	 *  @param semester Semester Id
	 */
	@Override
	public List<GradeAASDetail> getAllGradeAAS(Integer studentId, Integer acaYear, Integer semester) {
		List<GradeAASDetail> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select ( sb.id||' ' || sb.num_code) id, sb.name,"+ 
				    "max(decode(cgs.type,1,to_absent(st.mid_mark))) mid_mark,"+ 
				    "max(decode(cgs.type,0,to_absent(st.final_mark))) final_mark,"+ 
					"max(case when cgs.type =0  then to_absent(st.average_mark) end ) average_mark,"+
					"cl.id_seq classcode, st.id_seq studycode, cl.mid_percent, cl.final_percent,cl.subjectcode, sb.aas_sgt"+
				" from study st,  subject sb, classes cl, assigntoclass asg , class_grade_status_semester cgs"+
				" where cl.subjectcode = st.subjectcode"+ 
				" and cl.subjectcode = sb.id_seq"+
				" and cl.aca_year = st.aca_year"+ 
				" and cl.semester = st.semester"+
				" and asg.classcode = cl.id_seq"+ 
				" and asg.id_student = st.id_student"+ 
				" and cl.id_seq = cgs.classcode(+)"+
				" and cl.sub_subjectcode is null"+ 
				" and cl.subjectcode not in (select id_par from sub_subject)"+  
				" and st.id_student = ?"+
				" and st.aca_year = ?"+
				" and st.semester = ?"+
				" group by sb.id, sb.num_code, sb.name, cl.id_seq, st.id_seq, cl.mid_percent, cl.final_percent, cl.subjectcode, sb.aas_sgt"+ 
				" order by sb.aas_sgt,id";
			statement = conn.prepareStatement(sql);
			statement.setInt(1, studentId);
			statement.setInt(2, acaYear);
			statement.setInt(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new GradeAASDetail(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5)
						, rs.getString(6), rs.getString(7), rs.getString(8), rs.getString(9), rs.getString(10), rs.getString(11)));
			}
			rs.close();
			statement.close();
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

	/** Get Policy 2 grade deduction for each AAS classes
	 * @param semester Semester
	 * @param acaYear Academic year
	 * @param subjectCode Subject code
	 * @param studentCode Student Id
	 */
	@Override
	public List<Policy2Model> getPolicy2ForGradeAAS(String semester, String acaYear, String subjectCode, String studentCode) {
		List<Policy2Model> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select po.numofviolate, po.minusgrade, po.coursetype" + 
					" from student_policy2 po, study" + 
					" where po.studentcode = id_student" + 
					" and po.semester= ?"+ 
					" and po.aca_year= ?"+
					" and study.semester= ?"+
					" and study.aca_year= ?"+
					" and study.subjectcode = ?"+
					" and po.studentcode = ?";
			statement = conn.prepareStatement(sql);
			statement.setString(1, semester);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			statement.setString(4, acaYear);
			statement.setString(5, subjectCode);
			statement.setString(6, studentCode);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new Policy2Model(null, null, null, rs.getString("numofviolate"), rs.getString("minusgrade"), null, rs.getString("coursetype")));
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

	/** Get assignment grade data in each AAS courses
	 *  @param studyCode Study code
	 *  @param classCode Class code
	 */
	@Override
	public List<AssignmentGradeAAS> getAssignmentGradeAAS(String studyCode, String classCode) {
		List<AssignmentGradeAAS> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "SELECT ap.col, ap.percentage,"+  
					" (CASE WHEN ag.grade=-60 OR ag.grade=-70 OR ag.grade=-80 THEN 'F(A/P/C)'"+ 
					" WHEN ag.grade=-90 THEN 'I'" +
					" WHEN ag.grade=-30 THEN 'M'"+
					" WHEN ag.grade >0 THEN ag.grade||''"+ 
					" ELSE ' ' END) grade"+
			" FROM assignment_percentage ap  , assignment_grade ag"+ 
			" WHERE ag.col = ap.col"+ 
			" AND classcode = ?"+
			" AND ag.studycode =?"+
			" ORDER BY ap.col";
			statement = conn.prepareStatement(sql);
			statement.setString(1, classCode);
			statement.setString(2, studyCode);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new AssignmentGradeAAS(rs.getString("col"), rs.getString("percentage"), rs.getString("grade")));
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

	/** Get the title in GE grade (Ex:  General English Integrated Level 2, General English Integrated Level 5, etc.)
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param studentId Student Id
	 */
	@Override
	public List<GradeGETitle> getAllGradeGETitle(String semester, String acaYear, String studentId) {
		List<GradeGETitle> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select v.subjectcode,v.ge_id, v.ge_name,"  
	 				+" max(case when cgs.type in(0) then to_absent(sd.average_mark) end ) average_mark"
	 				+" from  v_ge_registered v, study sd, class_grade_status_semester cgs" 
	 				+" where v.id_student = sd.id_student" 
	 				+" and sd.subjectcode = v.subjectcode" 
	 				+" and v.classcode = cgs.classcode(+)" 
	 				+" and sd.semester = ?"
	 				+" and sd.aca_year = ?"
	 				+" and v.id_student = ?"
	 				+" and v.aca_year = ?" 
	 				+" and v.semester = ?" 
	 				+" group by v.subjectcode, v.ge_id, v.ge_name";
			statement = conn.prepareStatement(sql);
			statement.setString(1, semester);
			statement.setString(2, acaYear);
			statement.setString(3, studentId);
			statement.setString(4, acaYear);
			statement.setString(5, semester);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new GradeGETitle(rs.getString("subjectcode"), rs.getString("ge_id"), rs.getString("ge_name"), rs.getString("average_mark")));
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

	/** Get all grade data in GE courses
	 * @param studentId Student Id
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 */
	@Override
	public List<GradeGEDetail> getAllGradeGE(String studentId, String acaYear, String semester) {
		List<GradeGEDetail> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql ="select sb.id, sb.name, "+ 
				    "max(decode(cgs.type,1,to_absent(st.mid_mark))) mid_mark,"+
				    "max(decode(cgs.type,0,to_absent(st.final_mark))) final_mark,"+ 
				    "max(case when cgs.type =0  then to_absent(st.average_mark) end ) average_mark,"+ 
					"cl.id_seq classcode, st.id_seq studysubcode, cl.mid_percent, cl.final_percent,cl.subjectcode "+ 
				    "from study_sub st,  sub_subject sb, classes cl, assigntoclass asg , class_grade_status_semester cgs "+ 
				    " where  cl.sub_subjectcode = sb.id_seq"+ 
					" and sb.id_seq = st.subcode"+  
					" and cl.aca_year = st.aca_year"+ 
					" and cl.semester = st.semester"+ 
					" and asg.classcode = cl.id_seq"+ 
					" and asg.id_student = st.id_student"+ 
					" and cl.id_seq = cgs.classcode(+)"+ 
					" and cl.sub_subjectcode is not null"+ 
					" and st.id_student = ?"+
					" and st.aca_year = ?"+ 
					" and st.semester = ?"+
				 "group by sb.id, sb.name,st.average_mark,cl.id_seq , st.id_seq , cl.mid_percent, cl.final_percent,cl.subjectcode "+	
				 "order by id";
			statement = conn.prepareStatement(sql);
			statement.setString(1, studentId);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new GradeGEDetail(rs.getString("id"), rs.getString("name"), rs.getString("mid_mark"), rs.getString("final_mark")
						, rs.getString("average_mark"), rs.getString("classcode"), rs.getString("studysubcode"), rs.getString("mid_percent"), rs.getString("final_percent"), rs.getString("subjectcode")));
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
	
	/** Get assignment grade data in ESL course
	 * @param studyCode Study code
	 * @param classCode Class code
	 */
	@Override
	public List<AssignmentGradeGE> getAssignmentGradeGE(String studyCode, String classCode) {
		List<AssignmentGradeGE> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();

			String sql = "select ap.col, ap.percentage,"+ 
					 " (case when ag.grade=-60 or ag.grade=-70 or ag.grade=-80 then 'F(A/P/C)'"+ 
					  " when ag.grade=-90 then 'I'"+ 
					  " when ag.grade=-30 then 'M'"+  
					  " when ag.grade >0 then ag.grade||''"+ 
					  " else ' ' end) grade"+ 
					 " from assignment_percentage ap  , assignment_grade_esl ag"+ 
					 " where ag.col = ap.col"+ 
					 " and classcode = ?"+  			
				     " and ag.studysubcode = ?"+ 
					" order by ap.col";
			statement = conn.prepareStatement(sql);
			statement.setString(1, classCode);
			statement.setString(2, studyCode);
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new AssignmentGradeGE(rs.getString("col"), rs.getString("percentage"), rs.getString("grade")));
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
	
	/** Get teachers' comments
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@Override
	public List<TeacherComment> getTeacherComment(String semester, String acaYear, String stuId) {
		List<TeacherComment> arr = new ArrayList<>();
		PreparedStatement statement = null;
		ResultSet rs = null;
		try {
			conn = oConnection.getOracleConnection();
			String sql =  "with tc"+ 
					 " as(" +
						"select classcode, string_agg(distinct tc.lastname || ' '|| tc.firstname) teachername "+ 
						"from timetable tt, detail_timetable dt, teacher tc "+ 
						"where tt.id_seq = dt.timetablecode "+ 
						"and tt.id_teacher = tc.id_seq "+ 
						" and tt.semester = ?"+
						" and tt.aca_year =  ?"+
						"group by classcode"+ 
						"), com "+ 
						"as( "+ 
						"select  classcode,max(decode(type,1,com)) midterm_comment, max(decode(type,2,com)) final_comment "+ 
						"from comment_teacher "+ 
						"where semester = ?"+
						" and aca_year = ?"+
						" and id_student = ?"+
						" group by classcode"+    
						" ),cl"+ 
						" as("+
						" select cl.id_seq, cl.id, cl.name" +
						" from classes cl, assigntoclass asg"+ 
						" where cl.id_seq = asg.classcode"+        
						" and cl.semester = ?"+
						" and cl.aca_year =  ?"+
						" and asg.id_student = ?"+
						" and cl.sub_subjectcode is not null"+ 
						" and cl.subjectcode  in (select id_par from sub_subject)"+ 
						" union"+ 
						" select cl.id_seq, cl.id, cl.name"+ 
						" from classes cl, assigntoclass asg"+ 
						" where cl.id_seq = asg.classcode"+    
						" and cl.semester = ?"+
						" and cl.aca_year= ?"+
						" and asg.id_student = ?"+
						" and cl.sub_subjectcode is  null"+ 
						" and cl.subjectcode  not in (select id_par from sub_subject)"+ 
						" )"+ 
						" select cl.id_seq, cl.id, cl.name, ncr2unicodestring(tc.teachername), com.midterm_comment, com.final_comment"+ 
						" from cl, tc , com"+ 
						" where cl.id_seq = tc.classcode(+)"+ 
						" and cl.id_seq = com.classcode(+)"+ 
						" order by cl.id";
			statement = conn.prepareStatement(sql);
			statement.setString(1, semester);
			statement.setString(2, acaYear);
			statement.setString(3, semester);
			statement.setString(4, acaYear);
			statement.setString(5, stuId);
			statement.setString(6, semester);
			statement.setString(7, acaYear);
			statement.setString(8, stuId);
			statement.setString(9, semester);
			statement.setString(10, acaYear);
			statement.setString(11, stuId);
		
			rs = statement.executeQuery();
			while (rs.next()) {				
				arr.add(new TeacherComment(rs.getString("id_seq"), rs.getString("id"), rs.getString("name")
						, rs.getString("ncr2unicodestring(tc.teachername)"), rs.getString("midterm_comment"), rs.getString("final_comment")));
			}
			rs.close();
			statement.close();
			conn.close();
			return arr;
		} catch (Exception e) {
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
