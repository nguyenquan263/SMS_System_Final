package vn.edu.saigontech.source.Service;

import java.sql.SQLException;

import vn.edu.saigontech.source.Model.TimetableForRegis;

public interface TimetableForRegisService {
	public TimetableForRegis getTimetable(String classCode, String acaYear, String semester)  throws ClassNotFoundException, SQLException;

}
