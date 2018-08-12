package vn.edu.saigontech.source.DAO;
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.AASDegreeRequest;

public interface requestAASDegreeDAO {
	public AASDegreeRequest getRequestbyStudentID(Integer studentID) throws SQLException;
	public Boolean isStudentFinishAASProgram(Integer studentID) throws SQLException;
}
