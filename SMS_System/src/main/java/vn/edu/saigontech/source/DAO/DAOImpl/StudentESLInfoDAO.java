package vn.edu.saigontech.source.DAO.DAOImpl;
//Written by Nguyen Ngoc Minh Quan
//This DAO class allow us receive information of student and show them on esl registration component.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import vn.edu.saigontech.source.Model.StudentESLInfo;
import vn.edu.saigontech.source.Model.SystemTime;

import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentESLInfoDAO implements vn.edu.saigontech.source.DAO.StudentESLInfoDAO {
	private Connection conn;
	private SystemTime currTime;

	public StudentESLInfoDAO() throws ClassNotFoundException, SQLException {
		SystemTimeDAO std = new SystemTimeDAO();
		currTime = std.getSystemTime();
	}

	@Override
	public StudentESLInfo getStudentInfoRegistrationbyID(Integer acaYear, Integer semester, Integer studentID)
			throws ClassNotFoundException, SQLException {
		PreparedStatement statement, statement1, statement2, statement3, statement4;
		StudentESLInfo currStudentInfo;
		conn = oConnection.getOracleConnection();
		try {

			String sql = "select reg.id, (ncr2unicodestring(reg.lastname) || ' '|| ncr2unicodestring(reg.firstname)) studentname, reg.catalog, "
					+ "reg.major, reg.catalog_code, reg.active, reg.is_it,after_fall2008, islevel4,reg.begin_semester_year "
					+ "from v_esl_student_info_reg reg " + "where reg.id_seq= ? ";

			statement = conn.prepareStatement(sql);
			statement.setInt(1, studentID);
			ResultSet rs = statement.executeQuery();
			rs.next();

			currStudentInfo = new StudentESLInfo();

			currStudentInfo.setStudentID(rs.getString("id"));
			currStudentInfo.setStudentName(rs.getString("studentname"));
			currStudentInfo.setCatalog(rs.getString("catalog"));
			currStudentInfo.setSpecialization(rs.getString("major"));
			currStudentInfo.setSemesterYear(getNamesemester(currTime.getSemester()) + "/" + currTime.getAcaYear());
			currStudentInfo.setIsAfterFall2008(rs.getInt("after_fall2008"));
			currStudentInfo.setIsLevel4(rs.getInt("islevel4"));

			rs.close();
			statement.close();
			sql = "select string_agg(course_type ||level_esl)  level_esl " + "from v_esl_level "
					+ "where id_student = ? ";

			statement1 = conn.prepareStatement(sql);
			statement1.setInt(1, studentID);
			ResultSet rs1 = statement1.executeQuery();
			rs1.next();
			currStudentInfo.setEslLevel(rs1.getString("level_esl"));
			rs1.close();
			statement1.close();
			sql = "select  count(distinct classcode) num_class " + "from v_aas_course_registered aas "
					+ "where aas.aca_year = ? " + "and aas.semester = ? " + "and aas.id_student = ? ";
			statement2 = conn.prepareStatement(sql);

			statement2.setInt(1, acaYear);
			statement2.setInt(2, semester);
			statement2.setInt(3, studentID);
			ResultSet rs2 = statement2.executeQuery();
			rs2.next();
			currStudentInfo.setAasRegisteredNumber(rs2.getInt("num_class"));
			rs2.close();
			statement2.close();
			sql = "with ge " + "as(select subjectcode from els_level_subject " + "union "
					+ "select subjectcode from ge_course) " + "select count(distinct classcode) num_class "
					+ "from v_esl_course_registered v, ge " + "where v.subjectcode = ge.subjectcode "
					+ "and v.aca_year= ? " + "and v.semester= ? " + "and v.id_student = ? ";
			statement3 = conn.prepareStatement(sql);
			statement3.setInt(1, acaYear);
			statement3.setInt(2, semester);
			statement3.setInt(3, studentID);
			ResultSet rs3 = statement3.executeQuery();
			rs3.next();
			currStudentInfo.setGeRegisteredNumber(rs3.getInt("num_class"));
			rs3.close();
			statement3.close();

			sql = "select s.id_student from student_toefl s where status =0 and s.id_student = ?";

			statement4 = conn.prepareStatement(sql);
			statement4.setInt(1, studentID);
			ResultSet rs4 = statement4.executeQuery();
			if (rs4.next()) {
				currStudentInfo.setIsCheatToefl(1);
			} else {
				currStudentInfo.setIsCheatToefl(0);
			}
			rs4.close();
			return currStudentInfo;

		} catch (SQLException e) {
			return null;
		} finally {
			conn.close();
		}
	}

	@Override
	public Boolean studentIsIT(int id) throws ClassNotFoundException, SQLException {
		Statement statement;
		int isITnum;
		conn = oConnection.getOracleConnection();
		try {
			statement = conn.createStatement();
			String sql = "select " + "reg.is_it " + "from v_esl_student_info_reg reg " + "where reg.id_seq=" + id;
			ResultSet rs = statement.executeQuery(sql);

			rs.next();

			isITnum = rs.getInt(1);
			rs.close();

			if (isITnum == 1)
				return true;
			else
				return false;

		} catch (SQLException e) {
			return null;
		} finally {
			conn.close();
		}
	}

	@Override
	public Integer studentSemesterbegin(int id) throws ClassNotFoundException, SQLException {
		Statement statement;
		int semesterNum;
		conn = oConnection.getOracleConnection();
		try {
			statement = conn.createStatement();
			String sql = "select " + "reg.begin_semester_year " + "from v_esl_student_info_reg reg "
					+ "where reg.id_seq=" + id;
			ResultSet rs = statement.executeQuery(sql);

			rs.next();

			semesterNum = rs.getInt(1);

			rs.close();
			return semesterNum;

		} catch (SQLException e) {
			return null;
		} finally {
			conn.close();
		}
	}

	public void addExtraStudentInfoRegistration(StudentESLInfo currStudentInfo) throws SQLException {
		Statement statement;
		String sql = "select  count(distinct classcode) num_class" + "from v_aas_course_registered aas"
				+ "where aas.aca_year = ? " + "and aas.semester = ? " + "and aas.id_student = ? ";

	}

	public String getNamesemester(int num) {
		if (num == 1)
			return "SUMMER";
		else if (num == 3)
			return "FALL";
		else
			return "SPRING";
	}

	@Override
	public String getAvaImage(int id) throws ClassNotFoundException, SQLException {
		Statement statement;
		String currAvaImage;
		conn = oConnection.getOracleConnection();
		try {

			statement = conn.createStatement();
			String sql = "select image from student where id_seq =" + id;
			ResultSet rs = statement.executeQuery(sql);

			if (rs.next())
				currAvaImage = rs.getString("image");
			else
				currAvaImage = "";
			rs.close();

			return currAvaImage;

		} catch (Exception e) {
			return null;
		} finally {
			conn.close();
		}
	}

}
