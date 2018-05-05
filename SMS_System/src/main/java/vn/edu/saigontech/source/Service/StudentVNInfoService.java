package vn.edu.saigontech.source.Service;

import vn.edu.saigontech.source.Model.StudentVNInfo;

public interface StudentVNInfoService {
	public StudentVNInfo getStudentVNInfo(Integer studentID);
	public String getAvaImage(Integer studentID);

}
