package vn.edu.saigontech.source.DAO;
//Written by Nguyen Ngoc Minh Quan.
//This interface will be implemented by DAO class that get information of student which is showed on registration component.
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.StudentVNInfo;

public interface StudentVNInfoDAO {
	public StudentVNInfo getStudentInfoRegistrationbyID(int id)  throws ClassNotFoundException, SQLException;
	public String getAvaImage(int id) throws ClassNotFoundException, SQLException;
}
