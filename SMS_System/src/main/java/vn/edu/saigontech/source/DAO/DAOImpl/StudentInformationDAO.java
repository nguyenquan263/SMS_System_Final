package vn.edu.saigontech.source.DAO.DAOImpl;
// Written by Nguyen Ngoc Minh Quan.
//this DAO class allow us to retrieve information of student which is showed on home component.
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import vn.edu.saigontech.source.Model.StudentInformation;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class StudentInformationDAO implements vn.edu.saigontech.source.DAO.StudentInformationDAO {

	private Connection conn;

	public StudentInformationDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}

	@Override
	public StudentInformation getStudentinfoByID(Integer ID) {
		try {
			Statement statement = conn.createStatement();
			String sql = "select s.ID_SEQ, s.id, s.PID_HCCS, s.ID_HCCS, s.BARCODE"
					+ " , t.average_mark, ncr2unicodestring(s.LASTNAME), ncr2unicodestring(s.FIRSTNAME)"
					+ " , s.DOB || '/' || s.MOB || '/' || s.YOB as \"DOB\""
					+ " , (CASE s.GENDER when 0 then 'Male' else 'Female' end)"
					+ " , c.NAME, s.PARENT_NAME, s.PHONE, s.EMAIL"
					+ " , (select ncr2unicodestring(HOUSENUMBER) || ',' || ncr2unicodestring(CITY) || ',' || ncr2unicodestring(COUNTRY) from ADDRESS where ID_SEQ = s.P_ADDRESS) as \"Permanent Address\""
					+ " , (select ncr2unicodestring(HOUSENUMBER) || ',' || ncr2unicodestring(CITY) || ',' || ncr2unicodestring(COUNTRY) from ADDRESS where ID_SEQ = s.P_ADDRESS) as \"Mailing Address\""
					+ " , s.IMAGE" + " from student s" + " join USERS u" + " on s.ID_SEQ = u.CODE"
					+ " left outer join TOEFL t" + " on t.id_student = s.ID_SEQ" + " join COURSE c"
					+ " on c.ID_SEQ = s.COURSE" + " where s.ID_SEQ=" + ID;

			ResultSet rs = statement.executeQuery(sql);
			StudentInformation currStudent = new StudentInformation();
			while (rs.next()) {
				currStudent.setStudentID(rs.getString(2));
				currStudent.setID(rs.getInt(1));
				currStudent.setHccsPID(rs.getString(3));
				currStudent.setHccsID(rs.getString(4));
				currStudent.setHccsLIB(rs.getString(5));
				currStudent.setTOEFL(rs.getString(6));
				currStudent.setLastName(rs.getString(7));
				currStudent.setFirstName(rs.getString(8));
				currStudent.setDOB(rs.getString(9));
				currStudent.setGender(rs.getString(10));
				currStudent.setCourse(rs.getString(11));
				currStudent.setParentName(rs.getString(12));
				currStudent.setPhoneNumber(rs.getString(13));
				currStudent.setEmail(rs.getString(14));
				currStudent.setPermanentAD(rs.getString(15));
				currStudent.setMailAD(rs.getString(16));
				currStudent.setImage(rs.getString(17));
			}
			return currStudent;
		} catch (Exception e) {
			return null;
		}

	}

}
