package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.Policy2Model;

public interface Policy2Service {
	List<Policy2Model> getPolicy2Data(String semester, String acaYear, String stuId);
}
