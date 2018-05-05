package FunctionESL;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class checkLimitESLCourseRegistration {
	
	public checkLimitESLCourseRegistration() {};
	
	public String Check(Connection conn, Integer studentCode, String classCode,
			Integer semester, Integer academicYear, Integer numberCourseOffer, Integer isLevel4) {
		String result = "";

		Integer numCourseRegistered = 0;
		Integer numCourseOffered = 0;
		Integer isGE = 0;
		Integer numberCourse=0;
		Integer isRegGEClass = 0;
		
		try {
			String sql = "select count(sd.subjectcode) number_course,sum(credits) number_credit "
					+ "from subject sb, study sd " + "where sb.id_seq = sd.subjectcode " + "and sd.id_student = ? "
					+ "and sd.semester = ? " + "and sd.aca_year = ? " + "and sb.aas_sgt =1 ";
			PreparedStatement statement = conn.prepareStatement(sql);
			statement.setInt(1, studentCode);
			statement.setInt(2, semester);
			statement.setInt(3, academicYear);
			ResultSet courseRegistered = statement.executeQuery();

			if (courseRegistered.next()) {
				numCourseRegistered = courseRegistered.getInt("number_course");
			}

			statement.close();
			courseRegistered.close();

			String sql1 = "select count(distinct cl.subjectcode) number_course,sum(credits) number_credit "
					+ "from classes cl, subject sb " + "where cl.semester = ? " + "and cl.aca_year =? "
					+ "and sb.id_seq = cl.subjectcode " + "and sb.aas_sgt=1 " + "and cl.id_seq in (" + classCode + ")";

			PreparedStatement statement1 = conn.prepareStatement(sql1);
			statement1.setInt(1, semester);
			statement1.setInt(2, academicYear);
			System.out.println(sql1);
			ResultSet courseOffer = statement1.executeQuery();

			if (courseOffer.next()) {
				numCourseOffered = courseOffer.getInt("number_course");
			}

			statement1.close();
			courseOffer.close();

			numberCourse = numCourseRegistered + numCourseOffered;

			String sql2 = "select count(distinct subjectcode)number_ge " + "from v_esl_course_open v "
					+ "where v.id_student= ? " + "and v.semester = ? " + "and v.aca_year= ? "
					+ "and v.subjectcode in (select ge.subjectcode from ge_course ge)";
			PreparedStatement statement2 = conn.prepareStatement(sql2);
			statement2.setInt(1, studentCode);
			statement2.setInt(2, semester);
			statement2.setInt(3, academicYear);
			ResultSet rsGE = statement2.executeQuery();

			if (rsGE.next()) {
				Integer temp = rsGE.getInt("number_ge");
				if (temp > 0)
					isGE = 1;
				else
					isGE = 0;
			}

			statement2.close();
			rsGE.close();

			String sql3 = "select count(*) number_ge_class " + "from( " + "select distinct subjectcode " + "from classes cl "
					+ "where id_seq in(" + classCode + ") " + "union " + "select subjectcode "
					+ "from v_esl_course_registered " + "where id_student = ? " + "and semester= ? "
					+ "and aca_year= ? " + ") " + "where subjectcode in (select ge.subjectcode from ge_course ge) ";
			PreparedStatement statement3 = conn.prepareStatement(sql3);
			statement3.setInt(1, studentCode);
			statement3.setInt(2, semester);
			statement3.setInt(3, academicYear);
			ResultSet rsGEClass = statement3.executeQuery();

			

			if (rsGEClass.next()) {
				Integer temp1 = rsGEClass.getInt("number_ge_class");
				if (temp1 > 0)
					isRegGEClass = 1;
				else
					isRegGEClass = 0;
			}
			
			statement3.close();
			rsGEClass.close();
		} catch (Exception e) {
			e.printStackTrace();
			result = "Query Executing Error";
			
		}
		if(isGE==0){
			if(isLevel4==0){
				if(numberCourseOffer<3){
					if(numberCourseOffer!=numberCourse){
						result += "You must register all ESL class(es) offered \n";
						
					}
				}
				else if(numberCourse<3){
					result += "Base on the catalog, your ESL level less than Level 4. You must register at least 3 ESL classes per semester. \n";
					
				}
			}
			
		}
		else if(isRegGEClass==0&&isLevel4==0){
			result += "Your ESL Level less than 4. You must register GE course. \n";
			
		}
		return result;
	}

}
