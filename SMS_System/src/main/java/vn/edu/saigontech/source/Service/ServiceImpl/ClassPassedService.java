package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ClassPassedDAO;
import vn.edu.saigontech.source.Model.ClassPassed;

public class ClassPassedService implements vn.edu.saigontech.source.Service.ClassPassedService {
	
	private ClassPassedDAO classPassedDAO;
	
	public ClassPassedService() throws ClassNotFoundException, SQLException{
		classPassedDAO= new ClassPassedDAO();
	}
	@Override
	public List<ClassPassed> getClassPassed(Integer acaYear, Integer semester, Integer studentID, Integer catalogID) {
		// TODO Auto-generated method stub
		return classPassedDAO.getClassPassed(acaYear, semester, studentID, catalogID);
	}

}
