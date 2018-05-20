package vn.edu.saigontech.source.Service.ServiceImpl;


import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.seoiESLDAO;
import vn.edu.saigontech.source.Model.ESLClassInformationForSEOI;
import vn.edu.saigontech.source.Model.ESLSEOIQuestion;
import vn.edu.saigontech.source.Model.systemTimeForSEOI;

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

}
