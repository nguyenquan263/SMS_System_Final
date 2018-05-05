package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;



import vn.edu.saigontech.source.Model.StudentAttendanceAAS;
import vn.edu.saigontech.source.Model.StudentAttendanceAASDetail;
import vn.edu.saigontech.source.dbConnection.oConnection;
//Written by Dang Quoc Thanh Phong
public class StudentAttendanceAASDAO implements vn.edu.saigontech.source.DAO.StudentAttendanceAASDAO{
	private Connection conn;
	
	public StudentAttendanceAASDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	
	}
	//Method call two diffent sql to get student addtendance in aas class 
	@Override
	public List<StudentAttendanceAAS> getAllStudentAttendanceAAS(Integer Semester, Integer academicYear,String studentId) {
		List<StudentAttendanceAAS> array=new ArrayList<>();
		PreparedStatement statement,subStatement;
		StudentAttendanceAAS currentSubject;
		StudentAttendanceAASDetail currentSubjectDetail;
		try {
			
			String sql= " select classcode, subjectcode, sub_subjectcode, hours_absent, hours_study, percent_absent " +
					" from v_class_absent " +  
					" where id_student =? "+
					" and semester =? " +
					" and aca_year =? " +
					" order by classid ";
//			This sql help to get classcode, study hour and absent hour, percent
			statement = conn.prepareStatement(sql);
			statement.setString(1, studentId);
			statement.setInt(2, Semester);
			statement.setInt(3, academicYear);	
			ResultSet rs = statement.executeQuery();
			while (rs.next()) {
				currentSubject=new StudentAttendanceAAS();
				currentSubject.setClassCode(rs.getString(1));
				currentSubject.setSubjectCode(rs.getString(2));
				currentSubject.setSubjectCode(rs.getString(3));
				currentSubject.setHoursAbsent(rs.getDouble(4));
				currentSubject.setHoursStudy(rs.getDouble(5));
				currentSubject.setPercentAbsent(rs.getDouble(6));
					try {
						
						String sqlSub =" select v.classid, sb.name, to_char(v.datein,'dd/mm/yyyy') datein, ncr2unicodestring(reason),hours " +
								" from v_class_absent_detail v, subject sb " +
								" where v.subjectcode = sb.id_seq " +
								  " and v.id_student =? "+
								  " and v.semester = ? "+
								  " and v.aca_year = ? "+
								  " and v.classcode =? "+  
								"  order by v.datein ";
//						This sql focus detail of each day attendance
						subStatement=conn.prepareStatement(sqlSub);
						subStatement.setString(1, studentId);
						subStatement.setInt(2, Semester);
						subStatement.setInt(3, academicYear);
						subStatement.setString(4, currentSubject.getClassCode());
			
						ResultSet subRs = subStatement.executeQuery();
						
						while (subRs.next()) {
							 currentSubjectDetail=new StudentAttendanceAASDetail();
							 currentSubjectDetail.setClassID(subRs.getString(1));
							 currentSubjectDetail.setName(subRs.getString(2));
							 currentSubjectDetail.setDateIn(subRs.getString(3));
							 currentSubjectDetail.setReason(subRs.getString(4));
							 currentSubjectDetail.setHours(subRs.getDouble(5));
							 currentSubject.addDetail(currentSubjectDetail);	
						}
						subRs.close();
						subStatement.close();
					}
				catch (Exception e) {	
					e.printStackTrace();
				}
				array.add(currentSubject);					
			}
		
			return array;
		}
		catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
