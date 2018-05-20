package vn.edu.saigontech.source.Service;


import vn.edu.saigontech.source.Model.systemTimeForSEOI;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;

public interface seoiESLService {
	public systemTimeForSEOI getSystemTime() throws ClassNotFoundException, SQLException;

	public List<ESLClassInformationForSEOI> getAllESLClassForSEOI(Integer Semester, Integer acaYear, Integer studentID) throws ClassNotFoundException, SQLException;

	public List<ESLSEOIQuestion> getAllQuestionSEOI(Integer Semester, Integer acaYear, Integer type) throws ClassNotFoundException, SQLException;
}
