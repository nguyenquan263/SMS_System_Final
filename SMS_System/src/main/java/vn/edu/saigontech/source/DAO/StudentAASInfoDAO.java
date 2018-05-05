package vn.edu.saigontech.source.DAO;

import vn.edu.saigontech.source.Model.ESLLevel;
import vn.edu.saigontech.source.Model.StudentAASInfo;

public interface StudentAASInfoDAO {
	public StudentAASInfo getStudentAASInfo(Integer studentID);
	public ESLLevel getESLLevel(Integer studentID);
}
