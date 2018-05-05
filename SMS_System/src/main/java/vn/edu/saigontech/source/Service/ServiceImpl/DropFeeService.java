package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.DropFeeDAO;
import vn.edu.saigontech.source.Model.DropFee;
//Written by Dang Quoc Thanh Phong
public class DropFeeService implements vn.edu.saigontech.source.Service.DropFeeService {
	private DropFeeDAO dropFeeDAO;
	
	public DropFeeService() throws ClassNotFoundException, SQLException {
		dropFeeDAO=new DropFeeDAO();
	}
//Call to DAO to get data
	
	@Override
	public List<DropFee> getDropFee(Integer Semester, Integer academicYear, String studentId) {
		// TODO Auto-generated method stub
		return dropFeeDAO.getTuitionFee(Semester, academicYear, studentId);
	}
}
