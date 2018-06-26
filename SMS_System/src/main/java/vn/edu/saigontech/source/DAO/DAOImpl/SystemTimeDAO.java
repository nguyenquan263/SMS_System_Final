package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import vn.edu.saigontech.source.Model.AcademicYear;
import vn.edu.saigontech.source.Model.SystemDateAndTime;
import vn.edu.saigontech.source.Model.SystemTime;
import vn.edu.saigontech.source.Model.StudentInformation;
import vn.edu.saigontech.source.Model.StudentProhibited;
import vn.edu.saigontech.source.dbConnection.oConnection;
/** This class is used to get data which is related to system time
 * @author Nguyen Bao Hoang Long
 * Written on 24/3/2018
 */

public class SystemTimeDAO implements vn.edu.saigontech.source.DAO.SystemTimeDAO {
	private Connection conn;
	public SystemTimeDAO() throws ClassNotFoundException, SQLException {
		
	}
	
	/** Get current semester Id and and academic year
	 */
	@Override
	public SystemTime getSystemTime() {
		PreparedStatement statement;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "select ACA_YEAR,SEMESTER "
					+"from SYSTEM";
			statement = conn.prepareStatement(sql);
			ResultSet rs = statement.executeQuery();
			SystemTime systemTime = new SystemTime();
			while (rs.next()) {
				systemTime.setAcaYear(rs.getInt(1));
				systemTime.setSemester(rs.getInt(2));
				
			}
			rs.close();
			statement.close();
			conn.close();
			return systemTime;
		} catch (Exception e) {
			return null;
		}
	}
	
	/** Get academic year list
	 */
	@Override
	public List<AcademicYear> getAcaYear() {
		List<AcademicYear> arr = new ArrayList<>();
		PreparedStatement statement;
		try {
			conn = oConnection.getOracleConnection();
			String sql = "SELECT ACA_YEAR"
					+ " FROM ACADEMICYEAR";
			statement = conn.prepareStatement(sql);
			ResultSet rs = statement.executeQuery();
			while (rs.next()) {
				arr.add(new AcademicYear(rs.getString(1)));
			}
			rs.close();
			statement.close();
			conn.close();
			return arr;
		} catch (SQLException e) {
			return null;
		}
	}
	
	/** Get system current data and time
	 * @param format Data time format
	 */
	@Override
	public SystemDateAndTime getSystemDateAndTime(String format) {
		//If format parameter is 0, use the format dd/MM/yyyy
		if (format.equals("0"))
		{
			format = "dd/MM/yyyy";
		}
		//If format parameter is 1, use the format dd/MM/yyyy HH:mm
		else if (format.equals("1"))
		{
			format = "dd/MM/yyyy HH:mm";
		}
		DateFormat dateFormat = new SimpleDateFormat(format);
		Date date = new Date();
		return new SystemDateAndTime(dateFormat.format(date));
	}

}
