package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.DegreePlanAttachment;

public interface DegreePlanService {
	List<DegreePlanAttachment> getDegreePlanAttachment(String stuId);
}
