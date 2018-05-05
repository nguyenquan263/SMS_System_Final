package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



import vn.edu.saigontech.source.Model.TimeTableDateOfWeek;
import vn.edu.saigontech.source.Model.TimeTable;

import vn.edu.saigontech.source.dbConnection.oConnection;
//Written by Dang Quoc Thanh Phong
public class TimeTableDAO implements vn.edu.saigontech.source.DAO.TimeTableDAO {
	private Connection conn;
	
	public TimeTableDAO() throws ClassNotFoundException, SQLException {
		conn=oConnection.getOracleConnection();
	}

	@Override
	public TimeTable getTimeTable(Integer Semester, Integer academicYear, String studentId,String beginDate,String endDate) {
		PreparedStatement statement;
		TimeTable timeTable=new TimeTable();
		TimeTableDateOfWeek currentDate;
		String[] sevenDay= {"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"};
		for(int i=0;i<timeTable.getDayOfWeek().size();i++) {
			try {
				//This sql will help get the timetable for each day
				String sql =
						"select  distinct v.num_dateofweek, v.num_time,v.classid, v.roomname,h.orderby " +
					" from v_student_timetable v, hours_timetable h " +
					" where v.num_time = h.time " +
					  " and h.num_week = (select sw.num_week from semester_week sw where sw.semester =? and sw.aca_year=? ) " +
					  " and v.semester =? " +
					  " and v.aca_year =? "+
					  " and v.id_student =? "+
					  " and to_date(v.begin_date + v.num_dateofweek - 2)>= to_date(?, 'dd:mm:yyyy') " +
					  " and to_date(v.begin_date + v.num_dateofweek - 2)<= to_date(?, 'dd:mm:yyyy') " +
					  " and num_dateofweek =? "+
					" order by h.orderby";
				statement = conn.prepareStatement(sql);
				statement.setInt(1, Semester);
				statement.setInt(2, academicYear);	
				statement.setInt(3, Semester);
				statement.setInt(4, academicYear);			
				statement.setString(5, studentId);
				statement.setString(6, beginDate);
				statement.setString(7, endDate);
				statement.setInt(8, i+2);
			
				ResultSet rs = statement.executeQuery();
				while (rs.next()) {
					currentDate=new TimeTableDateOfWeek();
					currentDate.setDateOfWeek(rs.getInt(1));
					currentDate.setTime(rs.getString(2));
					currentDate.setClassID(rs.getString(3));
					currentDate.setRoom(rs.getString(4));;
					currentDate.setDay(sevenDay[i]);;
					timeTable.getDayOfWeek().get(i).add(currentDate);
				}
			
			}
			catch (Exception e) {
			}
		}
	
		return timeTable;
	}

}
