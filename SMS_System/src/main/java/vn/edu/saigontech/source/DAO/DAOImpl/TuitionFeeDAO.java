package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import saigontech_college.StudentFee;
import saigontech_college.StudentFeeReport;

import vn.edu.saigontech.source.Function.InfrastructureHCCSFee;
import vn.edu.saigontech.source.Model.TuitionFee;
import vn.edu.saigontech.source.dbConnection.oConnection;
//Written by Dang Quoc Thanh Phong
public class TuitionFeeDAO implements vn.edu.saigontech.source.DAO.TuitionFeeDAO {
	private Connection conn;
	
	public TuitionFeeDAO() throws ClassNotFoundException, SQLException {
		conn=oConnection.getOracleConnection();
	}

	@Override
	public List<TuitionFee> getTuitionFee(Integer Semester, Integer academicYear, Integer studentId) {
		List<TuitionFee> array = new ArrayList<>();
		PreparedStatement statement;
		try {
			
			String  sql =""+
                    " select sb.id || ' ' || sb.num_code course_code, sb.name course_name, "+
                    "v.classname, sb.credits , "+
                    "nvl(rate,1) rate, usd_class_fee, vnd_class_fee, " +
                    "(nvl(rate,1) * usd_class_fee) submit_usd, "+
                    "(nvl(rate,1) * vnd_class_fee) submit_vnd, " +
                    "(case when course_resume(v.id_student, v.subjectcode, v.aca_year, v.semester)=0 "+
                    "then 'No' else 'Yes' end) course_resume, "+
                    "sb.aas_sgt , v.subjectcode "+
                " from  v_classfee_detail v, subject sb "+
                " where v.subjectcode = sb.id_seq "+
                  " and v.id_student = ? "+
                  " and v.aca_year = ? "+
                  " and v.semester = ? "+
                " order by  sb.aas_sgt, course_code";
			statement = conn.prepareStatement(sql);
			statement.setInt(1, studentId);
			statement.setInt(2, academicYear);	
			statement.setInt(3, Semester);
			//Sql is used to get money student have to submit
			ResultSet rs = statement.executeQuery();
			TuitionFee currentFee;
			boolean first=true;
			while (rs.next()) {
			
				currentFee= new TuitionFee();
				currentFee.setCourseCode(rs.getString(1));
				currentFee.setCourseName(rs.getString(2));
				currentFee.setClassName(rs.getString(3));
				currentFee.setCredit(rs.getDouble(4));
				currentFee.setRate(rs.getDouble(5));
				currentFee.setUsdClassFee(rs.getDouble(6));
				currentFee.setVndClassFee(rs.getDouble(7));
				currentFee.setSubmitUSD(rs.getDouble(8));
				currentFee.setSubmitVND(rs.getDouble(9));
				currentFee.setCourseResume(rs.getString(10));
				currentFee.setAasSGT(rs.getDouble(11));
				currentFee.setSubjectCode(rs.getDouble(12));
				if(first==true) {
					//used by import saigontech_college as library
					StudentFeeReport report=new StudentFeeReport();
					report.setAca(academicYear);
					report.setSemester(Semester);
					report.setConn(conn);
					// oject get extra fee and openning dept
					InfrastructureHCCSFee infrastructureHccsFee =new InfrastructureHCCSFee();
					currentFee.setInfrastructureHccFee(infrastructureHccsFee.getInfrastructure_Hccs_Fee(conn, studentId+"", academicYear+"", Semester+""));
					StudentFee studentFee = new StudentFee();
					studentFee = report.executeForStudent(studentId);		
					currentFee.setStudentFee(studentFee.getFee());
					first=false;
				}
				array.add(currentFee);
				
			}
			
			conn.close();
			statement.close();
			rs.close();
			return array;
		}
		catch (SQLException e) {
			return null;
		}
	}

}
