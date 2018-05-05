package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.SpecializationActivedDAO;
import vn.edu.saigontech.source.Model.SpecializationActived;

public class SpecializationActivedService implements vn.edu.saigontech.source.Service.SpecializationActivedService {
	private SpecializationActivedDAO specializationActivedDAO;
	
	public SpecializationActivedService() throws ClassNotFoundException, SQLException {
		specializationActivedDAO = new SpecializationActivedDAO();
	}

	@Override
	public List<SpecializationActived> getSpecializationActived() {
		// TODO Auto-generated method stub
		return specializationActivedDAO.getSpecializationActived();
	}
}
