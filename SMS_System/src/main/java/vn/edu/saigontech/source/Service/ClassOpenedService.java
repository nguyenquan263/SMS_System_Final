package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassOpened;

public interface ClassOpenedService {
	public List<ClassOpened> getClassOpened(Integer acaYear,Integer semester,
			Integer studentID,Integer majorCode,Integer catalogID);
}
