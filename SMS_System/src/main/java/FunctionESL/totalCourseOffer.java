package FunctionESL;
//Written by Nguyen Ngoc Minh Quan
//this class store method that get total course offer for student in semester.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class totalCourseOffer {
	public totalCourseOffer() {};
	
	public Integer getTotalCourseOffer(Connection conn, Integer studentCode, Integer semester, Integer acaYear, Boolean isIT) throws SQLException {
		String sql = "select count(distinct v.subjectcode)	total " + 
				"from v_esl_course_open v " + 
				"where v.aca_year = ? " + 
				"and v.semester = ? " + 
				"and v.id_student = ? " + 
				"and v.number_student_class >0 " + 
				"and v.class_status =1";
		
		if (isIT) {
			sql += "and v.specialization_required in (0,2)";
		} else sql += "and v.specialization_required in (0,1)";
		
		PreparedStatement pst = conn.prepareStatement(sql);
		
		pst.setInt(1, acaYear);
		pst.setInt(2, semester);
		pst.setInt(3, studentCode);
		
		ResultSet rs = pst.executeQuery();
		
		Integer total = 0;
		
		if (rs.next()) {
			total = rs.getInt("total");
		}

		rs.close();
		pst.close();
		
		return total;
		
		
		
		
		
	}

}
