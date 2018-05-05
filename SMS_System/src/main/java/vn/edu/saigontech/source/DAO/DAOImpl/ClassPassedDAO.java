package vn.edu.saigontech.source.DAO.DAOImpl;
/** This class is DAO which is used to get information of class passed in the pass
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.ClassPassed;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class ClassPassedDAO implements vn.edu.saigontech.source.DAO.ClassPassedDAO {
	
	private Connection conn;
	public ClassPassedDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	@Override
	public List<ClassPassed> getClassPassed(Integer acaYear, Integer semester, Integer studentID, Integer catalogID) {
		
		List<ClassPassed> arr= new ArrayList<>();
		try {	
			String sql = "with course_pass " + 
					"as(   " + 
					"select subjectcode  " + 
					" from study " + 
					"where aca_year="+acaYear+" " + 
					"and semester="+semester+" " + 
					"and id_student ="+studentID+" " + 
					") " + 
					"select distinct classcode,subjectcode,classid,course_code,coursename,courseid_prerequisite, " + 
					"number_student_class, number_student_registered " + 
					"from v_aas_course_pass_registration " + 
					"where aca_year ="+acaYear+" " + 
					"and semester ="+semester+" " + 
					"and id_student="+studentID+" " +  
					"and catalogid="+catalogID+" " +  
					"and  class_status=1 " + 
					"and subjectcode not in (select course_pass.subjectcode from course_pass) " + 
					"order by classid,course_code";

			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				arr.add(new ClassPassed(rs.getInt(1), rs.getInt(2),
						rs.getString(3), rs.getString(4),
						rs.getString(5), rs.getString(6),
						rs.getInt(7), rs.getInt(8)));
			}
			prs.close();
			conn.close();
			return arr;
		} catch (Exception e) {
			return null;
		}
	}

}
