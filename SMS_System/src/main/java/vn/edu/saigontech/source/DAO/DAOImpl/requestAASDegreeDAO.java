package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.AASDegreeRequest;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class requestAASDegreeDAO implements vn.edu.saigontech.source.DAO.requestAASDegreeDAO {

	private Connection conn;
	private AASDegreeRequest Request;

	@Override
	public AASDegreeRequest getRequestbyStudentID(Integer studentID) throws SQLException {
		conn = oConnection.getOracleConnection();

		try {
			Request = new AASDegreeRequest();

			String sql = "select * from requestAASDegree where id_student = ?";

			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, studentID);

			ResultSet rs = pst.executeQuery();
			Boolean ok = false;

			while (rs.next()) {
				ok = true;
				Request.setID(rs.getInt("id_seq"));
				Request.setStudentID(rs.getInt("id_student"));
				Request.setStatus(rs.getInt("status"));
				Request.setOfficerComment(rs.getString("officercomment"));
			}
			
			if (ok) {
				return Request;
			} else {
				return new AASDegreeRequest(-1, -1, -1, "");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}

	@Override
	public Boolean isStudentFinishAASProgram(Integer studentID) throws SQLException {
		conn = oConnection.getOracleConnection();

		try {
			Request = new AASDegreeRequest();

			String sql = "select * from studentfinishprogram where id_student = ?"; 

			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, studentID);

			ResultSet rs = pst.executeQuery();

			if (rs.next()) {
				return true;
			} else {
				return false;
			}

		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally {
			conn.close();
		}
	}

}
