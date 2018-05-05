package FunctionESL;
//Written by Nguyen Ngoc Minh Quan
//this class store method that help us to insert course for student.
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class insertCourseRegistration {
	public insertCourseRegistration() {
	};

	public String insertSelectedCourse(Connection conn, Integer studentCode, String listClassCode, Integer semester,
			Integer acaYear, String ipAddress, String domain) {
		try {
			
			String[] classCodes = listClassCode.split(",");

			String sql = "";
			PreparedStatement pst;
			for (int i = 0; i < classCodes.length; i++) {

				sql = "select classcode " + "from assigntoclass asg " + "where id_student = ? " + "and classcode = ?";

				pst = conn.prepareStatement(sql);

				pst.setInt(1, studentCode);
				pst.setInt(2, Integer.parseInt(classCodes[i]));

				ResultSet rs = pst.executeQuery();

				if (!rs.next()) {
					sql = "insert into assigntoclass ass (ass.id_student, ass.classcode) " + "values(?, ?)";
					PreparedStatement pst1 = conn.prepareStatement(sql);

					pst1.setInt(1, studentCode);
					pst1.setString(2, classCodes[i]);
					//pst1.executeQuery();
					pst1.executeUpdate();

					sql = "insert into study(id_seq, id_student,subjectcode,aca_year,semester,mid_mark,final_mark,average_mark) "
							+ "select seq_study.nextval,?,subjectcode,?, ?,-100,-100,-100 " + "from classes "
							+ "where id_seq = ?";
					PreparedStatement pst2 = conn.prepareStatement(sql);

					pst2.setInt(1, studentCode);
					pst2.setInt(2, acaYear);
					pst2.setInt(3, semester);
					pst2.setString(4, classCodes[i]);
					//pst2.executeQuery();
					pst2.executeUpdate();

					sql = "insert into log_course_registry(id,time,type,owner,ip, semester, aca_year, old_classcode, new_classcode) "
							+ "values (?, sysdate,0,?, ?, ?, ?,?, null)";
					PreparedStatement pst3 = conn.prepareStatement(sql);

					pst3.setInt(1, studentCode);
					pst3.setString(2, studentCode+"");
					pst3.setString(3, ipAddress);
					pst3.setInt(4, semester);
					pst3.setInt(5, acaYear);
					pst3.setString(6, classCodes[i]);
					//pst3.executeQuery();
					pst3.executeUpdate();

				}

			}
			return "Success!";
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return "Fail!";
		}
	}

}
