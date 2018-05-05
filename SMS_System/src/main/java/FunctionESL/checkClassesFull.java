package FunctionESL;
//Written by Nguyen Ngoc Minh Quan
//This class use for checking a class that has full of student or not.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class checkClassesFull {
	
	public checkClassesFull() {}
	
	public String Check(Connection conn, String listClassCodes) throws SQLException {
		String sql = "select string_agg(distinct classid) classfull " + 
				"from v_esl_course_registered " + 
				"where classcode in("+listClassCodes+") " + 
				"and number_student_registered >= number_student_class";
		
		PreparedStatement pst = conn.prepareStatement(sql);
		
		ResultSet rs = pst.executeQuery();
		String result = "";
		if (rs.next())
			result = rs.getString("classfull");
		
		pst.close();
		rs.close();
		
		if (result == null) return "";
		else return  "Class "+result+" is full. You cannot register this class.<br> Please select another class!";
	}

}
