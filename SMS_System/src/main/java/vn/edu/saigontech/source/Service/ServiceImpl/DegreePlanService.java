package vn.edu.saigontech.source.Service.ServiceImpl;

import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.DegreePlanDAO;
import vn.edu.saigontech.source.Model.DegreePlanAttachment;

public class DegreePlanService implements vn.edu.saigontech.source.Service.DegreePlanService {
	private DegreePlanDAO degreePlanDAO;
	
	@Override
	public List<DegreePlanAttachment> getDegreePlanAttachment(String stuId) {
		return degreePlanDAO.getDegreePlanAttachment(stuId);
	}
	
}
