package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.DegreePlanAttachment;

public interface DegreePlanDAO {
	public List<DegreePlanAttachment> getDegreePlanAttachment(String stuId);
}
