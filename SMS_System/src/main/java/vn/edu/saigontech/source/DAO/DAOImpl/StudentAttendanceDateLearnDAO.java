package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import vn.edu.saigontech.source.Model.StudentAttendanceDateLearn;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentAttendanceDateLearnDAO implements vn.edu.saigontech.source.DAO.StudentAttendanceDateLearnDAO{
	private Connection conn;

	public StudentAttendanceDateLearnDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}

	@Override
	public List<StudentAttendanceDateLearn> getAllStudentAttendanceDateLearn(Integer Semester, Integer academicYear,
			String studentId) {
		List<StudentAttendanceDateLearn> array=new ArrayList<>();
		PreparedStatement statement;
		StudentAttendanceDateLearn currentDate;
		try {
			
			String sql =" select distinct cl.id,get_student_study(cl.id_seq,?, cl.semester, cl.aca_year) date_learn " +
					" from classes cl, assigntoclass asg " +
					" where cl.id_seq = asg.classcode " +
					  " and cl.semester =? " +
					  " and cl.aca_year =? "+
					  " and asg.id_student =? "+
					" order by cl.id ";
			statement = conn.prepareStatement(sql);
			statement.setString(1, studentId);
			statement.setInt(2, Semester);
			statement.setInt(3, academicYear);	
			statement.setString(4, studentId);
			
			ResultSet rs = statement.executeQuery();
			
			while (rs.next()) {
				currentDate = new StudentAttendanceDateLearn();
				currentDate.setID(rs.getString(1));
				currentDate.setDateLearn(rs.getString(2));
				array.add(currentDate);
			}
			rs.close();
			statement.close();
			conn.close();
			return array;
		}
		catch (Exception e) {	
			return null;
		}	
	}
	
}
