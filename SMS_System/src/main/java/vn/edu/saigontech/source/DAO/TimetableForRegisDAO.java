package vn.edu.saigontech.source.DAO;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.TimetableForRegis;

public interface TimetableForRegisDAO {
	
	public TimetableForRegis getTimetable(String classCode, String acaYear, String semester)  throws ClassNotFoundException, SQLException;

}
