package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ClassOpenedDAO;
import vn.edu.saigontech.source.Model.ClassOpened;

public class ClassOpenedService implements vn.edu.saigontech.source.Service.ClassOpenedService {
	
	private ClassOpenedDAO classOpenedDAO;
	public ClassOpenedService() throws ClassNotFoundException, SQLException{
		classOpenedDAO= new ClassOpenedDAO();
	}
	@Override
	public List<ClassOpened> getClassOpened(Integer acaYear, Integer semester, Integer studentID, Integer majorCode,
			Integer catalogID) {
		// TODO Auto-generated method stub
		return classOpenedDAO.getClassOpened(acaYear, semester, studentID, majorCode, catalogID);
	}

}
