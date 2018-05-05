package vn.edu.saigontech.source.Service;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.ClassInformation;

public interface ClassInformationService {
	
	public List<ClassInformation> getAllclassInformationbyCondition(Integer Semester, Integer acaYear, Integer Type);
	public List<ClassInformation> getAllclassInformation(Integer Semester, Integer acaYear);

}
