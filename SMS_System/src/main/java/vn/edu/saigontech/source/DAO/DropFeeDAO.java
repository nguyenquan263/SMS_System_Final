package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.DropFee;

public interface DropFeeDAO {
	public List<DropFee> getTuitionFee(Integer Semester, Integer acaYear, String stuId);
}
