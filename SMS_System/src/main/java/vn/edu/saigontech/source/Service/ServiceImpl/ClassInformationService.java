package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.ClassInformationDAO;
import vn.edu.saigontech.source.Model.ClassInformation;

public class ClassInformationService implements vn.edu.saigontech.source.Service.ClassInformationService {
	
	private ClassInformationDAO classInformationDAO ;
	public ClassInformationService() throws ClassNotFoundException, SQLException {
		classInformationDAO = new ClassInformationDAO();

	}
	@Override
	public List<ClassInformation> getAllclassInformationbyCondition(Integer Semester, Integer acaYear, Integer Type){
		return classInformationDAO.getAllclassInformationbyCondition(Semester, acaYear, Type);
	}
	@Override
	public List<ClassInformation> getAllclassInformation(Integer Semester, Integer acaYear) {
		return classInformationDAO.getAllclassInformation(Semester, acaYear);
	}

}
