package vn.edu.saigontech.source.DAO.DAOImpl;
/** This class is DAO which is used to get information of class registered in this semester
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

import vn.edu.saigontech.source.Model.ClassRegistered;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class ClassRegisteredDAO implements vn.edu.saigontech.source.DAO.ClassRegisteredDAO{
	private Connection conn;
	public ClassRegisteredDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	@Override
	public List<ClassRegistered> getClassRegistered(Integer acaYear,Integer semester,Integer studentID) {
		
		List<ClassRegistered> arr= new ArrayList<>();
		
		try {			
			String sql = "select  classcode,classid,subjectid,subjectname, " + 
					"number_student_registered,number_student_class,aas.courseid_prerequisite, is_disabled,class_status " + 
					"from v_aas_course_registered aas " + 
					"where aas.aca_year ="+acaYear+" "+ 
					"and aas.semester ="+semester+" " + 
					"and aas.id_student ="+studentID+" "+ 
					"order by classid, subjectid";

			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				arr.add(new ClassRegistered(rs.getInt(1),rs.getString(2),
						rs.getString(3),rs.getString(4),rs.getInt(5),rs.getInt(6),
						rs.getString(7),rs.getString(8),rs.getInt(9)));
			}
			prs.close();
			conn.close();
			return arr;
		} catch (Exception e) {
			return null;
		}
	}
	
}
