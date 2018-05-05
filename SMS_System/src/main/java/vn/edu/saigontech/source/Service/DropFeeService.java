package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.DropFee;

public interface DropFeeService {
	public List<DropFee> getDropFee(Integer Semester, Integer academicYear, String studentId);
}
