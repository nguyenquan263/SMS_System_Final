package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassRegistered;

public interface ClassRegisteredService {
	public List<ClassRegistered> getClassRegistered(Integer acaYear,Integer semester,Integer studentID);
}
