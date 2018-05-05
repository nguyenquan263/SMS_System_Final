package vn.edu.saigontech.source.DAO.DAOImpl;
//Written by Nguyen Ngoc Minh Quan
// this DAO class help us to retrieve data of classes that available on this semester.
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.ClassInformation;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class ClassInformationDAO implements vn.edu.saigontech.source.DAO.ClassInformationDAO {

	private Connection conn;

	public ClassInformationDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	//get all class available by their type like AAS, GE, Other, etc. 
	@Override
	public List<ClassInformation> getAllclassInformationbyCondition(Integer Semester, Integer acaYear, Integer Type) {
		List<ClassInformation> arr = new ArrayList<>();

		Statement statement;
		try {
			statement = conn.createStatement();

			String sql = "select cl.id_seq, cl.id, (sb.id || ' ' || sb.num_code) coursecode, sb.name coursename, "
						+"((select count(id_student) from assigntoclass,student where student.id_seq=assigntoclass.id_student and student.active=0 and  classcode = cl.id_seq) || '/' ||cl.number_student)total, sb.aas_sgt, " 
						+"(select count(id_student) from assigntoclass,student where student.id_seq=assigntoclass.id_student and student.active=0 and  classcode = cl.id_seq) numofstudentsinclass,  "
						+"cl.number_student  "
						+"from classes  cl, subject sb  "
						+"where cl.subjectcode = sb.id_seq  "
						+"and cl.aca_year = "+acaYear+" "
						+"and cl.semester = "+Semester+" "
						+"and sb.aas_sgt = "+Type+" "
						+"order by sb.aas_sgt,cl.id, cl.name, coursename";
			ResultSet rs = statement.executeQuery(sql);
			while (rs.next()) {
				arr.add(new ClassInformation(rs.getString(7) +"/"+rs.getString(8), rs.getString(2), rs.getString(3), rs.getString(4)));
			}
			return arr;
		} catch (SQLException e) {
			return null;
		}

	}
	//get all classes that are available on semester and year.
	@Override
	public List<ClassInformation> getAllclassInformation(Integer Semester, Integer acaYear) {
		List<ClassInformation> arr = new ArrayList<>();

		Statement statement;
		try {
			statement = conn.createStatement();

			String sql = "select cl.id_seq, cl.id, (sb.id || ' ' || sb.num_code) coursecode, sb.name coursename, "
					+"((select count(id_student) from assigntoclass,student where student.id_seq=assigntoclass.id_student and student.active=0 and  classcode = cl.id_seq) || '/' ||cl.number_student)total, sb.aas_sgt, " 
					+"(select count(id_student) from assigntoclass,student where student.id_seq=assigntoclass.id_student and student.active=0 and  classcode = cl.id_seq) numofstudentsinclass,  "
					+"cl.number_student  "
					+"from classes  cl, subject sb  "
					+"where cl.subjectcode = sb.id_seq  "
					+"and cl.aca_year = "+acaYear+" "
					+"and cl.semester = "+Semester+" "
					+"order by sb.aas_sgt,cl.id, cl.name, coursename";
			ResultSet rs = statement.executeQuery(sql);
			while (rs.next()) {
				arr.add(new ClassInformation(rs.getString(7) +"/"+rs.getString(8), rs.getString(2), rs.getString(3), rs.getString(4)));
			}
			return arr;
		} catch (SQLException e) {
			return null;
		}
	}

}
