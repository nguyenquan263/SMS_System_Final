package vn.edu.saigontech.source.Service;

import vn.edu.saigontech.source.Model.TimeTable;

public interface  TimeTableService {
	public TimeTable getTimeTable(Integer Semester, Integer academicYear, String studentId,String beginDate,String endDate);
}
