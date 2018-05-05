package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.AcademicYear;
import vn.edu.saigontech.source.Model.SystemDateAndTime;
import vn.edu.saigontech.source.Model.SystemTime;

public interface SystemTimeService {
	public SystemTime getSystemTime();
	public List<AcademicYear> getAcaYear();
	public SystemDateAndTime getSystemDateAndTime(String format);
}
