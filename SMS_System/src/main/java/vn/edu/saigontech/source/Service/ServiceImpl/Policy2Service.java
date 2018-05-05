package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.HCCTranscriptDAO;
import vn.edu.saigontech.source.DAO.DAOImpl.Policy2DAO;
import vn.edu.saigontech.source.Model.Policy2Model;

public class Policy2Service implements vn.edu.saigontech.source.Service.Policy2Service{
	private Policy2DAO policy2DAO;
	
	public Policy2Service() throws ClassNotFoundException, SQLException {
		policy2DAO = new Policy2DAO();
	}
	
	@Override
	public List<Policy2Model> getPolicy2Data(String semester, String acaYear, String stuId) {
		return policy2DAO.getPolicy2Data(semester, acaYear, stuId);
	}

}
