package vn.edu.saigontech.source.Service;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.AASDegreeRequest;

public interface requestAASDegreeService {
	public AASDegreeRequest getRequestbyStudentID(Integer studentID) throws SQLException;
	public Boolean isStudentFinishAASProgram(Integer studentID) throws SQLException;
}
