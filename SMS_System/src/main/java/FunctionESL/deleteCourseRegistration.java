package FunctionESL;

//Written by Nguyen Ngoc Minh Quan
//this class store method that help us delete course for student.
import java.sql.Connection;
import java.sql.PreparedStatement;

public class deleteCourseRegistration {

	public deleteCourseRegistration() {
	}

	public void deleteSelectedCourse(Connection conn, Integer studentCode, Integer classCode, Integer semester,
			Integer academicYear, String ipAddress, String domain) {
		try {

			String sql = "delete from  assigntoclass where id_student = ? and classcode = ?";
			PreparedStatement statement = conn.prepareStatement(sql);
			statement.setInt(1, studentCode);
			statement.setInt(2, classCode);
			statement.executeUpdate();

			sql = "delete from study" + "	where id_student = ?" + "	and semester = ?" + "	and aca_year= ?"
					+ "	and subjectcode in (select subjectcode from classes where id_seq = ?)";
			PreparedStatement statement1 = conn.prepareStatement(sql);
			statement1.setInt(1, studentCode);
			statement1.setInt(2, semester);
			statement1.setInt(3, academicYear);
			statement1.setInt(4, classCode);
			statement1.executeUpdate();

			sql = "insert into log_course_registry(id,time,type,owner,ip, semester, aca_year, old_classcode, new_classcode)"
					+ " values (?, sysdate,1,?, ?, ?, ?,?, null)";
			PreparedStatement statement2 = conn.prepareStatement(sql);
			statement2.setInt(1, studentCode);
			statement2.setString(2, domain);
			statement2.setString(3, ipAddress);
			statement2.setInt(4, semester);
			statement2.setInt(5, academicYear);
			statement2.setInt(6, classCode);
			statement2.executeUpdate();
			statement.close();
			statement1.close();
			statement2.close();

		} catch (Exception e) {

			e.printStackTrace();
		}
	}

}
