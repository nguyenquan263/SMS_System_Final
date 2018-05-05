package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassRegistered;

public interface ClassRegisteredDAO {
	public List<ClassRegistered> getClassRegistered(Integer acaYear,Integer semester,Integer studentID);
}
