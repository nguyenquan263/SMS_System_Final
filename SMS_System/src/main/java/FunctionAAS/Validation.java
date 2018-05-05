package FunctionAAS;
/** This class contains methods which are conditions to register class
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import vn.edu.saigontech.source.Model.AASRegistrationResult;

public class Validation {
	
	public Validation() {}
	//------------------------------------------------------------------------------------------------------------------------------------
	/** Function is used to check classes have same timetable
	 * @param conn Oracle Connection
	 * @param acaYear current Academic Year
	 * @param semester current Semester
	 * @param listClass List of ClassCode that student registered already
	 * @param classCodeAdd New ClassCode that student have registered
	 * @return  token 1 if timetable of those classcode above are not duplicate, otherwise token 0
	 */
	public AASRegistrationResult existisTimetable(Connection conn, Integer acaYear, Integer semester, String listClass, String classCodeAdd){
		AASRegistrationResult result= new AASRegistrationResult();
//		Integer temp=null;
		String temp2="";
		try{
			String sql="with tt " + 
					"as( " + 
					"select dt.timetablecode,tt.week, dt.num_dateofweek, dt.num, dt.classcode " + 
					"from timetable tt, detail_timetable dt " + 
					"where tt.id_seq = dt.timetablecode " + 
					"and tt.semester= ? " + 
					"and tt.aca_year= ? " + 
					"and dt.classcode in ("+listClass+",?) " + 
					"order by dt.timetablecode " + 
					") " + 
					"select string_agg(distinct cl.id) classes_conflict_timetable " + 
					"from classes cl, tt tt1 ,tt tt2 " + 
					"where tt1.num_dateofweek = tt2.num_dateofweek " + 
					"and tt1.num = tt2.num " + 
					"AND tt1.week = tt2.week " + 
					"and tt1.classcode <> tt2.classcode " + 
					"and cl.semester = ? " + 
					"and cl.aca_year = ? " + 
					"and cl.id_seq = tt1.classcode";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, semester);
			prs.setInt(2, acaYear);
			prs.setString(3, classCodeAdd);
			prs.setInt(4, semester);
			prs.setInt(5, acaYear);
			ResultSet rs = prs.executeQuery();
			while(rs.next()){
				temp2=rs.getString(1);
			}	
			if(temp2==null)
			{
				result.setToken(1);
				result.setError("");
//				temp=1;
			}else
			{
				result.setToken(0);
				result.setError(temp2);
//				temp=0;
			}
//			System.out.println(temp2);
			rs.close();
			prs.close();
		}catch(SQLException e){
		}
		return result;
	}
	
	/** Function is used to get ClassCode Registered
	 * @param conn Oracle Connection
	 * @param acaYear current Academic Year
	 * @param semester current Semester
	 * @param studentID ID of Student
	 * @return  a string that contain classcode registered
	 */
	
	public String getClassCodeRegistered(Integer studentID,Integer semester,Integer acaYear,Connection conn)
	{
		String classCodeRegistered="";
		String sql="select nvl(string_agg(classcode ),'-1') classcode " + 
				"from assigntoclass asg, classes cl " + 
				"where cl.id_seq = asg.classcode " + 
				"and asg.id_student = ? " + 
				"and cl.semester = ? " + 
				"and cl.aca_year = ?";
		try{
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1, studentID);
			prs.setInt(2, semester);
			prs.setInt(3, acaYear);
			ResultSet rs = prs.executeQuery();
			while(rs.next()){
				classCodeRegistered=rs.getString(1);
			}			
			rs.close();
			prs.close();
			
		}catch(SQLException e){
			//test = e.getMessage();
			//test += "<br>" + sql;
		}
		return classCodeRegistered;	
	}
	//------------------------------------------------------------------------------------------------------------------------------------
	/** Function is used to check Course Prerequisite
	 * @param conn Oracle Connection
	 * @param studentCode ID of Student
	 * @param classCode classCode of class that student want to register
	 * @param catalog catalog of student
	 * @return  1 if there is no required class to register a new class, otherwise 0
	 */
	public AASRegistrationResult checkCoursePrerequisite(Connection conn, Integer studentCode, String classCode, Integer catalog)
	{
		AASRegistrationResult result= new AASRegistrationResult();
		String temp="";
		try{
			String sql = "select fun_check_check_prerequisite(?,?,?) prerequisite from dual";	
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setInt(1,studentCode);
			prs.setString(2,classCode);
			prs.setInt(3,catalog);
			ResultSet rs = prs.executeQuery();
			while (rs.next())
			{
				temp=rs.getString("prerequisite");
//				System.out.println(temp);
			}
			rs.close();
			prs.close();
		}catch(SQLException e){
	
		}
		if(temp.equals("-1"))
		{
			result.setToken(1);
			result.setError("");
			return result;
		}else {
			result.setToken(0);
			result.setError(temp);
			return result;
		}

	}
	//------------------------------------------------------------------------------------------------------------------------------------
	/** Function is used to check if the number of credits that a student studies in a semester bellow the maximum value
	 * @param conn Oracle Connection
	 * @param acaYear current Academic Year
	 * @param semester current Semester
	 * @param studentID ID of Student
	 * @param listClass list of class that student want to register
	 * @return  1 if number of credits that a student studies in a semester bellow the maximum value, otherwise 0
	 */
		public AASRegistrationResult checkNumofCredit(Connection conn,Integer studentID, Integer semester, Integer acaYear, String listClass)
		{
			AASRegistrationResult result= new AASRegistrationResult();
			String temp="";
			try{
				int maximumNumofCredit = 0;
				//Get the maximum number of credit in a semester
				String sql = "select numofcredit from registry_credit_limit where semester =?";	
				PreparedStatement prs = conn.prepareStatement(sql);
				prs.setInt(1, semester);
				ResultSet rs = prs.executeQuery();
				ArrayList<String> arr = new ArrayList<>();
				while (rs.next())
				{
					arr.add(rs.getString(1));
				}
				maximumNumofCredit = Integer.parseInt(arr.get(0));
				
				//Get the number of credit that the student registered this semester
				int numOfRegisteredCredits = 0;
				sql =   "select sum(credits)credits"+
						" from study sd, subject sb"+
						" where sd.subjectcode = sb.id_seq"+
				 	    " and sd.aca_year= ?"+
				 	    " and sd.semester = ?"+
				 	    " and sd.id_student = ?"+
					    " and sb.aas_sgt  in (0,1,4)";
				prs = conn.prepareStatement(sql);
				prs.setInt(1, acaYear);
				prs.setInt(2, semester);
				prs.setInt(3, studentID);
				rs = prs.executeQuery();
				arr = new ArrayList<>();
				while (rs.next())
				{
					arr.add(rs.getString(1));
				}
				numOfRegisteredCredits = Integer.parseInt(arr.get(0));
				
				//Get the number of credit that the registered course offers
				int courseOffer = 0;
				sql =  "select sum(credits) credits"+
						" from classes cl, subject sb"+
						" where cl.subjectcode = sb.id_seq"+
						" and cl.aca_year = ?"+
						" and cl.semester = ?"+
						" and sb.aas_sgt  in (0,1,4)"+			
						" and cl.id_seq in("+listClass+")";
				
				prs = conn.prepareStatement(sql);
				prs.setInt(1, acaYear);
				prs.setInt(2, semester);
				
				rs = prs.executeQuery();
				arr = new ArrayList<>();
				while (rs.next())
				{
					arr.add(rs.getString(1));
				}
				courseOffer = Integer.parseInt(arr.get(0));

				//Get the number of GE courses in registered courses
				int numOfGE = 0;
				sql =  
					"select count(*) number_ge"+ 
			         " from ge_course"+ 
			         " where subjectcode in (select cl.subjectcode from classes cl where id_seq in("+listClass+"))";
				
				prs = conn.prepareStatement(sql);
				
				rs = prs.executeQuery();
				arr = new ArrayList<>();
				while (rs.next())
				{
					arr.add(rs.getString(1));
				}
				numOfGE = Integer.parseInt(arr.get(0));
				
				//Total number of credit that the student wants to study
				int credits = numOfRegisteredCredits + courseOffer;
				//Total number of credit limitation
				int creditLimitation = 0;
				if (numOfGE > 0 && semester.equals("1"))
				{
					creditLimitation = maximumNumofCredit + 1;
				}
				else 
				{
					creditLimitation = maximumNumofCredit;
				}
				rs.close();
				prs.close();
	 
				if (credits > creditLimitation) 
				{
//					System.out.println(credits+ "You are not allowed to register for more than"+creditLimitation+" credits!");
					result.setToken(0);
					result.setError("You have registered "+credits+" credits. Your credit limitation are just "+creditLimitation+" credits");
					return result;
				}
				else
					result.setToken(1);
					result.setError("");
					return result;
			}catch(SQLException e){
				e.printStackTrace();
				temp = e.getMessage();
			}
			return null;
		}
		
		//------------------------------------------------------------------------------------------------------------------------------------
		/** Function is used to check if any class in List of Classes is full
		 * @param conn Oracle Connection
		 * @param listClass list of class that student want to register
		 * @return  1 if no class that student want to register is full, otherwise 0
		 */
		public AASRegistrationResult checkClassFull(Connection conn, String listClass)
		{
			AASRegistrationResult result= new AASRegistrationResult();
			String temp="";
			try {
				String sql = "select string_agg(distinct cl.id) classfull " + 
						"from v_number_registered_student v, classes cl " + 
						"where v.classcode = cl.id_seq " + 
						"and v.number_student >= cl.number_student " + 
						"and cl.id_seq in("+ listClass +")";
				PreparedStatement prs = conn.prepareStatement(sql);
				ResultSet rs = prs.executeQuery();
				
				while (rs.next())
				{
					temp=rs.getString("classfull");
				}
				
				if(temp==null)
				{
					result.setToken(1);
					result.setError("");
					return result;
				}else {
					result.setToken(0);
					result.setError(temp+" cannot registered more students");
					return result;
				}
				
					
			}catch(SQLException e){
				e.printStackTrace();

			}
			return null;
		}
		//------------------------------------------------------------------------------------------------------------------------------------
		// 
		/** Function is used to check if course codes are the same
		 * @param conn Oracle Connection
		 * @param listClass list of class that student want to register
		 * @return  1 if no class that student want to register is the same, otherwise 0
		 */
		public AASRegistrationResult checkManyClassSameCourse(Connection conn, String listClass)
		{
			AASRegistrationResult result= new AASRegistrationResult();
			String temp="";
			try {
				String sql = "select (sb.id|| ' ' ||sb.num_code) coursecode,string_agg(cl.id) class_exists_2_time " + 
						"from subject sb, classes cl " + 
						"where sb.id_seq = cl.subjectcode " + 
						"and cl.id_seq in("+ listClass +")  " + 
						"having count(cl.id)>=2 " + 
						"group by (sb.id|| ' ' ||sb.num_code) " + 
						"order by (sb.id ||' ' || sb.num_code)";
				PreparedStatement prs = conn.prepareStatement(sql);
				ResultSet rs = prs.executeQuery();
				while (rs.next())
				{
					temp=rs.getString("class_exists_2_time");
//					System.out.println(temp);
				}
				
				if(temp=="")
				{
					result.setToken(1);
					result.setError("");
					return result;
				}else {
					result.setToken(0);
					result.setError("These classes ( "+temp+" ) are duplicated");
					return result;
				}
			}catch(SQLException e){
				e.printStackTrace();
			}
			return null;
			
		}
		//------------------------------------------------------------------------------------------------------------------------------------
		//
		/** Function is used to check Limit Course Registration
		 * @param conn Oracle Connection
		 * @param acaYear current Academic Year
		 * @param semester current Semester
		 * @param studentID ID of Student
		 * @param listClass list of class that student want to register
		 * @param isToefl a boolean to check if student have toefl
		 * @return  1 if number of course that student registers bellow or equal to number of course that toefl condition require, otherwise 0
		 */
		public AASRegistrationResult checkLimitCourseRegistration(Connection conn, Integer studentID, Integer acaYear, Integer semester,String listClass,Integer isToefl)
		{
			AASRegistrationResult result= new AASRegistrationResult();
			Integer numberCourseRegistered=0;
			Integer numberCourseOffered = 0;
			Integer numberCourseTotal=9;
			try {
				String sql = "select count(sd.subjectcode) number_course,sum(sb.credits) credits " + 
						"from subject sb, study sd " + 
						"where sb.id_seq = sd.subjectcode " + 
						"and sd.id_student = ? " + 
						"and sd.semester = ? " + 
						"and sd.aca_year = ? " + 
						"and sb.aas_sgt = 0";
				PreparedStatement prs = conn.prepareStatement(sql);
				prs.setInt(1, studentID);
				prs.setInt(2, semester);
				prs.setInt(3, acaYear);
				ResultSet rs = prs.executeQuery();
				
				while (rs.next())
				{
					numberCourseRegistered=Integer.parseInt(rs.getString("number_course"));
				}
				sql="select count(distinct cl.subjectcode) number_course,sum(sb.credits) credits " + 
						"from classes cl, subject sb " + 
						"where cl.semester = ? " + 
						"and cl.aca_year =? " + 
						"and sb.id_seq = cl.subjectcode " + 
						"and sb.aas_sgt=0 " + 
						"and cl.id_seq in ("+listClass+")";
				prs = conn.prepareStatement(sql);
				prs.setInt(1, semester);
				prs.setInt(2, acaYear);
				while (rs.next())
				{
					numberCourseOffered=Integer.parseInt(rs.getString("number_course"));
				}
				numberCourseTotal=numberCourseRegistered+numberCourseOffered;
				if(isToefl==1)
				{
					result.setToken(1);
					result.setError("");
					return result;
				}else {
					if(numberCourseTotal<=1) {
						result.setToken(1);
						result.setError("");
						return result;
					}else {
						result.setToken(0);
						result.setError("You cannot register more than 1 class because of your English level");
						return result;
					}
				}
				
			}catch(SQLException e){
				e.printStackTrace();
			}
			return null;
			
		}
		
		//------------------------------------------------------------------------------------------------------------------------------------
		/** Function is used to check before a student entered to AAS registration
		 * @param conn Oracle Connection
		 * @param acaYear current Academic Year
		 * @param semester current Semester
		 * @param studentID ID of Student
		 * @return  a string which will inform student before they register courses
		 */
		public String checkBeforeAASRegistration(Connection conn, Integer studentID, Integer acaYear, Integer semester)
		{
			try
			{
				//Check some conditions such as level 3 GE, be absent 3 semesters,...
				int preAAS = 0;
				int catalog = 0;
				int diploma = 0;
				int absent3Semester = 0;
				int approve = 0;
				int isToefl = 0;
				int isLevel3 = 0;
				int isPass6AASCourse = 0;
				String sql ="select  active, istoefl, ispass6aascourse, islevel3,"+
			              " diploma,approve,pre_aas,decode(catalog_year,null,0,1) catalog ,"+
			              " absent3semester,pre_aas, creditsearn, ispass_sat, ispass_ac1301"+
			              " from v_student_info_reg"+
			              " where id_seq =  ?";
				PreparedStatement prs = conn.prepareStatement(sql);
				prs.setInt(1,studentID);
				ResultSet rs = prs.executeQuery();
				while (rs.next())
				{
					preAAS = rs.getInt("PRE_AAS");
					catalog = rs.getInt("CATALOG");
					diploma = rs.getInt("DIPLOMA");
					absent3Semester = rs.getInt("ABSENT3SEMESTER");
					approve = rs.getInt("APPROVE");
					isToefl = rs.getInt("ISTOEFL");
					isLevel3 = rs.getInt("ISLEVEL3");
					isPass6AASCourse = rs.getInt("ISPASS6AASCOURSE");
				}
		
				sql = 
			          "select  to_char(begin_date ,'hh:mi AM Mon dd, yyyy')begindate,"+ 
			          " to_char(begin_date + ?,'hh:mi AM Mon dd, yyyy')pre_begindate ,"+
			          " to_char(end_date,'hh:mi AM Mon dd, yyyy') enddate,"+
	                  " (case  when to_date(to_char(sysdate ,'mm/dd/yyyy hh24:mi:ss'),'mm/dd/yyyy hh24:mi:ss') >=begin_date"+
	                  " and to_date(to_char(sysdate ,'mm/dd/yyyy hh24:mi:ss'),'mm/dd/yyyy hh24:mi:ss') <=end_date"+ 
	                  " then 1 else 0 end ) isexpiredate,"+                    
	                  " (case  when to_date(to_char(sysdate - ?,'mm/dd/yyyy hh24:mi:ss'),'mm/dd/yyyy hh24:mi:ss') >=begin_date"+ 
	                  " and to_date(to_char(sysdate ,'mm/dd/yyyy hh24:mi:ss'),'mm/dd/yyyy hh24:mi:ss') <=end_date"+ 
	                  " then 1 else 0 end ) isPre_expiredate"+
	                  " from registry_date_student"+ 
	                  " where  aas_sgt= 0"+
	                  " and aca_year = ?"+
	                  " and semester = ?";
				prs = conn.prepareStatement(sql);
				prs.setString(1,preAAS == 0?"1":"0");
				prs.setString(2,preAAS == 0?"1":"0");
				prs.setInt(3,acaYear);
				prs.setInt(4,semester);
				rs = prs.executeQuery();
				String beginDate = "";
				String endDate = "";
				int isExpireDate = 1;
				while (rs.next())
				{
					beginDate =  rs.getString("BEGINDATE");
					endDate = rs.getString("ENDDATE");
					isExpireDate = rs.getInt("ISEXPIREDATE");
				}
				
				//Check if the student is prohibited from online registration
				String studentProhibit = "";
				sql = "select id_student from v_prohibit_online_registration where is_prohibited =1 and id_student = ?";
				prs = conn.prepareStatement(sql);
				prs.setInt(1,studentID);
				rs = prs.executeQuery();
				while (rs.next())
				{
					studentProhibit =  rs.getString("ID_STUDENT");
				}	
				String result="";
				if (catalog == 0)
				{
					result+="You did not select catalog, please contact Ms. Thuy Tien to register your catalog. ";
//					return "You did not select catalog, please contact Ms. Thuy Tien to register your catalog.";
				}
				if (!studentProhibit.equals(""))
				{
					result+="<br> You can not register online due to your poor academic performance. <br> "
							+ "Please contact AAS Office (Mr.Fi, R.606) for consultancy and registration";
//					return "You can not register online due to your poor academic performance. "
//							+ "Please contact AAS Office (Mr.Fi, R.606) for consultancy and registration";
				}
				if (diploma == 0)
				{
					result+="<br> You can not register AAS courses because you did not submit your high school diploma. ";
//					return "You can not register AAS courses because you did not submit your high school diploma.";
				}
				if (absent3Semester == 1)
				{
					result+="<br> You cannot register because you did not take any courses within at least 3 consecutive semesters. <br>" + 
							" For further request, please contact the Registrar. ";
//					return "You cannot register because you did not take any courses within at least 3 consecutive semesters." + 
//							" For further request, please contact the Registrar.";
				}
				if (isExpireDate == 0)
				{
					result+="<br> The registration period expired. <br> Please come to see Ms. Ngoc Phuong for further request! <br>"
							+ "Registration time: "+beginDate+" - "+endDate;
//					return "The registration period expired. Please come to see Ms. Ngoc Phuong for further request! \n"
//							+ "Registration time: "+beginDate+" - "+endDate;
				}
				if (approve == 1)
				{
					result+="<br> You can not change your AAS courses online after you receive the Registration Confirmation Paper. <br>"+
							"Please contact AAS Program Director for further request";
//					return "You can not change your AAS courses online after you receive the Registration Confirmation Paper."+
//					"Please contact AAS Program Director for further request";
				}
				
				if (isToefl == 0)
				{
					if (isLevel3 == 0)
					{
						result+="<br> You can not take any AAS course because you did not pass ESL Level 3.";
//						return "You can not take any AAS course because you did not pass ESL Level 3.";
					}
					else if (isPass6AASCourse == 1)
					{
						result+="<br> You can not take any AAS course because you did not submit TOEFL/IELTS certificate and you passed at least 6 AAS courses already.";
//						return "You can not take any AAS course because you did not submit TOEFL/IELTS certificate and you passed at least 6 AAS courses already.";
					}
				}
				
				rs.close();
				prs.close();
				conn.close();
				return result;			
			}catch(SQLException e){
				e.printStackTrace();
			}
		return null;
		}
		//------------------------------------------------------------------------------------------------------------------------------------
		/** Function is used to check cheating TOEFL
		 * @param conn Oracle Connection
		 * @param acaYear current Academic Year
		 * @param semester current Semester
		 * @param studentID ID of Student
		 * @return  1 if toefl which student is using is not cheating, otherwise 0
		 */
				public AASRegistrationResult checkCheatTOEFL(Connection conn, Integer studentID, Integer acaYear, Integer semester)
				{
					AASRegistrationResult result= new AASRegistrationResult();
					try
					{
						//Get data about cheating TOEFL
						String idStudent = "";
						String sql = "select s.id_student from student_toefl s where status =0 and s.id_student = ?";
						PreparedStatement prs = conn.prepareStatement(sql);
						prs.setInt(1,studentID);
						ResultSet rs = prs.executeQuery();
						while (rs.next())
						{
							idStudent = rs.getString("ID_STUDENT");
						}
						if (!idStudent.equals(""))
						{
							String classOffer = "";
							//Get data about offered classes
							sql = "select id_student, string_agg(classid) classes_offer"+
					                " from v_esl_course_open v"+
					                " where v.semester = ?"+
					                " and v.aca_year =  ?"+
					                " and v.id_student = ?"+
					                " and v.class_status =1"+
					                " and v.subjectcode in("+
					                " select subjectcode from els_level_subject"+
					                " union"+
					                " select subjectcode from ge_course)"+
					                " group by id_student";
							prs = conn.prepareStatement(sql);
							prs.setInt(1,semester);
							prs.setInt(2,acaYear);
							prs.setInt(3,studentID);
							rs = prs.executeQuery();
							while (rs.next())
							{
								classOffer = rs.getString("CLASSES_OFFER");
							}
							
							//Get registered class data
							String classRegistered = "";
							sql = "select id_student, string_agg(classid) class_registered"+
					              " from v_esl_course_registered v"+
					              " where semester= ?"+
					              " and aca_year= ?"+
					              " and id_student = ?"+
					              " and v.subjectcode in ("+ 
					              " select subjectcode"+
					              " from ge_course"+
					              " union"+
					              " select subjectcode"+
					              " from els_level_subject)"+
					              " group by id_student";
							
							prs = conn.prepareStatement(sql);
							prs.setInt(1,semester);
							prs.setInt(2,acaYear);
							prs.setInt(3,studentID);
							rs = prs.executeQuery();
							while (rs.next())
							{
								classRegistered = rs.getString("CLASSES_OFFER");
								System.out.println(classRegistered);
							}
							
							if (!classOffer.equals("") && classRegistered.equals(""))
							{
//								return "Your TOEFL certificate was not accepted, you have to register GE course before registering AAS course.";
								result.setToken(0);
								result.setError("Your TOEFL certificate was not accepted, you have to register GE course before registering AAS course.");
								return result;
							}
						}
						result.setToken(1);
						result.setError("");
						return result;
					}catch(SQLException e){
						e.printStackTrace();
					}
					return null;
				}
}
