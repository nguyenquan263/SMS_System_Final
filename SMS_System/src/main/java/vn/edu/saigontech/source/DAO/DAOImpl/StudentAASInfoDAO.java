package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.ESLLevel;
import vn.edu.saigontech.source.Model.StudentAASInfo;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentAASInfoDAO implements vn.edu.saigontech.source.DAO.StudentAASInfoDAO {
	private Connection conn;

	public StudentAASInfoDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}

	@Override
	public StudentAASInfo getStudentAASInfo(Integer studentID) {
		try {
			
			String sql = "select id, (ncr2unicodestring(lastname) || ' ' || ncr2unicodestring(firstname)) studentname, specialization , catalog_year ,\r\n" + 
					"catalog_code,  nvl(istoefl,0) istoefl, nvl(islevel3,0) islevel3 , active,ispass6aascourse\r\n" + 
					"from v_student_info_reg\r\n" + 
					"where id_seq="+studentID;
	
			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			StudentAASInfo currStudent= new StudentAASInfo();
			while (rs.next()) {
				currStudent.setStudentID(rs.getString(1));
				currStudent.setStudentName(rs.getString(2));
				currStudent.setSpecialization(rs.getString(3));
				currStudent.setCatalogYear(rs.getString(4));
				currStudent.setCatalogCode(rs.getInt(5));
				currStudent.setIsToefl(rs.getInt(6));
				currStudent.setIsLevel3(rs.getInt(7));
				currStudent.setActive(rs.getInt(8));
				currStudent.setIsPass6AasCourse(rs.getInt(9));
			}
			prs.close();
			conn.close();
			return currStudent;
		}
		catch (Exception e) {
			return null;
		}
	}

	@Override
	public ESLLevel getESLLevel(Integer studentID) {
		try {
			
			String sql = "select string_agg(course_type ||level_esl)  level_esl " + 
					"from v_esl_level " + 
					"where id_student  = ? ";
	
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, studentID);
			ResultSet rs = prs.executeQuery();
			ESLLevel eslLevel= new ESLLevel();
			while (rs.next()) {
				eslLevel.setEslLevel(rs.getString("level_esl"));
			}
			prs.close();
			conn.close();
			return eslLevel;
		}
		catch (Exception e) {
			return null;
		}
	}
}
