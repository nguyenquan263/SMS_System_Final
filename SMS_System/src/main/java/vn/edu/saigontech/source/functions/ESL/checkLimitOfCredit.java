package vn.edu.saigontech.source.functions.ESL;
//Written by Nguyen Ngoc Minh Quan
//this class store method that can check student register reach limit of credit or not
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class checkLimitOfCredit {
	public checkLimitOfCredit(){};
	
	public String Check(Connection conn, Integer studentCode, String listClassCodes, Integer semester, Integer acaYear) throws SQLException {
		//get maximum credit that student can register.
		String sql = "select numofcredit from registry_credit_limit where semester =?";

		PreparedStatement pst = conn.prepareStatement(sql);
		
		pst.setInt(1, semester);
		ResultSet rs = pst.executeQuery();
		Integer creditLimit = 0;
		if (rs.next())
			creditLimit = rs.getInt("numofcredit");
		
		pst.close();
		rs.close();
		
		//-------------------------------------------------------------------------------
		//get sum of credit that student registered.
		String sql1 = "select sum(credits)credits " + 
				"from study sd, subject sb " + 
				"where sd.subjectcode = sb.id_seq " + 
				"and sd.aca_year= ? " + 
				"and sd.semester = ? " + 
				"and sd.id_student = ?";
		PreparedStatement pst1 = conn.prepareStatement(sql1);
		
		pst1.setInt(1, acaYear);
		pst1.setInt(2, semester);
		pst1.setInt(3, studentCode);
		
		ResultSet rs1 = pst1.executeQuery();
		
		Integer creditCourseRegistered = 0;
		if (rs1.next())
			creditCourseRegistered = rs1.getInt("credits");
		
		pst1.close();
		rs1.close();
		
		//------------------------------------------------------------------------------
		//get sum of credit that offer to student.
		String sql2 = "select sum(credits) credits " + 
				"from v_esl_course_open " + 
				"where aca_year = ? " + 
				"and semester = ? " + 
				"and id_student = ? " + 
				"and classcode in("+listClassCodes+")";
		PreparedStatement pst2 = conn.prepareStatement(sql2);
		
		pst2.setInt(1, acaYear);
		pst2.setInt(2, semester);
		pst2.setInt(3, studentCode);
		
		ResultSet rs2 = pst2.executeQuery();
		
		Integer creditCourseOffered = 0;
		if (rs2.next())
			creditCourseOffered = rs2.getInt("credits");
		
		pst2.close();
		rs2.close();
		
		//--------------------------------------------------------------------------------
		//check student register credit that greater than maximum or not?
		if (creditLimit < (creditCourseOffered + creditCourseRegistered)) {
			return "The total number of credits "+(creditCourseOffered + creditCourseRegistered)+" that you have registered \r\n" + 
					"exceeds the limit"+creditLimit+"! \r\n" + 
					"Please see the ESL Program Director for details.";
		} else return "";
		
		
	}

}
