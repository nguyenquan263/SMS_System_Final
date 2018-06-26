package vn.edu.saigontech.source.Service.ServiceImpl;


import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.seoiESLDAO;
import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;
import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.Model.teacherInformationForESLSEOI;

public class seoiESLService implements vn.edu.saigontech.source.Service.seoiESLService {
	private seoiESLDAO sed;
	public seoiESLService() {
		sed = new seoiESLDAO();
	}

	@Override
	public systemTimeForSEOI getSystemTime() throws ClassNotFoundException, SQLException {
		
		return sed.getSystemTime();
	}

	@Override
	public List<ESLClassInformationForSEOI> getAllESLClassForSEOI(Integer Semester, Integer acaYear, Integer studentID)
			throws ClassNotFoundException, SQLException {
		return sed.getAllESLClassForSEOI(Semester, acaYear, studentID);
	}

	@Override
	public List<ESLSEOIQuestion> getAllQuestionSEOI(Integer Semester, Integer acaYear, Integer type)
			throws ClassNotFoundException, SQLException {
		return sed.getAllQuestionSEOI(Semester, acaYear, type);
	}

	@Override
	public teacherInformationForESLSEOI getTeacherInformationByClassID(Integer classID, Integer teacherID)
			throws ClassNotFoundException, SQLException {
		// TODO Auto-generated method stub
		return sed.getTeacherInformationByClassID(classID, teacherID);
	}

	@Override
	public String addPoints(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String questionID, String pointList) throws ClassNotFoundException, SQLException {
		return sed.addPoints(studentID, Semester, acaYear, classID, instructorID, questionID, pointList);
	}

	@Override
	public String addComment(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String comment) throws ClassNotFoundException, SQLException {
		return sed.addComment(studentID, Semester, acaYear, classID, instructorID, comment);
	}

}
