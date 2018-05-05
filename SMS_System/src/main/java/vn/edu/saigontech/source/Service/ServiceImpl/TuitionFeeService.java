package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.TuitionFeeDAO;
import vn.edu.saigontech.source.Model.TuitionFee;
//Written by Dang Quoc Thanh Phong
public class TuitionFeeService implements vn.edu.saigontech.source.Service.TuitionFeeService {
	private TuitionFeeDAO tuitionFeeDAO;
	
	public TuitionFeeService() throws ClassNotFoundException, SQLException {
		tuitionFeeDAO=new TuitionFeeDAO();
	}
	//Call to DAO to get data
	@Override
	public List<TuitionFee> getTuitionFee(Integer Semester, Integer academicYear,  Integer studentId) {
		// TODO Auto-generated method stub
		return tuitionFeeDAO.getTuitionFee(Semester, academicYear, studentId);
	}

}
