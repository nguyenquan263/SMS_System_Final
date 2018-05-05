package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassPassed;

public interface ClassPassedService {
	public List<ClassPassed> getClassPassed(Integer acaYear, Integer semester, Integer studentID, Integer catalogID);
}
