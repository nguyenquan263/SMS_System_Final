package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.EnrichmentRegistrationDAO;
import vn.edu.saigontech.source.Model.EnrichmentOffered;
import vn.edu.saigontech.source.Model.EnrichmentRegistered;


public class EnrichmentRegistrationService implements vn.edu.saigontech.source.Service.EnrichmentRegistrationService {
	private EnrichmentRegistrationDAO enrichmentRegistrationDAO;
	
	public EnrichmentRegistrationService() throws ClassNotFoundException, SQLException{
		enrichmentRegistrationDAO= new EnrichmentRegistrationDAO();
	}
	
	@Override
	public List<EnrichmentRegistered> getEnrichmentRegistered(Integer acaYear, Integer semester, Integer studentID) {
		// TODO Auto-generated method stub
		return enrichmentRegistrationDAO.getEnrichmentRegistered(acaYear, semester, studentID);
	}

	@Override
	public List<EnrichmentOffered> getEnrichmentOffered(Integer acaYear, Integer semester, Integer studentID,
			Integer majorCode) {
		// TODO Auto-generated method stub
		return enrichmentRegistrationDAO.getEnrichmentOffered(acaYear, semester, studentID, majorCode);
	}
	
}
