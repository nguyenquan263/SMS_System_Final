package vn.edu.saigontech.source.Function;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class InfrastructureHCCSFee {
	public double[] getInfrastructure_Hccs_Fee(Connection conn, String studentcode, String aca, String semester){
		double infrastructurefee = 0;
		double hccsfee =0;
		try{						
			String sql= "" +
				" select infrastructurefee, hccsfee " +
				" from v_infrastructure_hccs_fee " +
				" where studentid = ? " +		
				  " and tuitionyear = ? "+
				  " and semester = ? ";
			PreparedStatement prs = conn.prepareStatement(sql);		
			prs.setString(1, studentcode);
			prs.setString(2, aca);
			prs.setString(3, semester);
			ResultSet rs = prs.executeQuery();
			if(rs.next()){
				infrastructurefee= rs.getDouble("infrastructurefee");
				hccsfee= rs.getDouble("hccsfee");
			}
			rs.close();
			prs.close();  				
		}catch(SQLException ex){
		}
		return new double[] {infrastructurefee, hccsfee};
	}
}
