package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.EnrichmentOffered;
import vn.edu.saigontech.source.Model.EnrichmentRegistered;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class EnrichmentRegistrationDAO implements vn.edu.saigontech.source.DAO.EnrichmentRegistrationDAO {
	private Connection conn;
	public EnrichmentRegistrationDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	@Override
	public List<EnrichmentRegistered> getEnrichmentRegistered(Integer acaYear, Integer semester, Integer studentID) {
		List<EnrichmentRegistered> arr= new ArrayList<>();
		
		try {			
			String sql = "select  classcode,classid,subjectid,subjectname, " + 
					"number_student_registered,number_student_class  ,sgt.courseid_prerequisite, is_disabled,class_status " + 
					"from v_sgt_course_registered sgt " + 
					"where sgt.aca_year =" + acaYear+" "+
					"and sgt.semester =" + semester+" "+
					"and sgt.id_student ="  + studentID+" "+
					"order by classid, subjectid";

			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				arr.add(new EnrichmentRegistered(rs.getInt(1),rs.getString(2),
						rs.getString(3),rs.getString(4),rs.getInt(5),
						rs.getInt(6),
						rs.getString(7),rs.getString(8),rs.getString(9)));
			}
			prs.close();
			conn.close();
			return arr;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@Override
	public List<EnrichmentOffered> getEnrichmentOffered(Integer acaYear, Integer semester, Integer studentID,
			Integer majorCode) {
		List<EnrichmentOffered> arr= new ArrayList<>();
			try {			
			String sql = "with course_pass " + 
					"as( " + 
					"select v.subjectcode " + 
					"from  v_sgt_course_pass v " + 
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
					"from v_sgt_course_open aas " + 
					"where aas.aca_year ="+acaYear+" "+
					"and aas.semester="+semester+" " + 
					"and aas.major_code="+majorCode+" " + 
					"and aas.class_status =1 " + 
					"and aas.subjectcode not in (select cp.subjectcode from course_pass cp) " + 
					"order by aas.course_code, aas.coursename";
			PreparedStatement prs = conn.prepareStatement(sql);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				arr.add(new EnrichmentOffered(rs.getInt(1), rs.getInt(2),
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

