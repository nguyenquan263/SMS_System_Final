package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.Policy2Model;

public interface Policy2DAO
{
	public List<Policy2Model> getPolicy2Data(String semester,String acaYear, String stuId); 
}
