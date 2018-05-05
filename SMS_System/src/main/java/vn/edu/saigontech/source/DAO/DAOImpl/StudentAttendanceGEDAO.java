package vn.edu.saigontech.source.DAO.DAOImpl;
//Written by Dang Quoc Thanh Phong
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.StudentAttendanceGE;
import vn.edu.saigontech.source.Model.StudentAttendanceGEDetail;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentAttendanceGEDAO implements vn.edu.saigontech.source.DAO.StudentAttendanceGEDAO{
	private Connection conn;
	
	public StudentAttendanceGEDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();

	}
	private Double absentHour;
	//Method call two diffent sql to get student addtendance in ge class
	@Override
	public List<StudentAttendanceGE> getAllStudentAttendanceGE(Integer Semester, Integer academicYear,String studentId) {
		
		List<StudentAttendanceGE> array=new ArrayList<>();
		DecimalFormat formatNumber = new DecimalFormat("####0.00");
		PreparedStatement statement,subStatement;
		StudentAttendanceGE currentSubject;
		StudentAttendanceGEDetail currentSubjectDetail;
		try {
//			This sql help to get classcode, study hour and absent hour, percent
			String sql=" select v.classcode, v.classid,sub.name , hours_study " +
					" from v_ge_absent v, sub_subject sub " + 
					" where v.sub_subjectcode = sub.id_seq " +
					  " and id_student =?  " +
					  " and semester =?  " +
					  " and aca_year =?  " +
					" order by v.classid";
			
			statement = conn.prepareStatement(sql);
			statement.setString(1, studentId);
			statement.setInt(2, Semester);
			statement.setInt(3, academicYear);	
			ResultSet rs = statement.executeQuery();
	
			while (rs.next()) {
				absentHour= 0.0;
				currentSubject=new StudentAttendanceGE();
				currentSubject.setClassCode(rs.getString(1));
				currentSubject.setClassID(rs.getString(2));
				currentSubject.setName(rs.getString(3));
				currentSubject.setStudyHours(rs.getDouble(4));
					try {
//						This sql focus detail of each day attendance
						String sqlSub =" select hours, to_char(datein,'dd/mm/yyyy')datein,ncr2unicodestring(reason) " +
								" from v_class_absent_detail v " +
								" where v.id_student =?"+
								  " and v.semester =? "+
								  " and v.aca_year =? "+
								  " and v.classcode =? "+					  
								" order by v.datein";	
						subStatement=conn.prepareStatement(sqlSub);
						subStatement.setString(1, studentId);
						subStatement.setInt(2, Semester);
						subStatement.setInt(3, academicYear);
						subStatement.setString(4, currentSubject.getClassCode());
						ResultSet subRs = subStatement.executeQuery();
						while (subRs.next()) {
							 currentSubjectDetail=new StudentAttendanceGEDetail();
							 absentHour+=subRs.getDouble(1);
							 currentSubjectDetail.setHour(subRs.getDouble(1));
							 currentSubjectDetail.setDateIn(subRs.getString(2));
							 currentSubjectDetail.setReason(subRs.getString(3));
							 currentSubject.addDetail(currentSubjectDetail);
						}
						subRs.close();
						subStatement.close();
					}
					catch (Exception e) {
						return null;
					}
				currentSubject.setAbsentHours(absentHour);
				Double percent=Double.parseDouble(formatNumber.format((absentHour*100/currentSubject.getStudyHours())));
				currentSubject.setPercentAbsent(percent);	
				array.add(currentSubject);
			}
			statement.close();
			rs.close();
			conn.close();
			return array;
		}
		catch (Exception e) {
			return null;
		}
	}

}
