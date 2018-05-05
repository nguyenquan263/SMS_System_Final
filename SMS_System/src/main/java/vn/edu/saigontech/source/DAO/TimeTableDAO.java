package vn.edu.saigontech.source.DAO;

import vn.edu.saigontech.source.Model.TimeTable;

public interface TimeTableDAO {
	public TimeTable getTimeTable(Integer Semester, Integer acaYear, String stuId,String beginDate,String endDate);
}
