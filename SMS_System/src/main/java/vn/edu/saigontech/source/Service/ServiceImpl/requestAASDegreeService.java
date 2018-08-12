package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.requestAASDegreeDAO;
import vn.edu.saigontech.source.Model.AASDegreeRequest;

public class requestAASDegreeService implements vn.edu.saigontech.source.Service.requestAASDegreeService{
	
	private requestAASDegreeDAO reqDAO;
	
	

	public requestAASDegreeService() {
		reqDAO = new requestAASDegreeDAO();
	}

	@Override
	public AASDegreeRequest getRequestbyStudentID(Integer studentID) throws SQLException {
		// TODO Auto-generated method stub
		
		return reqDAO.getRequestbyStudentID(studentID);
	}

	@Override
	public Boolean isStudentFinishAASProgram(Integer studentID) throws SQLException {
		// TODO Auto-generated method stub
		return reqDAO.isStudentFinishAASProgram(studentID);
	}

}
