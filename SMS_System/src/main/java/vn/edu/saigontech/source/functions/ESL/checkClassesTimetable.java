package vn.edu.saigontech.source.functions.ESL;



import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

//Written by Nguyen Ngoc Minh Quan
//This class use for checking timetable conflict by inputting those classCode.
public class checkClassesTimetable {

	public checkClassesTimetable() {
	}

	public String Check(Connection conn, Integer studentCode, Integer acaYear, Integer semester, String listClassCodes)
			throws SQLException {

		String sql = "select nvl(string_agg(classcode ),'-1') classcode " + "from v_esl_course_registered "
				+ "where id_student= ? " + "and semester= ? " + "and aca_year= ? ";
		PreparedStatement pst = conn.prepareStatement(sql);

		pst.setInt(1, studentCode);
		pst.setInt(2, semester);
		pst.setInt(3, acaYear);

		ResultSet rs = pst.executeQuery();
		
		String ESLClassCodeRegisred = "";
		if (rs.next())
			ESLClassCodeRegisred = rs.getString("classcode");

		String sql1 = "with tt " + "as( " + "select dt.timetablecode,tt.week, dt.num_dateofweek, dt.num, dt.classcode "
				+ "from timetable tt, detail_timetable dt " + "where tt.id_seq = dt.timetablecode "
				+ "and tt.semester= ? " + "and tt.aca_year= ? " + "and dt.classcode in (" + listClassCodes + ","
				+ ESLClassCodeRegisred + ") " + "order by dt.timetablecode " + ") "
				+ "select string_agg(distinct cl.id) classes_conflict_timetable " + "from classes cl, tt tt1 ,tt tt2 "
				+ "where tt1.num_dateofweek = tt2.num_dateofweek " + "and tt1.num = tt2.num "
				+ "AND tt1.week = tt2.week " + "and tt1.classcode <> tt2.classcode " + "and cl.semester = ? "
				+ "and cl.aca_year = ? " + "and cl.id_seq = tt1.classcode";
		PreparedStatement pst1 = conn.prepareStatement(sql1);

		pst1.setInt(1, semester);
		pst1.setInt(2, acaYear);
		pst1.setInt(3, semester);
		pst1.setInt(4, acaYear);

		ResultSet rs1 = pst1.executeQuery();
		
		String result = "";
		
		if (rs1.next())
			result = rs1.getString("classes_conflict_timetable");
		
		pst.close();
		pst1.close();
		rs1.close();
		rs.close();

		if (result == null) return "";
		else return result+" are in time conflict.<br>Please look at the timetable again before selecting your classes.";

	}
}
