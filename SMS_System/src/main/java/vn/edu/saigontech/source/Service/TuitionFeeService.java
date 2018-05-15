package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.TuitionFee;

public interface TuitionFeeService {
	public List<TuitionFee> getTuitionFee(Integer Semester, Integer academicYear,  Integer studentId);
	
}
