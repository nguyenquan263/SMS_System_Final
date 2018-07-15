package vn.edu.saigontech.source.DAO.DAOImpl;

import vn.edu.saigontech.source.Model.ClassEvaluation;
import vn.edu.saigontech.source.Model.Question;
import vn.edu.saigontech.source.Model.Answer;
import vn.edu.saigontech.source.dbConnection.oConnection;

import java.io.PrintStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
//import utils.conn;

public class EvaluationDAO {
	private Connection conn;

	//
	// private conn conn = new conn();
	//
	public EvaluationDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}

	// public conn getconn() { return conn; }
	//
	// public void setconn(conn conn)
	// {
	// this.conn = conn;
	// }

	public List<ClassEvaluation> getCurrentClassOfStudentByStudentId(int studentID, int semester, int year)
			throws SQLException {
		List classes = new ArrayList();
		try {
			String sql = "SELECT DISTINCT tc.ID_SEQ AS teacher_id, cl.ID_SEQ AS class_id, ncr2unicodestring(tc.lastname) || ' ' || ncr2unicodestring(tc.firstname) as full_name, cl.id, cl.name FROM STUDY st, CLASSES cl, ASSIGNTOCLASS ass, TEACHER tc, TIMETABLE tt, DETAIL_TIMETABLE dt, SUBJECT subj WHERE st.SEMESTER = ? AND st.ACA_YEAR = ? AND st.ID_STUDENT = ? AND st.SUBJECTCODE = cl.SUBJECTCODE  AND cl.ACA_YEAR = ? AND cl.SEMESTER = ? AND ass.ID_STUDENT = ? AND ass.CLASSCODE = cl.ID_SEQ AND dt.TIMETABLECODE = tt.ID_SEQ AND tt.ACA_YEAR = ? AND tt.SEMESTER = ? AND tt.ID_TEACHER = tc.ID_SEQ AND dt.CLASSCODE = cl.ID_SEQ AND cl.SUBJECTCODE = subj.ID_SEQ AND subj.AAS_SGT = 0";

			PreparedStatement preparedStatement = conn.prepareStatement(sql);

			preparedStatement.setInt(1, semester);
			preparedStatement.setInt(2, year);
			preparedStatement.setInt(3, studentID);
			preparedStatement.setInt(4, year);
			preparedStatement.setInt(5, semester);
			preparedStatement.setInt(6, studentID);
			preparedStatement.setInt(7, year);
			preparedStatement.setInt(8, semester);

			System.out.println("sem:" + semester + "|");
			System.out.println("aca:" + year + "|");
			System.out.println("idst:" + studentID + "|");
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				ClassEvaluation classEvaluation = new ClassEvaluation();
				classEvaluation.setClassId(rs.getInt("class_id"));
				classEvaluation.setInstructorId(rs.getInt("teacher_id"));
				classEvaluation.setClassName(rs.getString("name"));
				classEvaluation.setInstructorName(rs.getString("full_name"));
				classes.add(classEvaluation);
			}
			rs.close();
			preparedStatement.close();

			int classID, instructorID;
			boolean checkTime, checkFinish;
			for (int i = 0; i < classes.size(); i++) {
				classID = ((ClassEvaluation) classes.get(i)).getClassId();
				instructorID = ((ClassEvaluation) classes.get(i)).getInstructorId();
				checkFinish = checkFinishEvaluation(classID, instructorID, studentID);
				checkTime = checkEvaluationTime(classID);

				((ClassEvaluation) classes.get(i)).setCheckEvaluationTime(checkTime);
				((ClassEvaluation) classes.get(i)).setFinishEvaluation(checkFinish);
				// ((ClassEvaluation)
				// classes.get(i)).setCheckEvaluationTime(checkEvaluationTime(((ClassEvaluation)
				// classes.get(i)).getClassId()));
				// ((ClassEvaluation)
				// classes.get(i)).setFinishEvaluation(checkFinishEvaluation(((ClassEvaluation)
				// classes.get(i)).getClassId(),((ClassEvaluation)
				// classes.get(i)).getInstructorId(),idStudent));
			}
			conn.close();
		} catch (SQLException e) {
		}
		return classes;
	}

	public List<ClassEvaluation> getCurrentClassOfStudentByStudentId(int idStudent, int semester, int year, int aasSgt)
			throws SQLException {
		List classes = new ArrayList();
		try {
			String sql = "SELECT DISTINCT tc.ID_SEQ AS teacher_id, cl.ID_SEQ AS class_id, tc.lastname || ' ' || tc.firstname as full_name, cl.id, cl.name FROM STUDY st, CLASSES cl, ASSIGNTOCLASS ass, TEACHER tc, TIMETABLE tt, DETAIL_TIMETABLE dt, SUBJECT subj WHERE st.SEMESTER = ? AND st.ACA_YEAR = ? AND st.ID_STUDENT = ? AND st.SUBJECTCODE = cl.SUBJECTCODE  AND cl.ACA_YEAR = ? AND cl.SEMESTER = ? AND ass.ID_STUDENT = ? AND ass.CLASSCODE = cl.ID_SEQ AND dt.TIMETABLECODE = tt.ID_SEQ AND tt.ACA_YEAR = ? AND tt.SEMESTER = ? AND tt.ID_TEACHER = tc.ID_SEQ AND dt.CLASSCODE = cl.ID_SEQ AND cl.SUBJECTCODE = subj.ID_SEQ AND subj.AAS_SGT = ?";

			PreparedStatement preparedStatement = conn.prepareStatement(sql);

			preparedStatement.setInt(1, semester);
			preparedStatement.setInt(2, year);
			preparedStatement.setInt(3, idStudent);
			preparedStatement.setInt(4, year);
			preparedStatement.setInt(5, semester);
			preparedStatement.setInt(6, idStudent);
			preparedStatement.setInt(7, year);
			preparedStatement.setInt(8, semester);

			preparedStatement.setInt(9, aasSgt);

			// System.out.println(sql);
			// System.out.println("sem:" + semester + "|");
			// System.out.println("aca:" + year + "|");
			// System.out.println("idst:" + idStudent + "|");
			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				ClassEvaluation classEvaluation = new ClassEvaluation();
				classEvaluation.setClassId(rs.getInt("class_id"));
				classEvaluation.setInstructorId(rs.getInt("teacher_id"));
				classEvaluation.setClassName(rs.getString("name"));
				classEvaluation.setInstructorName(rs.getString("full_name"));

				classes.add(classEvaluation);
			}
			rs.close();
			preparedStatement.close();
			conn.close();
		} catch (SQLException e) {
		}

		return classes;
	}

	public List<Question> getFirstGroupQuestion() {
		List questions = new ArrayList();
		try {
			String sql = "SELECT id_seq, content_en, ncr2unicodestring(content_vn) as content_vn, order_id,other_label, status FROM aas_evaluation_question WHERE ROWNUM <= 3 order by order_id";
			PreparedStatement preparedStatement = conn.prepareStatement(sql);

			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				Question question = new Question();
				question.setIdSeq(rs.getInt("id_seq"));
				question.setEngContent(rs.getString("content_en"));
				question.setVnContent(rs.getString("content_vn"));
				question.setOrderId(rs.getInt("order_id"));
				question.setType(rs.getInt("order_id"));
				question.setStatus(rs.getInt("status"));
				question.setLabel(rs.getString("other_label"));
				questions.add(question);
			}
			rs.close();
			preparedStatement.close();
			conn.close();
		} catch (SQLException e) {
		}

		return questions;
	}

	public List<Question> getSecondGroupQuestion() {
		List questions = new ArrayList();
		try {
			String sql = "SELECT * FROM (SELECT ROWNUM AS r, id_seq, content_en, ncr2unicodestring(content_vn) as content_vn, order_id, type, status,other_label FROM aas_evaluation_question WHERE TYPE IN (0,1) and status = 1 ORDER BY TYPE, order_id)  WHERE r > 3";

			PreparedStatement preparedStatement = conn.prepareStatement(sql);

			ResultSet rs = preparedStatement.executeQuery();
			while (rs.next()) {
				Question question = new Question();
				question.setIdSeq(rs.getInt("id_seq"));
				question.setEngContent(rs.getString("content_en"));
				question.setVnContent(rs.getString("content_vn"));
				question.setOrderId(rs.getInt("order_id"));
				question.setType(rs.getInt("order_id"));
				question.setStatus(rs.getInt("status"));
				question.setLabel(rs.getString("other_label"));
				questions.add(question);
			}
			rs.close();
			preparedStatement.close();
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return questions;
	}

	public int getStudentSeq(String studentCode) {
		int result = 0;
		try {
			String sql = "select id_seq from student where id = ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, studentCode);

			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("id_seq");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
			result = -1;
		}
		return result;
	}

	public String getStudentNameByStudentId(String studentId) {
		String result = "";
		try {
			String sql = "SELECT lastname || ' ' || firstname fullname FROM student WHERE id_seq = ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, studentId);

			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getString("fullname");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
		}
		return result;
	}

	public int getAcademicYear() {
		int result = 0;
		try {
			String sql = "select aca_year from SYSTEM";
			PreparedStatement prs = conn.prepareStatement(sql);

			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("aca_year");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
			result = -1;
		}
		return result;
	}

	public int getCurrentSemesterId() {
		int result = 0;
		try {
			String sql = "select semester from SYSTEM";
			PreparedStatement prs = conn.prepareStatement(sql);

			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("semester");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
			result = -1;
		}
		return result;
	}

	public String getCurrentSemesterById(int idSeq) {
		String result = "";
		try {
			String sql = "SELECT name FROM semester WHERE id_seq = ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, idSeq);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getString("name");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
		}

		return result;
	}

	public String getClassIdByClassSeq(int idSeq) {
		String result = "";
		try {
			String sql = "SELECT id FROM classes WHERE id_seq = ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, idSeq);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getString("id");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
		}

		return result;
	}

	public String getInstructorNameBySeq(int Seq) {
		String result = "";
		try {
			String sql = "SELECT lastname || ' ' || firstname as full_name FROM teacher WHERE id_seq = ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, Seq);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getString("full_name");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
		}

		return result;
	}

	public boolean checkFinishEvaluation(int classSeq, int instructorSeq, int stuId) {
		boolean result = false;
		try {
			String sql = "select * from aas_student_evaluation where class_id = ? and id_teacher = ? and id_student = ?";

			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, classSeq);
			prs.setInt(2, instructorSeq);
			prs.setInt(3, stuId);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = true;
			}

			rs.close();
			prs.close();

		} catch (SQLException ex) {
		}

		return result;
	}

	public boolean checkEvaluationTime(int classSeq) {
		boolean result = false;
		try {
			String sql = "select sysdate from evaluationperiod where class_id = ? and sysdate >= from_date and sysdate <= to_date";

			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, classSeq);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = true;
			}

			rs.close();
			prs.close();

		} catch (SQLException ex) {
		}

		return result;
	}

	public void insertAnswer(List<Answer> anwsers) {
		try {
			String sql = "insert into aas_student_evaluation (id_student, class_id, id_question, id_teacher, value, answer_date) values (?, ?, ?, ?, ?, sysdate)";

			PreparedStatement prepareStatement = conn.prepareStatement(sql);
			for (Answer each : anwsers) {
				prepareStatement.setInt(1, each.getStuSeq());
				prepareStatement.setInt(2, each.getClassSeq());
				prepareStatement.setInt(3, each.getQuesSeq());
				prepareStatement.setInt(4, each.getInstrSeq());
				prepareStatement.setInt(5, each.getAnswerValue());
				prepareStatement.addBatch();
			}
			prepareStatement.executeBatch();
			prepareStatement.close();
			conn.close();
		} catch (SQLException ex) {
			System.out.print(ex);
		}
	}

	public void insertComment(int stuId, int classId, int instrId, String comment) {
		String sql = "insert into aas_student_evaluation_comment (id_student, class_id, id_teacher, comments, comment_date) values (?, ?, ?, ?, sysdate)";
		try {
			PreparedStatement prepareStatement = conn.prepareStatement(sql);
			prepareStatement.setInt(1, stuId);
			prepareStatement.setInt(2, classId);
			prepareStatement.setInt(3, instrId);
			prepareStatement.setString(4, comment);
			prepareStatement.executeUpdate();
			prepareStatement.close();
			conn.close();
		} catch (SQLException ex) {
			System.out.print(ex);
		}
	}

	public boolean isTutor(int classSeq, int instrSeq) {
		int result = 0;
		try {
			String sql = "SELECT distinct dt.tutor FROM detail_timetable dt, timetable tt, teacher t WHERE classcode = ? AND t.id_seq = ? and dt.timetablecode=tt.id_seq and tt.id_teacher = t.id_seq";

			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, classSeq);
			prs.setInt(2, instrSeq);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("tutor");
			}

			rs.close();
			prs.close();
			conn.close();
		} catch (SQLException ex) {
		}

		return result != 0;
	}

	// public static void main(String[] args)
	// {
	// try
	// {
	// EvaluationDAO dao = new EvaluationDAO();
	// List<ClassEvaluation> list = dao.getCurrentClassOfStudentByStudentId(3183, 1,
	// 2010);
	// for (ClassEvaluation cl : list) {
	// System.out.println(cl.getClassId());
	// }
	// } catch (SQLException ex) {
	// Logger.getLogger(EvaluationDAO.class.getName()).log(Level.SEVERE, null, ex);
	// }
	// }
}