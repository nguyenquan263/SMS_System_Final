package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ClassRegisteredDAO;
import vn.edu.saigontech.source.Model.ClassRegistered;

public class ClassRegisteredService implements vn.edu.saigontech.source.Service.ClassRegisteredService {
	
	private ClassRegisteredDAO classRegisteredDAO;
	
	public ClassRegisteredService() throws ClassNotFoundException, SQLException{
		classRegisteredDAO= new ClassRegisteredDAO();
	}
	@Override
	public List<ClassRegistered> getClassRegistered(Integer acaYear, Integer semester, Integer studentID) {
		// TODO Auto-generated method stub
		return classRegisteredDAO.getClassRegistered(acaYear, semester, studentID);
	}

}
