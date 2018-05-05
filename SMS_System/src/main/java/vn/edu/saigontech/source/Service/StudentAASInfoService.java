package vn.edu.saigontech.source.Service;

import vn.edu.saigontech.source.Model.ESLLevel;
import vn.edu.saigontech.source.Model.StudentAASInfo;

public interface StudentAASInfoService {
	public StudentAASInfo getStudentAASInfo(Integer studentID);
	public ESLLevel getESLLevel(Integer studentID);
}
