package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import FunctionVN.studyFunctionsVN;
import vn.edu.saigontech.source.Model.VNCourseAvailable;
import vn.edu.saigontech.source.Model.VNCourseRegistered;
import vn.edu.saigontech.source.dbConnection.oConnection;
//Made by Nguyen Ngoc Minh Quan
//DAO class allow user access to db and get info, delete, insert classes.

public class VNCourseDAO implements vn.edu.saigontech.source.DAO.VNCourseDAO {
	private Connection conn;
	private studyFunctionsVN studyFunction;

	public VNCourseDAO() {
	}

	// method that get all classes available for student who have studentCode =
	// ?
	@Override
	public List<VNCourseAvailable> getAllVNClassAvailable(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		try {
			
			List<VNCourseAvailable> courseArr = new ArrayList<>();

			VNCourseAvailable temp = null;
			String sql = "select v.classcode, v.subjectcode,v.classid, v.course_code, v.coursename, "
					+ " (v.number_student_registered || '/' || v.number_student_class) total "
					+ " from v_other_course_open v " + " where v.semester = ? " + " and v.aca_year = ? "
					+ " and v.class_status= 1 "
					+ " and (v.subjectcode, v.semester, v.aca_year) not in ( select subjectcode,semester, aca_year from v_other_course_registered where id_student = ?) "
					+ " order by v.course_code ";
			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, Semester);
			pst.setInt(2, acaYear);
			pst.setInt(3, studentID);

			ResultSet rs = pst.executeQuery();

			while (rs.next()) {
				if (!isDisableCLCourse(conn, studentID + "", rs.getInt("subjectcode"),
						convertSemeterYear(conn, acaYear + "", Semester + ""))) {
					temp = new VNCourseAvailable();
					temp.setClassCode(rs.getInt("classcode"));
					temp.setSubjectCode(rs.getInt("subjectcode"));
					temp.setClassID(rs.getString("classid"));
					temp.setCourseCode(rs.getString("course_code"));
					temp.setCourseName(rs.getString("coursename"));
					temp.setTotal(rs.getString("total"));

					courseArr.add(temp);
				}
			}
			pst.close();
			rs.close();
			
			return courseArr;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally{
			conn.close();
		}
	}

	// method that get all classes registered for student who have studentCode =
	// ?
	@Override
	public List<VNCourseRegistered> getAllVNClassRegistered(Integer studentID, Integer acaYear, Integer Semester) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		try {
			
			List<VNCourseRegistered> courseArr = new ArrayList<>();
			VNCourseRegistered temp = null;
			String sql = "select v.studycode, v.classcode, v.subjectcode, v.classid, v.subjectid, "
					+ " v.subjectname, (v.number_student_registered || '/'|| v.number_student_class)total,is_disabled,class_status "
					+ " from v_other_course_registered v " + " where v.semester = ? " + " and v.aca_year = ? "
					+ " and v.id_student = ? " + " order by classid ";
			PreparedStatement pst = conn.prepareStatement(sql);

			pst.setInt(1, Semester);
			pst.setInt(2, acaYear);
			pst.setInt(3, studentID);

			ResultSet rs = pst.executeQuery();

			while (rs.next()) {
				if (rs.getInt("CLASS_STATUS") == 1 && rs.getString("IS_DISABLED") == null
						&& !isDisableCLCourse(conn, studentID + "", rs.getInt("SUBJECTCODE"),
								convertSemeterYear(conn, acaYear + "", Semester + ""))) {
					temp = new VNCourseRegistered();
					temp.setStudyCode(rs.getInt("STUDYCODE"));
					temp.setClassCode(rs.getInt("CLASSCODE"));
					temp.setSubjectCode(rs.getInt("SUBJECTCODE"));
					temp.setClassID(rs.getString("CLASSID"));
					temp.setSubjectID(rs.getString("SUBJECTID"));
					temp.setSubjectName(rs.getString("SUBJECTNAME"));
					temp.setTotal(rs.getString("TOTAL"));
					temp.setIsDisable(rs.getString("IS_DISABLED"));
					temp.setClassStatus(rs.getInt("CLASS_STATUS"));

					courseArr.add(temp);
				}
			}
			pst.close();
			rs.close();
			
			return courseArr;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} finally{
			conn.close();
		}
	}

	// this method allow user delete classes that registered by student by input
	// studentCode, classCode, studyCode in current Semester/Year.
	@Override
	public String deleteVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress,
			String classCodes, String studyCodes) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		try {

			studyFunction = new studyFunctionsVN();
			String msg = "";
			conn.setAutoCommit(false);
			studyFunction.addRegistryStudyOnline(conn, studentCode + "", acaYear + "", Semester + "", 2);
			String[] classCodearr = getValidArray(classCodes);
			String[] studyCodearr = getValidArray(studyCodes);
			if (classCodearr != null && studyCodearr != null) {
				for (int i = 0; i < classCodearr.length; i++) {
					studyFunction.delete_course_registry(conn, studyCodearr[i], classCodearr[i], studentCode + "",
							acaYear + "", Semester + "", ipAddress, studentCode + "");
					msg = "The course(s) was deleted!";
				}
			}
			conn.commit();
			conn.setAutoCommit(true);
			return msg;
		} catch (Exception e) {
			e.printStackTrace();
			return "Something wrong!";
		} finally {
			conn.close();
		}
	}
	//method allow user insert a course that has classcode to student registered.
	@Override
	public String insertVNCourses(Integer studentCode, Integer acaYear, Integer Semester, String ipAddress,
			String classCodesChecked) throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
		try {
			studyFunction = new studyFunctionsVN();
			String msg = "";
			String msgTimetable = "";
			String strClassList = classCodesChecked;
			String strClassListTb = classCodesChecked;

			String[] classCodeCheckedArr = getValidArray(classCodesChecked);//remove ',' at last and conv to array of classcode
			String msgFullClass = "";

			String sql = " select distinct classes.id_seq, subject.id_seq, "
					+ " classes.id,subject.id, subject.num_code, subject.name "
					+ " from subject,assigntoclass , classes " + " where classes.id_seq = assigntoclass.classcode "
					+ " and classes.subjectcode = subject.id_seq " + " and assigntoclass.id_student = ?"
					+ " and classes.aca_year =   ?" + " and classes.semester = ?" + " order by classes.id ";
			PreparedStatement psta = conn.prepareStatement(sql);
			psta.setString(1, studentCode + "");
			psta.setString(2, acaYear + "");
			psta.setString(3, Semester + "");
			ResultSet rs = psta.executeQuery();
			while (rs.next()) {
				strClassListTb += rs.getString("id_seq") + ",";
			}
			rs.close();
			psta.close();

			strClassList = validClassCodeString(strClassList);
			strClassListTb = validClassCodeString(strClassListTb);

			conn.setAutoCommit(false);
			studyFunction.addRegistryStudyOnline(conn, studentCode + "", acaYear + "", Semester + "", 2);
			msg = "You have successfully registered your course(s). ";
			String require = studyFunction.checkRegistry2ClassExistsCourse(conn, strClassList);
			int flag_insert = 0;
			if (require != null && require.equals("")) {
				//check is there any course conflict timetable
				msgTimetable = studyFunction.existisTimetable(conn, acaYear + "", Semester + "", strClassListTb);
				//if not continue to check other conditions.
				if (msgTimetable != null && msgTimetable.equals("")) {
					for (int i = 0; i < classCodeCheckedArr.length; i++) {
						//check class all class which has full student.
						String chkFullClass = studyFunction.isFullClass(conn, classCodeCheckedArr[i], acaYear + "",
								Semester + "");
						if (chkFullClass == null || !chkFullClass.equals("")) {
							msgFullClass += chkFullClass;
							flag_insert = 1;
						}
						//check classcode exist for that student or not.
						int intclass = studyFunction.isExistsClass(conn, studentCode + "", acaYear + "", Semester + "",
								classCodeCheckedArr[i]);
						if (flag_insert == 0 && intclass == 0) {//all satisfy , do the function to add course.
							studyFunction.add_course_registry(conn, studentCode + "", classCodeCheckedArr[i],
									acaYear + "", Semester + "", ipAddress, studentCode + "");
						}
					}
				} else {
					msg = msgTimetable;
				}
				//notification about the error that student cant register.
				if (msgFullClass != null && !msgFullClass.equals("")) {
					msgFullClass = "The class for course(s) " + msgFullClass.substring(1, msgFullClass.length())
							+ " is full. You can not register for this course(s)."
							+ "<br> Please select another course .<br>";
				}
				if (flag_insert == 1) {
					msg = msgFullClass + " " + msgTimetable;
				}
			}

			conn.commit();
			conn.setAutoCommit(true);
			return msg;

		} catch (Exception e) {
			e.printStackTrace();
			return "Something wrong!!";
		} finally {
			conn.close();
		}
	}

	// -------------------------------------------------------------------------------------------------------------------
	//method that allow us get semester id by acayear and semester.
	public int convertSemeterYear(Connection conn, String aca, String semester) {
		int result = 0;
		String sql = " select (" + aca + "*10 + num) number_semster_year " + " from semester " + " where id_seq= ?";
		try {
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, semester);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = rs.getInt("number_semster_year");
			}
			rs.close();
			prs.close();
		} catch (SQLException ex) {

		}
		return result;
	}
	//check this course is disabled or not.
	public boolean isDisableCLCourse(Connection conn, String studentCode, int subjectCode, int numSemesterYear) {
		boolean result = false;
		int PRE_COURSE = 436;
		try {
			String sql = "" + " select id_student,from_semester_year,to_semester_year " + " from v_student_fee_by_year "
					+ " where id_student = ? " + " and from_semester_year <= ? " + " and ? <= to_semester_year ";
			PreparedStatement prs = conn.prepareStatement(sql);
			prs.setString(1, studentCode);
			prs.setInt(2, numSemesterYear);
			prs.setInt(3, numSemesterYear);
			ResultSet rs = prs.executeQuery();
			if (rs.next()) {
				result = (subjectCode == PRE_COURSE);

			}
			rs.close();
			prs.close();

		} catch (SQLException ex) {
			
		}
		return result;
	}
	//convert array of classCode to a String that separated by a ","
	public String[] getValidArray(String target) { // function that combine an array to a string which is separated by a ","
													
		if (target.equals("")) {
			return null;
		} else {
			return target.split(",");
		}
	}

	public String validClassCodeString(String target) {
		if (target.equals("")) {
			return "";
		} else {
			return target.substring(0, target.length() - 1);
		}
	}

}
