package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassPassed;

public interface ClassPassedDAO {
	public List<ClassPassed> getClassPassed(Integer acaYear,Integer semester,
			Integer studentID,Integer catalogID);
}
