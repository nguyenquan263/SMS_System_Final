package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class seoiESLDAO implements vn.edu.saigontech.source.DAO.seoiESLDAO {
	private Connection conn;
	private systemTimeForSEOI systemTime;
	private List<ESLClassInformationForSEOI> eslClassSEOIArr;

	public seoiESLDAO() {
	}

	@Override
	public systemTimeForSEOI getSystemTime() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		systemTimeForSEOI sysTime = new systemTimeForSEOI();
		try {
			String sql = "select syst.aca_year, syst.semester, seme.name from System syst, Semester seme where seme.id_seq = syst.semester";
			PreparedStatement pst = conn.prepareStatement(sql);

			ResultSet rs = pst.executeQuery();

			if (rs.next()) {
				sysTime.setAcaYear(rs.getInt("ACA_YEAR"));
				sysTime.setSemester(rs.getInt("SEMESTER"));
				sysTime.setSemesterName(rs.getString("NAME"));
			}
			return sysTime;

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}

	@Override
	public List<ESLClassInformationForSEOI> getAllESLClassForSEOI(Integer Semester, Integer acaYear, Integer studentID)
			throws ClassNotFoundException, SQLException {
		ArrayList<ESLClassInformationForSEOI> eslClassSEOIArr = new ArrayList<>();
		conn = oConnection.getOracleConnection();
		try {
			String sql = "select distinct tc.id_seq teacher_id, "
					+ "ncr2unicodestring(tc.lastname) LASTNAME, ncr2unicodestring(tc.firstname) FIRSTNAME, cl.id_seq class_id, "
					+ "cl.name from study st,classes cl, assigntoclass ass, "
					+ "teacher tc, timetable tt, detail_timetable dt, "
					+ "subject subj where st.semester = ? and st.aca_year = ? "
					+ "and st.id_student = ? and st.subjectcode = cl.subjectcode "
					+ "and cl.aca_year = ? and cl.semester = ? and ass.id_student = ? "
					+ "and ass.classcode = cl.id_seq and dt.timetablecode = tt.id_seq "
					+ "and tt.aca_year = ? and tt.semester = ? and tt.id_teacher = tc.id_seq "
					+ "and dt.classcode = cl.id_seq and cl.subjectcode = subj.id_seq and "
					+ "subj.aas_sgt = ? and tt.week = 8";

			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, Semester);
			pst.setInt(2, acaYear);
			pst.setInt(3, studentID);
			pst.setInt(4, acaYear);
			pst.setInt(5, Semester);
			pst.setInt(6, studentID);
			pst.setInt(7, acaYear);
			pst.setInt(8, Semester);
			pst.setString(9, "1");

			ResultSet answer = pst.executeQuery();

			ESLClassInformationForSEOI temp;

			while (answer.next()) {
				temp = new ESLClassInformationForSEOI();

				String comm = teacherComment(conn, answer.getString("class_id"));

				if (!comm.equals("-1"))
					temp.setInstructorName(comm);
				else
					temp.setInstructorName(answer.getString(2) + " " + answer.getString(3));

				int teacherCommentID = teacherCommentID(conn, answer.getString("class_id"));

				temp.setClassName(answer.getString(5));

				PreparedStatement pre1 = conn.prepareStatement("select count(*) from" + " (select id_seq from studentevaluation "
						+ " where student_id = ? and semester = ? and "
						+ " aca_year = ? and classcode = ? and teacher_id = ? " + " and rownum = '1' "
						+ " and  question_id in " + "	  (select id_seq from evaluationquestion "
						+ " where evaluation_id " + "  in (select id_seq from evaluationform " + " where aca_year = ? "
						+ " and semester = ? ))) ");
				pre1.setInt(1, studentID);
				pre1.setInt(2, Semester);
				pre1.setInt(3, acaYear);
				pre1.setString(4, answer.getString(4));
				
				if (teacherCommentID == -1)
					pre1.setString(5, answer.getString(1));
				else
					pre1.setString(5, "" + teacherCommentID);
				
				pre1.setInt(6, acaYear);
				pre1.setInt(7, Semester);
				ResultSet answer1 = pre1.executeQuery();
				answer1.next();
				
				if (isValidate(Semester, acaYear) == true) {
					
					if (answer1.getInt(1) < 1) {
						temp.setClassID(answer.getInt(4));
						
						if (teacherCommentID == -1)
							temp.setTeacherID(answer.getInt(1));
						else 
							temp.setTeacherID(teacherCommentID);
						
						temp.setStatus("Incomplete");
					} else {
						temp.setClassID(answer.getInt(4));
						temp.setTeacherID(answer.getInt(1));
						temp.setStatus("Completed");
					}
				} else {
					temp.setClassID(-1);
					temp.setTeacherID(-1);
					temp.setStatus("Evaluation has expired!");
				}
				
				eslClassSEOIArr.add(temp);
			}

			return eslClassSEOIArr;

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}

	private String teacherComment(Connection conn, String classcode) throws SQLException {
		conn = oConnection.getOracleConnection();
		String result = "-1";
		try {
			String sql = "" + " select lastname,firstname " + " from teacher_comment_class tcc, teacher tc "
					+ " where tcc.teachercode = tc.id_seq " + " and classcode = ? ";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, classcode);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getString("lastname") + " " + rs.getString("firstname");
			}
			rs.close();
			prs.close();

		} catch (SQLException ex) {
			ex.printStackTrace();

		}
		return result;
	}

	private int teacherCommentID(Connection conn, String classcode) throws SQLException {
		conn = oConnection.getOracleConnection();
		int result = -1;
		try {
			String sql = " select tc.id_seq " + " from teacher_comment_class tcc, teacher tc "
					+ " where tcc.teachercode = tc.id_seq " + " and classcode = ? ";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, classcode);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("id_seq");
			}
			rs.close();
			prs.close();

		} catch (SQLException ex) {
			ex.printStackTrace();

		}
		return result;
	}
	
	public boolean isValidate(Integer semester, Integer acaYear) throws SQLException {
		conn = oConnection.getOracleConnection();
		String sql = " select count(id_seq) from evaluationform " +
			" where semester = ? " + 
			" and aca_year = ? " +
			" and sysdate between begin_date and (end_date + 1)" ;

		boolean validDate = false;
		ResultSet rs;
		PreparedStatement prs;
		int num;
		
		
		try {
			prs = conn.prepareStatement(sql);
			prs.setInt(1, semester);
			prs.setInt(2, acaYear);
			rs = prs.executeQuery();
			
			if (rs.next()) {
				num = rs.getInt(1);
			}	
			else num = -1;
			rs.close();
			prs.close();
		} catch (SQLException e) {
			e.printStackTrace();
			num = -1;
		}
		
		if (num == 1) validDate = true;
		else validDate = false;
		
		return validDate;
	}

}
