package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.TimetableForRegis;
import vn.edu.saigontech.source.dbConnection.oConnection;


public class TimetableForRegisDAO implements vn.edu.saigontech.source.DAO.TimetableForRegisDAO {
	private Connection conn;
	public TimetableForRegisDAO(){}

	@Override
	public TimetableForRegis getTimetable(String classCode, String acaYear, String semester)  throws ClassNotFoundException, SQLException{
		conn = oConnection.getOracleConnection();
		TimetableForRegis target = new TimetableForRegis();
		target.setSemesterYear(getSemesterName(semester)+"/"+acaYear);
		try{
			String sql1 = "select ncr2unicodestring(string_agg(distinct tc.lastname || ' ' || tc.firstname)) teachername , sb.name subjectname, cl.id classcode "
							+"from timetable tt, detail_timetable dt, subject sb, " 
							+"teacher tc, room r, classes cl "
							+"where tt.id_seq = dt.timetablecode " 
							+"and tc.id_seq = tt.id_teacher "
							+"and r.id_seq = dt.roomcode "
							+"and sb.id_seq = cl.subjectcode "
							+"and cl.id_seq = dt.classcode "
							+"and tt.semester = cl.semester "
							+"and tt.aca_year= cl.aca_year "
							+"and cl.id_seq = ? "
							+"and tt.week = 1 "
							+"and tt.aca_year = ? " 
							+"and tt.semester = ? "
							+"group by sb.name, cl.id ";
			PreparedStatement pst1 = conn.prepareStatement(sql1);
			pst1.setString(1, classCode);
			pst1.setString(2, acaYear);
			pst1.setString(3, semester);
			
			ResultSet rs1 = pst1.executeQuery();
			
			target.setInstructorName("N/A");
			target.setClassName("N/A");
			if (rs1.next()){
				target.setInstructorName(rs1.getString(1));
				target.setClassName(rs1.getString(2));
				target.setClassCode(rs1.getString(3));
			}
			
			pst1.close();
			rs1.close();
			
			String sql2="with  tt "
						+"as( "
						+"select distinct "
						+"convert_hour_timetable_2(tt.semester,tt.aca_year,dt.num)num, "
						+"(decode(dt.num_dateofweek,2,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))monday, "
						+"(decode(dt.num_dateofweek,3,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))tuesday  , " 
						+"(decode(dt.num_dateofweek,4,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))wednesday, "
						+"(decode(dt.num_dateofweek,5,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))thursday, "
						+"(decode(dt.num_dateofweek,6,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))friday, "
						+"(decode(dt.num_dateofweek,7,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))saturday, " 
						+"(decode(dt.num_dateofweek,8,ncr2unicodestring(tc.lastname|| ' ' ||tc.firstname)||'<br>'||r.name))sunday "
						+"from timetable tt, detail_timetable dt, room r,teacher tc " 
						+"where tt.id_seq = dt.timetablecode "
						+"and tc.id_seq = tt.id_teacher "
						+"and dt.roomcode = r.id_seq "
						+"and tt.aca_year= ? "
						+"and tt.semester = ? "
						+"and tt.week= 1 "
						+"and dt.classcode = ? " 
						+"order by num "
						+") 	"
						+"select  h.orderby,h.time ,max(monday)monday,max(tuesday) tuesday, "
						+"max(wednesday)wednesday ,max(thursday)thursday, " 
						+"max(friday)friday,max(saturday) saturday, max(sunday) sunday " 
						+"from tt,hours_timetable h "
						+"where h.num_week = (select sw.num_week from semester_week sw where sw.aca_year= ? and sw.semester= ?) " 
						+"and h.time = tt.num(+) "
						+"group by h.time,h.orderby " 
						+"order by h.orderby";
			PreparedStatement pst2 = conn.prepareStatement(sql2);
			
			pst2.setString(1, acaYear);
			pst2.setString(2, semester);
			pst2.setString(3, classCode);
			pst2.setString(4, acaYear);
			pst2.setString(5, semester);
			
			ResultSet rs2 = pst2.executeQuery();
			
			String[][] temp = new String[9][9];
			
			rs2.next();
			
			ResultSetMetaData rsmd = rs2.getMetaData();
			
			for (int i = 0; i < 9;i++){
				temp[0][i] = rsmd.getColumnLabel(i+1);
			}
			
			for (int i = 1; i < 9; i++){
				for (int j = 0; j < 9;j++){
					temp[i][j] = rs2.getString(j+1);
				}
				rs2.next();
			}
			
			pst2.close();
			rs2.close();
			
			target.setTimetableMatrix(temp);
			
			return target;
		} catch (Exception e) {
			return null;
		} finally{

		}
	}
	
	public String getSemesterName(String semesterID){
		if (semesterID == "1") return "Summer";
		else if (semesterID == "3") return "Fall";
		else return "Spring";
	}

}
