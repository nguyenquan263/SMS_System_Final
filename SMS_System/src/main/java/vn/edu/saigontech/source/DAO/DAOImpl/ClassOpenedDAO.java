package vn.edu.saigontech.source.DAO.DAOImpl;
/** This class is DAO which is used to get information of class opening in this semester
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

import vn.edu.saigontech.source.Model.ClassOpened;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class ClassOpenedDAO implements vn.edu.saigontech.source.DAO.ClassOpenedDAO {
	
	private Connection conn;
	public ClassOpenedDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	
	@Override
	public List<ClassOpened> getClassOpened(Integer acaYear, Integer semester, Integer studentID, Integer majorCode,
			Integer catalogID) {
		
		List<ClassOpened> arr= new ArrayList<>();
		try {	
			
			String sql = "with course_pass " + 
					"as( " + 
					"select v.subjectcode " + 
					"from v_aas_course_pass v " + 
					"where v.id_student ="+studentID+" "+ 
					"union " + 
					"select subjectcode " + 
					"from study " + 
					"where aca_year="+acaYear+" "+ 
					"and semester="+semester+" " + 
					"and id_student ="+studentID+" "+  
					") " + 
					"select distinct aas.classcode,aas.subjectcode,aas.classid, aas.course_code, aas.coursename course_name, " + 
					"aas.courseid_prerequisite,aas.number_student_class,aas.number_student_registered " + 
					"from v_aas_course_open aas " + 
					"where aas.aca_year ="+acaYear+" "+
					"and aas.semester="+semester+" " + 
					"and aas.major_code="+majorCode+" " + 
					"and aas.catalogid="+catalogID+" " +
					"and aas.class_status =1 " + 
					"and aas.subjectcode not in (select cp.subjectcode from course_pass cp) " + 
					"order by aas.course_code, aas.coursename";
			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				arr.add(new ClassOpened(rs.getInt(1), rs.getInt(2),
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
