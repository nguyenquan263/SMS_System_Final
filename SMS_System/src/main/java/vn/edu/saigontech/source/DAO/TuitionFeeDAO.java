package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.TuitionFee;

public interface TuitionFeeDAO {
	public List<TuitionFee> getTuitionFee(Integer Semester, Integer acaYear,  Integer stuId);
}
