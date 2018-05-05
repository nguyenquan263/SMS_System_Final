package FunctionESL;
//Written by Nguyen Ngoc Minh Quan
//this class store method that check student registered many class but same course or not.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class checkManyClassesSameCourse {
	public checkManyClassesSameCourse() {}

	public String Check(Connection conn, String listClassCodes) throws SQLException {
		String sql = "select (sb.id|| ' ' ||sb.num_code) coursecode,string_agg(cl.id) class_exists_2_time " + 
				"from subject sb, classes cl " + 
				"where sb.id_seq = cl.subjectcode " + 
				"and cl.id_seq in("+listClassCodes+") " + 
				"having count(cl.id)>=2 " + 
				"group by (sb.id|| ' ' ||sb.num_code) " + 
				"order by (sb.id ||' ' || sb.num_code)";

		PreparedStatement pst = conn.prepareStatement(sql);

		ResultSet rs = pst.executeQuery();
		
		String result = "";

		while (rs.next()) {
			result += "Classes "+rs.getString("class_exists_2_time")+" belong to the same course ("+rs.getString("coursecode")+")"
				   + ". Please register one of these classes only.\n";
		}
		
		pst.close();
		rs.close();
		
		return result; 
	}
}
