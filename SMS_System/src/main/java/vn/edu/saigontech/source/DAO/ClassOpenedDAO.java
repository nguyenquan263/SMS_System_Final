package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.ClassOpened;

public interface ClassOpenedDAO {
	public List<ClassOpened> getClassOpened(Integer acaYear,Integer semester,
			Integer studentID,Integer majorCode,Integer catalogID );
}
