package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;



import vn.edu.saigontech.source.Model.CourseEnrolled;

import vn.edu.saigontech.source.dbConnection.oConnection;
//Written by Dang Quoc Thanh Phong
public class courseEnrolledDAO implements vn.edu.saigontech.source.DAO.CourseEnrolledDAO {
	private Connection conn;

	public courseEnrolledDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
 //method to get all enrolled course
	@Override
	public List<CourseEnrolled> getCourseEnrolledList(Integer Semester, Integer academicYear, String studentId) {
		List<CourseEnrolled> array = new ArrayList<>();
		PreparedStatement statement;
		try {
		
			String sql = " select sb.id||' '||sb.num_code , sb.name, sb.credits " +
					 " from subject sb, study st " +
					 " where st.subjectcode = sb.id_seq and " +
					 " st.id_student =? and st.aca_year =? and st.semester =? " +
					 " order by sb.id";
			
			statement = conn.prepareStatement(sql);
			statement.setString(1, studentId);
			statement.setInt(2, academicYear);	
			statement.setInt(3, Semester);
			
			ResultSet rs = statement.executeQuery();
			CourseEnrolled currentCourse;
			
			while (rs.next()) {
				currentCourse = new CourseEnrolled();
				currentCourse.setCourse(rs.getString(1));
				currentCourse.setCourseName(rs.getString(2));
				currentCourse.setCredit(rs.getInt(3));
				array.add(currentCourse);
			}
			conn.close();
			statement.close();
			rs.close();
			return array;
		} catch (Exception e) {
			return null;
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
