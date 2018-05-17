package vn.edu.saigontech.source.DAO;


import vn.edu.saigontech.source.Model.systemTimeForSEOI;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;

public interface seoiESLDAO {
	public systemTimeForSEOI getSystemTime() throws ClassNotFoundException, SQLException;

	public List<ESLClassInformationForSEOI> getAllESLClassForSEOI(Integer Semester, Integer acaYear, Integer studentID) throws ClassNotFoundException, SQLException;

	
}
