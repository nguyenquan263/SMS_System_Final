package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.StudentProhibited;

public interface StudentProhibitedDAO {
	public List<StudentProhibited> getAllstudentProhibitedInformationbyCondition(Integer Semester, Integer acaYear, Integer stuId);
}
