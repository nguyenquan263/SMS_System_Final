package vn.edu.saigontech.source.Service;

import vn.edu.saigontech.source.Model.systemTimeForSEOI;
import vn.edu.saigontech.source.Model.teacherInformationForESLSEOI;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;

public interface seoiESLService {
	public systemTimeForSEOI getSystemTime() throws ClassNotFoundException, SQLException;

	public List<ESLClassInformationForSEOI> getAllESLClassForSEOI(Integer Semester, Integer acaYear, Integer studentID)
			throws ClassNotFoundException, SQLException;

	public List<ESLSEOIQuestion> getAllQuestionSEOI(Integer Semester, Integer acaYear, Integer type)
			throws ClassNotFoundException, SQLException;

	public teacherInformationForESLSEOI getTeacherInformationByClassID(Integer classID, Integer teacherID)
			throws ClassNotFoundException, SQLException;

	public String addPoints(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String questionID, String pointList) throws ClassNotFoundException, SQLException;

	public String addComment(String studentID, String Semester, String acaYear, String classID, String instructorID,
			String comment) throws ClassNotFoundException, SQLException;
}
