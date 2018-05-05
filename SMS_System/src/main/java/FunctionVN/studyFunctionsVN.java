package FunctionVN;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Types;

public class studyFunctionsVN {
	public studyFunctionsVN() {

	}
	//check the classcode is exist or not.
	public int isExistsClass(Connection conn, String studentcode, String aca, String semester, String classcode) {
		int temp = 0;
		try {
			String sql = " select classes.subjectcode " + " from  subject,study, classes, assigntoclass ass "
					+ " where subject.id_seq = study.subjectcode " + " and subject.id_seq = classes.subjectcode "
					+ " and classes.id_seq = ass.classcode " + " and study.id_student = ass.id_student "
					+ " and study.aca_year= classes.aca_year " + " and study.semester = classes.semester "
					+ " and study.subjectcode in(select subjectcode from classes cl1 where cl1.id_seq=?) "
					+ " and study.id_student= ? " + " and study.semester= ? " + " and study.aca_year= ?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, classcode);
			prs.setString(2, studentcode);
			prs.setString(3, semester);
			prs.setString(4, aca);
			ResultSet rs = prs.executeQuery();
			temp = rs.next() ? 1 : 0;
			rs.close();
			prs.close();
		} catch (SQLException e) {

		}
		return temp;
	}

	//check student register 2 class for 1 subject
	public String checkRegistry2ClassExistsCourse(Connection conn, String sqlwhere) throws SQLException {
		String temp = "";
		int flag = 0;
		String sql = "" + " select  subjectcode,count(classes.id_seq), (sb.id ||' ' || sb.num_code)coursecode, sb.name "
				+ " from classes , subject sb" + " where classes.id_seq in(" + sqlwhere + ") "
				+ " and classes.subjectcode = sb.id_seq" + " having count(classes.id_seq)>=2 "
				+ " group by subjectcode,(sb.id ||' ' || sb.num_code),sb.name ";
		Statement stm = conn.createStatement();
		ResultSet rs = stm.executeQuery(sql);
		while (rs.next()) {
			flag = 1;
			String temp_class = "";
			String sql1 = "select id from classes " + " where id_seq in(" + sqlwhere + ") and subjectcode="
					+ rs.getString("subjectcode");
			Statement stm1 = conn.createStatement();
			ResultSet rs1 = stm1.executeQuery(sql1);
			while (rs1.next()) {
				temp_class += rs1.getString("id") + " and ";
			}
			temp_class = temp_class.length() > 1 ? temp_class.substring(0, temp_class.length() - 4) : temp_class;
			rs1.close();
			stm1.close();
			temp += "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* Both " + temp_class + " are "
					+ rs.getString("coursecode") + " classes. ";
		}
		rs.close();
		stm.close();
		if (flag == 1)
			temp = "You cannot select two classes of the same subject and level." + temp;
		else
			temp = "";
		return temp;
	}

	//check class that has classcode is full or not
	public String isFullClass(Connection conn, String classcode, String aca, String sems) {
		String temp = "";
		try {
			String sql = "SELECT number_student , " + " (SELECT Count(*) " + " FROM  classes cl , assigntoclass ass "
					+ " WHERE cl.id_seq = ass.classcode " + " AND cl.aca_year =  " + aca + " AND cl.semester =  " + sems
					+ " AND cl.id_seq = classes.id_seq)  student_registry, id " + " FROM classes "
					+ " WHERE classes.id_seq =?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, classcode);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				if (rs.getInt(1) <= rs.getInt(2)) {
					temp += ", " + rs.getString("id");
				}
			}
			rs.close();
			prs.close();
		} catch (SQLException e) {
			temp = e.getMessage();
		}
		return temp;
	}

	//run sql function to add vn course for student
	public void add_course_registry(Connection conn, String studentcode, String classcode, String aca, String semester,
			String ip, String owner) {
		try {
			CallableStatement cs = conn.prepareCall("begin pro_registry_course(?,?,?,?,?,?);end;");
			cs.setString(1, classcode);
			cs.setString(2, studentcode);
			cs.setString(3, aca);
			cs.setString(4, semester);
			cs.setString(5, ip);
			cs.setString(6, owner);
			cs.execute();
			cs.close();
		} catch (SQLException e) {

		}
	}
	
	//create log data for this registering.
	public void add_course_registry_log(Connection conn, String studentcode, String classcode, String aca,
			String semester, String ip, String owner) {
		try {
			CallableStatement cs = conn.prepareCall("begin pro_registry_course_log(?,?,?,?,?,?);end;");
			cs.setString(1, classcode);
			cs.setString(2, studentcode);
			cs.setString(3, aca);
			cs.setString(4, semester);
			cs.setString(5, ip);
			cs.setString(6, owner);
			cs.execute();
			cs.close();
		} catch (SQLException e) {

		}
	}

	//run function to delete that classcode for student.

	public void delete_course_registry(Connection conn, String studycode, String classcode, String studentcode,
			String aca, String semester, String ip, String owner) throws SQLException {
		try {
			CallableStatement cs = conn.prepareCall("begin pro_delete_registry_course(?,?,?,?,?,?,?); end;");
			cs.setString(1, studycode);
			cs.setString(2, classcode);
			cs.setString(3, studentcode);
			cs.setString(4, aca);
			cs.setString(5, semester);
			cs.setString(6, ip);
			cs.setString(7, owner);
			cs.execute();
			cs.close();
		} catch (SQLException e) {

		}
	}
	//check conflict in timetable.
	public String existisTimetable(Connection conn, String aca, String semester, String listClass) {
		String test = "";
		String test1 = "";
		java.util.Vector vec = new java.util.Vector();
		String sql = "";
		sql = "SELECT distinct  dt2.classcode, dt1.classcode , cc1.id, cc2.id "
				+ " FROM timetable tt2, detail_timetable dt2, detail_timetable dt1, classes cc1, classes cc2 "
				+ " WHERE  dt1.classcode = cc1.id_seq " + " AND dt2.classcode = cc2.id_seq "
				+ " AND tt2.id_seq = dt2.timetablecode " + " AND tt2.aca_year =? " + " AND tt2.semester = ? "
				+ " AND dt2.classcode IN (" + listClass + ") " + " AND " + " EXISTS  ( "
				+ " select distinct dt1.classcode " + " FROM timetable tt1 " + " WHERE tt1.id_seq = dt1.timetablecode "
				+ " AND tt1.aca_year = ? " + " AND tt1.semester = ? " + " AND dt1.classcode IN (" + listClass + ") "
				+ " AND dt1.classcode <> dt2.classcode " + " AND dt1.num_dateofweek = dt2.num_dateofweek "
				+ " AND dt1.num = dt2.num " + " ) " + " group by dt2.classcode, dt1.classcode , cc1.id, cc2.id ";
		try {
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, aca);
			prs.setString(2, semester);
			prs.setString(3, aca);
			prs.setString(4, semester);
			ResultSet rs = prs.executeQuery();
			while (rs.next()) {
				// test1 += rs.getString(3) + "," + rs.getString(4) + ". ";
				vec.addElement(rs.getString(3));
				vec.addElement(rs.getString(4));
			}
			rs.close();
			prs.close();
			if (vec.size() > 0) {
				test1 = xoabophantutrung(vec.toArray());
			}
			if (!test1.trim().equals(""))
				test = test1.substring(1, test1.length()) + " are in time conflict."
						+ "<br>Please look at the timetable again before selecting your classes."
						+ " Click <a target='_blank' href='http://www.saigontech.edu.vn/courseReg/Spring2006/Timetable-Spring-2006.htm'>here</a> to see overal timetable!";
		} catch (SQLException e) {
			// test = e.getMessage();
			// test += "<br>" + sql;
		}
		return test;
	}

	//check element in array or not
	public int kiemtra(Object[] a, int size, Object value) {
		int kq = 0;
		for (int i = 0; i < size; i++) {
			if (a[i].equals(value)) {
				kq = 1;
				break;
			}
		}
		return kq;
	}
	//check and delete elements that have same value.
	public String xoabophantutrung(Object[] a) {
		String temp = "";
		int i = 0;
		int nb = 0;
		int size = a.length;
		Object[] b = new String[size];
		if (a != null && a.length > 0) {
			b[nb] = a[0];
			i = 1;
			nb++;
			for (; i < size; i++) {
				if (kiemtra(b, nb, a[i]) == 0) {
					b[nb] = a[i];
					nb++;
				}
			}
			for (int k = 0; k < nb; k++) {
				temp += ", " + b[k];
			}
		}
		return temp;
	}

	public String add_registry_date_enroll(Connection conn, String studentcode, String aca, String sems, int course) {
		String sql = "";
		String temp = "";
		int flag = 0;
		String typeCourse = "";
		if (course == 0) {
			typeCourse = " aas_date";
		} else if (course == 1) {
			typeCourse = " esl_date";
		} else if (course == 2) {
			typeCourse = " others_date";
		}
		try {
			sql = "select * from registry_date_enroll where studentcode = " + studentcode + " and aca_year = " + aca
					+ " and semester = " + sems;
			Statement stm = conn.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			flag = rs.next() ? 1 : 0;
			rs.close();
			stm.close();
		} catch (SQLException e) {

		}
		try {
			conn.setAutoCommit(false);
			Statement stm = conn.createStatement();
			if (flag == 1) {
				sql = "update registry_date_enroll set " + typeCourse + " = sysdate" + " where studentcode = "
						+ studentcode + " and aca_year = " + aca + " and semester = " + sems;
			} else {
				sql = " insert into registry_date_enroll(studentcode,aca_year,semester," + typeCourse + ") " + "values("
						+ studentcode + "," + aca + " ," + sems + ",sysdate )";
			}
			stm.addBatch(sql);
			// stm.addBatch(sql);
			int[] delrows2 = stm.executeBatch();
			stm.close();
			conn.commit();
			conn.setAutoCommit(true);

		} catch (Exception e) {
			temp = e.getMessage();
		}
		return temp;
	}

	public String addRegistryStudyOnline(Connection conn, String studentcode, String aca, String sems, int course) {
		String sql = "";
		String temp = "";
		int flag = 0;
		String typeCourse = "";
		if (course == 0) {
			typeCourse = " aas_date";
		} else if (course == 1) {
			typeCourse = " esl_date";
		} else if (course == 2) {
			typeCourse = " others_date";
		}
		try {
			sql = " select * from registry_study_notes " + " where studentcode = ?" + " and semester = ?"
					+ " and aca_year=?";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, studentcode);
			prs.setString(2, sems);
			prs.setString(3, aca);
			ResultSet rs = prs.executeQuery();
			flag = rs.next() ? 1 : 0;
			rs.close();
			prs.close();
		} catch (SQLException e) {
			temp = e.getMessage();
		}
		try {
			conn.setAutoCommit(false);
			Statement stm = conn.createStatement();
			if (flag == 1) {
				sql = "update registry_study_notes set " + typeCourse + " = sysdate" + " where studentcode = "
						+ studentcode + " and aca_year = " + aca + " and semester = " + sems;
			} else {
				sql = " insert into registry_study_notes(studentcode,aca_year,semester," + typeCourse + ") " + "values("
						+ studentcode + "," + aca + " ," + sems + ",sysdate )";
			}
			stm.addBatch(sql);
			// stm.addBatch(sql);
			int[] delrows2 = stm.executeBatch();
			conn.commit();
			conn.setAutoCommit(true);

		} catch (Exception e) {
			temp = e.getMessage();
		}

		return temp;
	}

	public int checkExistsStudentCatalog(Connection conn, String studentcode) {
		int temp = -1;
		try {
			String sql = "select  catalog_code from student where id_seq=" + studentcode;
			Statement stm = conn.createStatement();
			ResultSet rs = stm.executeQuery(sql);
			if (rs.next()) {
				temp = rs.getInt(1);
			}
			rs.close();
			stm.close();
		} catch (SQLException e) {

		}
		return temp;
	}

}
