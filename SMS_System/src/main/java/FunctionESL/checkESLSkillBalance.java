package FunctionESL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class checkESLSkillBalance {
	public checkESLSkillBalance() {
	};

	public String Check(Connection conn, Integer studentCode, String listClassCode) throws SQLException {

		String sql = " select string_agg(cl.id) classid " + "from classes cl, els_level_subject esl "
				+ "where cl.subjectcode = esl.subjectcode " + "and cl.id_seq in (" + listClassCode + ") "
				+ "and esl.level_esl -(select  min(level_esl) level_esl " + "from v_esl_level "
				+ "where id_student = ? " + "group by id_student ) > 2";

		PreparedStatement pst = conn.prepareStatement(sql);

		pst.setInt(1, studentCode);

		ResultSet rs = pst.executeQuery();

		String result = "";
		System.out.println(sql);
		if (rs.next()) {
			if (rs.getString("classid") != null)
				result = "You cannot register the class: " + rs.getString("classid") + ".\r\n"
						+ "You cannot register the class which has the level greater than (your current level + 1).";
		}

		return result;

	}

}
