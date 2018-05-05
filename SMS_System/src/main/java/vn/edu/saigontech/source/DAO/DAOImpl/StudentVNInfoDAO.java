package vn.edu.saigontech.source.DAO.DAOImpl;

//DAO class to get student information for showing on VN registation.
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import vn.edu.saigontech.source.Model.SystemTime;
import vn.edu.saigontech.source.Model.StudentVNInfo;

import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentVNInfoDAO implements vn.edu.saigontech.source.DAO.StudentVNInfoDAO {
	private Connection conn;
	private SystemTime currTime;

	public StudentVNInfoDAO() throws ClassNotFoundException, SQLException {

		SystemTimeDAO std = new SystemTimeDAO();
		currTime = std.getSystemTime();
	}

	@Override
	public StudentVNInfo getStudentInfoRegistrationbyID(int id) throws ClassNotFoundException, SQLException {
		Statement statement;
		StudentVNInfo currStudentInfo;
		conn = oConnection.getOracleConnection();
		try {

			statement = conn.createStatement();
			String sql = "select reg.id, (ncr2unicodestring(reg.lastname) || ' '|| ncr2unicodestring(reg.firstname)) studentname, reg.catalog, "
					+ "reg.major, reg.catalog_code, reg.active, reg.is_it,after_fall2008, islevel4,reg.begin_semester_year "
					+ "from v_esl_student_info_reg reg " + "where reg.id_seq=" + id;
			ResultSet rs = statement.executeQuery(sql);

			rs.next();

			currStudentInfo = new StudentVNInfo(rs.getString(1), rs.getString(2), rs.getString(3), rs.getString(4),
					getNamesemester(currTime.getSemester()) + "/" + currTime.getAcaYear(), "");
			rs.close();
			sql = "select string_agg(course_type ||level_esl)  level_esl " + "from v_esl_level " + "where id_student  ="
					+ id;
			ResultSet rs1 = statement.executeQuery(sql);
			rs1.next();
			currStudentInfo.setEslLevel(rs1.getString(1));
			rs1.close();
			return currStudentInfo;

		} catch (Exception e) {
			return null;
		} finally {
			conn.close();
		}
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

	public String getNamesemester(int num) {
		if (num == 1)
			return "SUMMER";
		else if (num == 3)
			return "FALL";
		else
			return "SPRING";
	}

}
