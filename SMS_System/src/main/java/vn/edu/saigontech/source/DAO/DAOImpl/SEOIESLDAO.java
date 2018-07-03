package vn.edu.saigontech.source.DAO.DAOImpl;
//written by Nguyen Ngoc Minh Quan
//Data Access Object for some actions about ESL SEOI.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;
import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.Model.teacherInformationForESLSEOI;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class SEOIESLDAO implements vn.edu.saigontech.source.DAO.seoiESLDAO {
	private Connection conn;

	public SEOIESLDAO() {
	}
	//get current semester and current academic year for ESL SEOI
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
	//get the list of SEOIs which is availabled in current semester.
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

				PreparedStatement pre1 = conn.prepareStatement("select count(*) from"
						+ " (select id_seq from studentevaluation " + " where student_id = ? and semester = ? and "
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
	//this function will get comment of teacher
	private String teacherComment(Connection conn, String classcode) throws SQLException {
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
	//get id of teacher comment.
	private int teacherCommentID(Connection conn, String classcode) throws SQLException {
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
	
	//the function that check this seoi is expired or not.
	public boolean isValidate(Integer semester, Integer acaYear) throws SQLException {
		conn = oConnection.getOracleConnection();
		String sql = " select count(id_seq) from evaluationform " + " where semester = ? " + " and aca_year = ? "
				+ " and sysdate between begin_date and (end_date + 1)";

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
			} else
				num = -1;
			rs.close();
			prs.close();
		} catch (SQLException e) {
			e.printStackTrace();
			num = -1;
		}

		if (num == 1)
			validDate = true;
		else
			validDate = false;

		return validDate;
	}
	//the function that get question in this ESL SEOI.
	@Override
	public List<ESLSEOIQuestion> getAllQuestionSEOI(Integer Semester, Integer acaYear, Integer type)
			throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		ArrayList<ESLSEOIQuestion> questionArr = new ArrayList<>();
		try {
			String sql = "select evaluationquestion.id_seq, " + "evaluationquestion.left_content_en, ncr2unicodestring(evaluationquestion.left_content_vn) left_content_vn "
					+ "from evaluationquestion, evaluationform " + "where evaluationquestion.evaluation_id = "
					+ "evaluationform.id_seq and " + "evaluationform.semester = ? " + "and evaluationform.aca_year = ?"
					+ "and evaluationform.type = ? ";
			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, Semester);
			pst.setInt(2, acaYear);
			pst.setInt(3, type);

			ResultSet rs = pst.executeQuery();

			ESLSEOIQuestion currQuestion;

			while (rs.next()) {
				currQuestion = new ESLSEOIQuestion();

				currQuestion.setQuestionID(rs.getInt("ID_SEQ"));
				currQuestion.setQuestionLeftContent(rs.getString("LEFT_CONTENT_EN"));
				currQuestion.setQuestionLeftContentVN(rs.getString("LEFT_CONTENT_VN"));
				questionArr.add(currQuestion);
			}
			return questionArr;

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}
	//this function will get teacher information by teacher id and class id.
	@Override
	public teacherInformationForESLSEOI getTeacherInformationByClassID(Integer classID, Integer teacherID)
			throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		teacherInformationForESLSEOI targetTeacher = new teacherInformationForESLSEOI();
		try {
			String sql = "select ncr2unicodestring(lastname) LASTNAME, ncr2unicodestring(firstname) FIRSTNAME, name from "
					+ "teacher, classes where teacher.id_seq = ? " + "and classes.id_seq = ? ";
			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, teacherID);
			pst.setInt(2, classID);

			ResultSet rs = pst.executeQuery();

			if (rs.next()) {
				targetTeacher.setLastName(rs.getString("LASTNAME"));
				targetTeacher.setFirstName(rs.getString("FIRSTNAME"));
				targetTeacher.setClassName(rs.getString("NAME"));

				return targetTeacher;
			} else {
				return null;
			}

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}
	
	//this function will get the string of points, which is got from front end, separated by a space.
	//and add them to the database.
	@Override
	public String addPoints(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String questionIDList, String pointList) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		String[] pointArray = getArray(pointList);
		String[] questionArray = getArray(questionIDList);
		try {
			conn.setAutoCommit(false);
			for (int i = 0; i < questionArray.length; i++) {
				PreparedStatement pre1 = conn.prepareStatement(" insert into studentevaluation "
						+ " (id_seq, student_id, semester, aca_year, " + " classcode, teacher_id, question_id, answer) "
						+ " values(seq_studentevaluation.nextval, ?, ?, ?, ?, ?, ?, ?)");
				pre1.setString(1, studentID);
				pre1.setString(2, Semester);
				pre1.setString(3, acaYear);
				pre1.setString(4, classID);
				pre1.setString(5, instructorID);
				pre1.setString(6, questionArray[i]);
				pre1.setString(7, pointArray[i]);
				pre1.execute();
				pre1.close();
			}
			conn.commit();
			conn.setAutoCommit(true);
			return "Completed";
		} catch (Exception e) {
			e.printStackTrace();
			return "Failed";
		} finally {
			conn.close();
		}
	}
	
	//this function will split the input string, which is splited by a space, to the array of string.

	public String[] getArray(String pointsString) {
		String temp = pointsString.substring(0, pointsString.length() - 1);
		String[] res = temp.split(" ");

		return res;
	}
	//this function will get the comment of student from front end to the database.
	@Override
	public String addComment(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String comment) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		try {
			conn.setAutoCommit(false);
			PreparedStatement pre1 = conn.prepareStatement("insert into studentevaluationcomment "
					+ "(id_seq, student_id, semester, aca_year, " + "classcode, teacher_id, comments, type) "
					+ "values(seq_studentevaluationcomment.nextval, ?, ?, ?, ?, ?, ?, ?)");
			pre1.setString(1, studentID);
			pre1.setString(2, Semester);
			pre1.setString(3, acaYear);
			pre1.setString(4, classID);
			pre1.setString(5, instructorID);
			pre1.setString(6, comment);
			pre1.setString(7, "0");
			pre1.execute();
			pre1.close();

			conn.commit();
			conn.setAutoCommit(true);
			return "Completed";
		} catch (Exception e) {
			e.printStackTrace();
			return "Failed";
		} finally {
			conn.close();
		}
	}

}
