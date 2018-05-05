package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassInformation;
import vn.edu.saigontech.source.Model.StudentProhibited;

public interface StudentProhibitedService {
	public List<StudentProhibited> getAllstudentProhibitedInformationbyCondition(Integer Semester, Integer acaYear, Integer stuId);
}
