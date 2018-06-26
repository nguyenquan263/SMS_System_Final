package vn.edu.saigontech.source.DAO.DAOImpl;
/** This class is a DAO Class which is used to register course for student
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import vn.edu.saigontech.source.Model.AASRegistrationResult;
import vn.edu.saigontech.source.Model.BeforeAASRegistration;
import vn.edu.saigontech.source.dbConnection.oConnection;
import vn.edu.saigontech.source.functions.AAS.Validation;

public class AASRegistrationDAO implements vn.edu.saigontech.source.DAO.AASRegistrationDAO {
	
	private Connection conn=null;
	private PreparedStatement pstSql1 = null;
	private PreparedStatement pstSql2 = null;
	private PreparedStatement pstSql3 = null;
	private PreparedStatement pstSql4 = null;
	private Validation validation= new Validation();
	
	public AASRegistrationDAO() throws ClassNotFoundException, SQLException {
		conn = oConnection.getOracleConnection();
	}
	/** Function is used to register course (insert data into study,assignToClass,Log Course Registry table if all condition are satisfied)
	 * @param acaYear current Academic Year
	 * @param semester current Semester
	 * @param studentID ID of Student
	 * @param domain id to recognize kinds of person register course
	 * @param ipAddress ip of student computer
	 * @param classCode List of classcode that student want to register
	 * @param catalog catalog of student
	 * @param isToefl a boolean to check if student have toefl
	 * @return  1 if student register successfully, and some number if fail
	 */
	@Override
	public AASRegistrationResult insertCourseRegistration(Integer studentID, Integer domain, String ipAddress, Integer acaYear,
			Integer semester, String classCode,Integer catalog,Integer isToefl) throws SQLException {
		String sql1 = "select classcode " + 
				"from assigntoclass asg " + 
				"where id_student =? " +
				"and classcode =?";
		String sql2 = "insert into assigntoclass ass (ass.id_student, ass.classcode) " + 
				"values(?, ?)";
		String sql3 = "insert into study(id_seq, id_student,subjectcode,aca_year,semester,mid_mark,final_mark,average_mark) " + 
				"select seq_study.nextval,?,subjectcode,?, ?,-100,-100,-100 " + 
				"from classes " + 
				"where id_seq = ?";
		String sql4 = "insert into log_course_registry(id,time,type,owner,ip, semester, aca_year, old_classcode, new_classcode) " + 
				"values (?, sysdate,0,?, ?, ?, ?,?, null)";
		String[] classCodeArr = classCode.split(",");
		AASRegistrationResult result= new AASRegistrationResult();
		//insert Class
		try {
			conn.setAutoCommit(false);
				// Check Cheat Toefl
			AASRegistrationResult checkCheatToefl= validation.checkCheatTOEFL(conn, studentID, acaYear, semester);
				if(checkCheatToefl.getToken()==1)
				{
					// Check Many classes having Same Course
					AASRegistrationResult checkManyClassSameCourse= validation.checkManyClassSameCourse(conn, classCode);
					if(checkManyClassSameCourse.getToken()==1)
					{
						//Check Limit Course Registration
						AASRegistrationResult checkLimitCourseRegistration=validation.checkLimitCourseRegistration(conn, studentID, acaYear, semester, classCode, isToefl);
						if(checkLimitCourseRegistration.getToken()==1)
						{
							// Check Number Of Credit Limitation
							AASRegistrationResult checkNumberOfCreditLimitation = validation.checkNumofCredit(conn, studentID, semester, acaYear, classCode);
							if(checkNumberOfCreditLimitation.getToken()==1)
							{
								AASRegistrationResult checkClassFull= validation.checkClassFull(conn, classCode);
								if(checkClassFull.getToken()==1)
								{
									//insert class transaction
									for(int i=0;i<classCodeArr.length;i++)
									{
										// Check conflict timetable
										String listClassCodeRegistered= validation.getClassCodeRegistered(studentID, semester, acaYear, conn);
										AASRegistrationResult checkConflictTimetable= validation.existisTimetable(conn, acaYear, semester, listClassCodeRegistered,classCodeArr[i]);
										if(checkConflictTimetable.getToken()==1)
										{
											// Check AAS Prerequisite
											AASRegistrationResult checkAasPrerequisite = validation.checkCoursePrerequisite(conn, studentID, classCode, catalog);
											if(checkAasPrerequisite.getToken()==1)
											{
												// Check Class Code
												pstSql1 = conn.prepareStatement(sql1);
												pstSql1.setInt(1, studentID);
												pstSql1.setString(2, classCodeArr[i]);
												pstSql1.executeUpdate();
												ResultSet rs=pstSql1.executeQuery();
												
												Integer checkClassCode = null;
												while (rs.next()) {
													checkClassCode=rs.getInt(1);
												}
//												System.out.println(checkClassCode.getClassCode());
												if(checkClassCode==null)
												{
													// Insert into assignToClass
													pstSql2 = conn.prepareStatement(sql2);
													pstSql2.setInt(1, studentID);
													pstSql2.setString(2, classCodeArr[i]);
													pstSql2.executeUpdate();
													
													// Insert into Study
													pstSql3 = conn.prepareStatement(sql3);
													pstSql3.setInt(1, studentID);
													pstSql3.setInt(2, acaYear);
													pstSql3.setInt(3, semester);
													pstSql3.setString(4, classCodeArr[i]);
													pstSql3.executeUpdate();
													
													// Insert To Log Course Registry
													pstSql4 = conn.prepareStatement(sql4);
													pstSql4.setInt(1, studentID);
													pstSql4.setInt(2, domain);
													pstSql4.setString(3, ipAddress);
													pstSql4.setInt(4, semester);
													pstSql4.setInt(5, acaYear);
													pstSql4.setString(6, classCodeArr[i]);
													pstSql4.executeUpdate();

												}else
												{	
													//valid check class code
													System.out.println("Fail");
													conn.rollback();
													result.setToken(0);
													result.setError("");										
													return result;
												}
											}
											else {
												// valid AAS Prerequisite
												result.setToken(2);
												result.setError(checkAasPrerequisite.getError());										
												return result;
											}						
										}
										else {
											// valid conflict timetable
											result.setToken(3);
											result.setError(checkConflictTimetable.getError());										
											return result;
										}
										
									}							
								//Transaction success	
								conn.commit();
								result.setToken(1);
								result.setError("");										
								return result;	
								
								}else {
									// valid Class is Full
									result.setToken(4);
									result.setError(checkClassFull.getError());										
									return result;
								}	
							}else {
								// valid Number Of Credit Limitation
								result.setToken(5);
								result.setError(checkNumberOfCreditLimitation.getError());										
								return result;
							}		
						}else
						{
							//valid Limit Course Registration
							result.setToken(6);
							result.setError(checkLimitCourseRegistration.getError());										
							return result;
						}
						
					}else {
						// Valid Many classes having Same Course
						result.setToken(7);
						result.setError(checkManyClassSameCourse.getError());										
						return result;
					}
				}else {
					//valid Cheat Toefl
					result.setToken(8);
					result.setError(checkCheatToefl.getError());										
					return result;
				}
				
				
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			conn.rollback();
			result.setToken(-1);
			result.setError("");										
			return result;

		} finally {

			if (pstSql1 != null) {
				pstSql1.close();
			}

			if (pstSql2 != null) {
				pstSql2.close();
			}
			
			if (pstSql3 != null) {
				pstSql3.close();
			}
			
			if (pstSql4 != null) {
				pstSql4.close();
			}

			if (conn != null) {
				conn.close();
			}
		}
		

	}
	/** Function is used to delete course (delete data into study,assignToClass and insert to Log Course Registry table)
	 * @param acaYear current Academic Year
	 * @param semester current Semester
	 * @param studentID ID of Student
	 * @param domain id to recognize kinds of person register course
	 * @param ipAddress ip of student computer
	 * @param classCode List of classcode that student want to register
	 * @return  1 if student delete successfully, otherwise 0
	 */
	@Override
	public Integer deleteCourseRegistration(Integer studentID, Integer domain, String ipAddress, Integer acaYear,
			Integer semester, String classCode) throws SQLException {
		String sql1 = "delete from  assigntoclass where id_student = ? and classcode = ?";
		String sql2 = "delete from study " + 
				"where id_student = ? " + 
				"and semester = ? " + 
				"and aca_year= ? " + 
				"and subjectcode in (select subjectcode from classes where id_seq = ?)";
		String sql3 = "insert into log_course_registry(id,time,type,owner,ip, semester, aca_year, old_classcode, new_classcode) " + 
				"values (?, sysdate,0,?, ?, ?, ?,?, null)";		
		String[] classCodeArr = classCode.split(",");
		
		try {
				conn.setAutoCommit(false);
				for(int i=0;i<classCodeArr.length;i++)
				{
					// delete from assignToClass
					pstSql1 = conn.prepareStatement(sql1);
					pstSql1.setInt(1, studentID);
					pstSql1.setString(2, classCodeArr[i]);
					pstSql1.executeUpdate();
					
					// delete from Study
					pstSql2 = conn.prepareStatement(sql2);
					pstSql2.setInt(1, studentID);
					pstSql2.setInt(2,semester);
					pstSql2.setInt(3, acaYear);
					pstSql2.setString(4, classCodeArr[i]);
					pstSql2.executeUpdate();
					
					// Insert To Log Course Registry
					pstSql3 = conn.prepareStatement(sql3);
					pstSql3.setInt(1, studentID);
					pstSql3.setInt(2, domain);
					pstSql3.setString(3, ipAddress);
					pstSql3.setInt(4, semester);
					pstSql3.setInt(5, acaYear);
					pstSql3.setString(6, classCodeArr[i]);
					pstSql3.executeUpdate();						
				}
				conn.commit();
				return 1;
			
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			conn.rollback();
			return 0;

		} finally {

			if (pstSql1 != null) {
				pstSql1.close();
			}

			if (pstSql2 != null) {
				pstSql2.close();
			}
			
			if (pstSql3 != null) {
				pstSql3.close();
			}

			if (conn != null) {
				conn.close();
			}
		}
	}
	// Get Info Before AAS Registration
	@Override
	public BeforeAASRegistration beforeAasRegistration(Integer studentID, Integer acaYear,Integer semester) {
		BeforeAASRegistration beforeAasRegistraion= new BeforeAASRegistration(validation.checkBeforeAASRegistration(conn, studentID, acaYear, semester));
		return beforeAasRegistraion;
	}
	
	
	
}
