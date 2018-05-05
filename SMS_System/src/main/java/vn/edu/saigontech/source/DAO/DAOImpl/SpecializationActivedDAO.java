package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.SpecializationActived;
import vn.edu.saigontech.source.Model.StudentInformation;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class SpecializationActivedDAO implements vn.edu.saigontech.source.DAO.SpecializationActivedDAO {
	private Connection conn;
	public SpecializationActivedDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	
	@Override
	public List<SpecializationActived> getSpecializationActived() {
		List<SpecializationActived> arr= new ArrayList<>();
		try {	
			Statement statement = conn.createStatement();
			String sql = "select id_seq, name, (free_credits + force_credits ) credits " 
					+"from major "
					+"where active= 1 "
					+"order by name";

			ResultSet rs = statement.executeQuery(sql);
//			SpecializationActived specActived = new SpecializationActived();
			while (rs.next()) {
//				specActived.setID(rs.getInt(1));
//				specActived.setSpecializationName(rs.getString(2));
//				specActived.setCredit(rs.getInt(3));
				arr.add(new SpecializationActived(rs.getInt(1),rs.getString(2),rs.getInt(3)));
			}
			return arr;
		} catch (Exception e) {
			return null;
		}
	};
}
