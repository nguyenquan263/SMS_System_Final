package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.courseEnrolledDAO;
import vn.edu.saigontech.source.Model.CourseEnrolled;
//Written by Dang Quoc Thanh Phong
public class CourseEnrolledService implements vn.edu.saigontech.source.Service.CourseEnrolledService {
	private courseEnrolledDAO courseEnrolledDAO;
	
	public CourseEnrolledService() throws ClassNotFoundException, SQLException {		
		 courseEnrolledDAO=new courseEnrolledDAO();
	}
	//Call to DAO to get data
	@Override
	public List<CourseEnrolled> getCourseEnrolledList(Integer Semester, Integer academicYear, String studentId) {	
		return courseEnrolledDAO.getCourseEnrolledList(Semester, academicYear, studentId);
	}

}
