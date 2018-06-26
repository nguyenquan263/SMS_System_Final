package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import java.util.ArrayList;
import java.util.List;

import vn.edu.saigontech.source.Model.ESLCourseAvailable;
import vn.edu.saigontech.source.Model.ESLCourseRegistered;
import vn.edu.saigontech.source.Model.StudentESLInfo;
import vn.edu.saigontech.source.dbConnection.oConnection;
import vn.edu.saigontech.source.functions.ESL.checkClassesFull;
import vn.edu.saigontech.source.functions.ESL.checkClassesTimetable;
import vn.edu.saigontech.source.functions.ESL.checkESLSkillBalance;
import vn.edu.saigontech.source.functions.ESL.checkLimitESLCourseRegistration;
import vn.edu.saigontech.source.functions.ESL.checkLimitOfCredit;
import vn.edu.saigontech.source.functions.ESL.checkManyClassesSameCourse;
import vn.edu.saigontech.source.functions.ESL.deleteCourseRegistration;
import vn.edu.saigontech.source.functions.ESL.insertCourseRegistration;

public class ESLCourseDAO implements vn.edu.saigontech.source.DAO.ESLCourseDAO {
	private Connection conn;
	private StudentESLInfoDAO sird;

	public ESLCourseDAO() throws ClassNotFoundException, SQLException {
		super();

	}

	@Override
	public List<ESLCourseAvailable> getAlleslClassavailable(Integer studentID, Integer acaYear, Integer semester)
			throws SQLException, ClassNotFoundException {
		this.conn = oConnection.getOracleConnection();
		try {
			sird = new StudentESLInfoDAO();
			List<ESLCourseAvailable> courseArr = new ArrayList<>();
			ESLCourseAvailable temp = null;
			Boolean isIT = sird.studentIsIT(studentID);
			Integer semesterBegin = sird.studentSemesterbegin(studentID);

			String sql = "with esl_registered " + " as( " + " select subjectcode " + " from v_esl_course_registered "
					+ " where aca_year= ? " + " and semester= ? " + " and id_student = ? " + " ), orientation as ( "
					+ " select pre.subjectcode,rownum  numberofrow " + " from pre_course_register_esl pre, subject sb "
					+ " where pre.subjectcode = sb.id_seq " + " and pre.id_student = ? "
					+ " and pre.subjectcode not in (select esl_registered.subjectcode from esl_registered) "
					+ " order by sb.id " + " ) "
					+ " select v.classcode,v.subjectcode,v.classid,subjectid, v.subjectname, "
					+ " v.number_student_registered , v.number_student_class,orientation.numberofrow "
					+ " from v_esl_course_open v,  orientation " + " where v.aca_year = ?" + " and v.semester = ?"
					+ " and v.id_student = ?" + " and v.number_student_class >0 " + " and v.class_status =1 "
					+ " and v.subjectcode = orientation.subjectcode(+) ";

			if (semesterBegin < 20063)
				sql += " and v.is_required = 0 ";
			if (isIT)
				sql += " and v.specialization_required in (0,1) ";
			else
				sql += " and v.specialization_required in (0,2) ";

			sql += "and v.subjectcode not in (select esl_registered.subjectcode from esl_registered) "
					+ "order by numberofrow,v.classid ";
			PreparedStatement pst = conn.prepareStatement(sql);
			pst.setInt(1, acaYear);
			pst.setInt(2, semester);
			pst.setInt(3, studentID);
			pst.setInt(4, studentID);
			pst.setInt(5, acaYear);
			pst.setInt(6, semester);
			pst.setInt(7, studentID);

			ResultSet rs = pst.executeQuery();

			while (rs.next()) {
				temp = new ESLCourseAvailable();

				temp.setClassCode(rs.getInt("CLASSCODE"));
				temp.setSubjectCode(rs.getInt("SUBJECTCODE"));
				temp.setClassID(rs.getString("CLASSID"));
				temp.setSubjectID(rs.getString("SUBJECTID"));
				temp.setSubjectName(rs.getString("SUBJECTNAME"));
				temp.setNumberStudentregistered(rs.getInt("NUMBER_STUDENT_REGISTERED"));
				temp.setNumberStudentclass(rs.getInt("NUMBER_STUDENT_CLASS"));
				temp.setNumberOfrow(rs.getInt("NUMBEROFROW"));
				courseArr.add(temp);
			}
			return courseArr;
		} catch (Exception e) {
			return null;
		} finally {
			conn.close();
		}

	}

	@Override
	public List<ESLCourseRegistered> getAlleslClassregistered(Integer studentID, Integer acaYear, Integer semester)
			throws SQLException, ClassNotFoundException {
		this.conn = oConnection.getOracleConnection();
		try {
			sird = new StudentESLInfoDAO();
			List<ESLCourseRegistered> courseArr = new ArrayList<>();
			ESLCourseRegistered temp = null;

			String sql = "with ge as( select subjectcode from els_level_subject union"
					+ " select subjectcode from ge_course )"
					+ " select v.subjectcode, v.classcode,v.classid,v.subjectid,v.subjectname, v.number_student_registered,"
					+ " v.number_student_class, ge.subjectcode ge_course,class_status"
					+ " from v_esl_course_registered v, ge where v.subjectcode = ge.subjectcode(+)"
					+ " and v.aca_year= ? and v.semester= ? and v.id_student = ?";
			PreparedStatement statement = conn.prepareStatement(sql);

			statement.setInt(1, acaYear);
			statement.setInt(2, semester);
			statement.setInt(3, studentID);

			ResultSet rs = statement.executeQuery();

			while (rs.next()) {
				temp = new ESLCourseRegistered();

				temp.setSubjectCode(rs.getInt("SUBJECTCODE"));
				temp.setClassCode(rs.getInt("CLASSCODE"));
				temp.setClassID(rs.getString("CLASSID"));
				temp.setSubjectID(rs.getString("SUBJECTID"));
				temp.setSubjectName(rs.getString("SUBJECTNAME"));
				temp.setNumberStudentregistered(rs.getInt("NUMBER_STUDENT_REGISTERED"));
				temp.setNumberStudentclass(rs.getInt("NUMBER_STUDENT_CLASS"));
				temp.setGeCourse(rs.getInt("GE_COURSE"));
				temp.setClassStatus(rs.getInt("CLASS_STATUS"));
				courseArr.add(temp);
			}
			return courseArr;
		} catch (Exception e) {
			return null;
		} finally {
			conn.close();
		}

	}

	@Override
	public String deleteSelectedCourse(Integer[] deleteClassCode, Integer studentID, Integer academicYear,
			Integer semester, String ipAddress) throws ClassNotFoundException, SQLException {
		this.conn = oConnection.getOracleConnection();
		sird = new StudentESLInfoDAO();
		conn.setAutoCommit(false);
		try {

			StudentESLInfo studentInfo = sird.getStudentInfoRegistrationbyID(academicYear, semester, studentID);

			if ((studentInfo.getIsCheatToefl() == 1) && (studentInfo.getAasRegisteredNumber() > 0)
					&& (studentInfo.getGeRegisteredNumber() > 0)) {
				for (int i = 0; i <= deleteClassCode.length; i++) {
					Integer classCode = deleteClassCode[i];
					String sql = "select cl.id_seq" + " from classes cl" + " where cl.semester = ?" + " and aca_year= ?"
							+ " and cl.id_seq = ?"
							+ " and cl.subjectcode not in (select subjectcode from els_level_subject" + " union"
							+ " select subjectcode from ge_course) ";
					PreparedStatement statement = conn.prepareStatement(sql);
					statement.setInt(1, academicYear);
					statement.setInt(2, semester);
					statement.setInt(3, classCode);
					ResultSet rsDelete = statement.executeQuery();
					if (rsDelete.next()) {
						deleteCourseRegistration delete = new deleteCourseRegistration();
						delete.deleteSelectedCourse(conn, studentID, classCode, semester, academicYear, ipAddress,
								studentID + "");
						conn.commit();
					}
					studentInfo.setMessage(
							"Your TOEFL certificate was not accepted, you cannot drop GE course before dropping AAS course.");
					statement.close();
				}
			} else {
				String sql = "select id_student" + " from student_toefl" + " where id_student = ?";
				PreparedStatement statement = conn.prepareStatement(sql);
				statement.setInt(1, studentID);
				ResultSet rsToefl = statement.executeQuery();

				if (rsToefl.next()) {
					for (int i = 0; i <= deleteClassCode.length; i++) {
						Integer classCode = deleteClassCode[i];
						deleteCourseRegistration delete = new deleteCourseRegistration();
						delete.deleteSelectedCourse(conn, studentID, classCode, semester, academicYear, ipAddress,
								studentID + "");
						conn.commit();
					}
				}

				else {

					if (studentInfo.getIsAfterFall2008() == 1) {
						if (studentInfo.getIsLevel4() == 0) {
							sql = "select (count(sd.subjectcode) - " + deleteClassCode.length + ") number_course"
									+ "	from subject sb, study sd" + "	where sb.id_seq = sd.subjectcode"
									+ "	and sd.id_student = ?" + "	and sd.semester = ?" + "	and sd.aca_year = ?"
									+ "	and sb.aas_sgt = 1";
							PreparedStatement statement1 = conn.prepareStatement(sql);
							statement1.setInt(1, studentID);
							statement1.setInt(2, semester);
							statement1.setInt(3, academicYear);
							ResultSet rsDelete = statement1.executeQuery();
							if ((rsDelete.next()) && ((rsDelete.getInt("number_course") >= 3)
									|| (rsDelete.getInt("number_course") <= 0))) {
								for (int i = 0; i < deleteClassCode.length; i++) {
									Integer classCode = deleteClassCode[i];
									deleteCourseRegistration delete = new deleteCourseRegistration();
									delete.deleteSelectedCourse(conn, studentID, classCode, semester, academicYear,
											ipAddress, studentID + "");
									conn.commit();

								}
							} else {
								studentInfo.setMessage(
										"Base on the catalog, You must delete all your classes or the number of classes after you delete must greater than or equal 3.");
							}
						} else {
							for (int i = 0; i < deleteClassCode.length; i++) {
								Integer classCode = deleteClassCode[i];
								deleteCourseRegistration delete = new deleteCourseRegistration();

								delete.deleteSelectedCourse(conn, studentID, classCode, semester, academicYear,
										ipAddress, studentID + "");
								conn.commit();
							}
						}
					} else {
						for (int i = 0; i < deleteClassCode.length; i++) {
							Integer classCode = deleteClassCode[i];
							deleteCourseRegistration delete = new deleteCourseRegistration();
							delete.deleteSelectedCourse(conn, studentID, classCode, semester, academicYear, ipAddress,
									studentID + "");
							conn.commit();
						}
					}
				}
				statement.close();

			}
			return studentInfo.getMessage();
		} catch (Exception e) {
			return e.getMessage();
		} finally {
			conn.setAutoCommit(true);
			conn.close();
		}

	}

	@Override
	public String insertSelectedCourse(Integer[] insertClassCode, Integer studentID, Integer academicYear,
			Integer semester, String ipAddress) throws ClassNotFoundException, SQLException {
		this.conn = oConnection.getOracleConnection();
		sird = new StudentESLInfoDAO();

		Integer numberCourseOffer = 0;
		Integer numberCreditOffer = 0;

		StudentESLInfo target = sird.getStudentInfoRegistrationbyID(academicYear, semester, studentID);

		try {
			conn.setAutoCommit(false);
			if (target.getIsAfterFall2008() == 1) {
				String sql = "select count(subjectcode) number_course_offer, sum(credits) number_credit_offer "
						+ "from( " + "select distinct subjectcode, credits " + "from v_esl_course_open v "
						+ "where v.id_student = ? " + "and v.semester = ? " + "and v.aca_year = ? "
						+ "and v.class_status =1";

				if (sird.studentIsIT(studentID)) {
					sql += "and v.specialization_required in (0,1) ";
				} else {
					sql += "and v.specialization_required in (0,2) ";
				}
				sql += ")";

				PreparedStatement pst = conn.prepareStatement(sql);

				pst.setInt(1, studentID);
				pst.setInt(2, semester);
				pst.setInt(3, academicYear);

				ResultSet rs = pst.executeQuery();

				if (rs.next()) {
					numberCourseOffer = rs.getInt("number_course_offer");
					numberCreditOffer = rs.getInt("number_credit_offer");
				}

				String listClassCode = "";

				for (int i = 0; i < insertClassCode.length; i++) {
					listClassCode += insertClassCode[i] + ",";
				}

				listClassCode = listClassCode.substring(0, listClassCode.length() - 1);

				checkLimitOfCredit cloc = new checkLimitOfCredit();

				String resCLOC = cloc.Check(conn, studentID, listClassCode, semester, academicYear);
				if (resCLOC == "") {
					checkClassesFull ccf = new checkClassesFull();
					String resCCF = ccf.Check(conn, listClassCode);

					if (resCCF == "") {
						checkLimitESLCourseRegistration clecr = new checkLimitESLCourseRegistration();
						String resCLECR = clecr.Check(conn, studentID, listClassCode, semester, academicYear,
								numberCourseOffer, target.getIsLevel4());
						if (resCLECR == "") {
							checkESLSkillBalance cesb = new checkESLSkillBalance();
							String resCESB = cesb.Check(conn, studentID, listClassCode);
							if (resCESB == "") {
								checkClassesTimetable cct = new checkClassesTimetable();
								String resCCT = cct.Check(conn, studentID, academicYear, semester, listClassCode);
								if (resCCT == "") {
									insertCourseRegistration icr = new insertCourseRegistration();
									String resICR = icr.insertSelectedCourse(conn, studentID, listClassCode, semester,
											academicYear, ipAddress, studentID + "");
									conn.commit();
									return resICR;
								} else {
									return resCCT;
								}

							} else {
								return resCESB;
							}

						} else {
							return resCLECR;
						}
					} else {
						return resCCF;
					}

				} else {
					return resCLOC;
				}

			} else {
				String listClassCode = "";

				for (int i = 0; i < insertClassCode.length; i++) {
					listClassCode += insertClassCode[i] + ",";
				}

				listClassCode = listClassCode.substring(0, listClassCode.length() - 1);

				checkManyClassesSameCourse cmcsc = new checkManyClassesSameCourse();
				String resCMCSC = cmcsc.Check(conn, listClassCode);

				if (resCMCSC == "") {
					checkLimitOfCredit cloc = new checkLimitOfCredit();
					String resCLOC = cloc.Check(conn, studentID, listClassCode, semester, academicYear);
					if (resCLOC == "") {
						checkClassesFull ccf = new checkClassesFull();
						String resCCF = ccf.Check(conn, listClassCode);
						if (resCCF == "") {
							checkClassesTimetable cct = new checkClassesTimetable();
							String resCCT = cct.Check(conn, studentID, academicYear, semester, listClassCode);
							if (resCCT == "") {
								insertCourseRegistration icr = new insertCourseRegistration();
								String resICR = icr.insertSelectedCourse(conn, studentID, listClassCode, semester,
										academicYear, ipAddress, studentID + "");
								conn.commit();
								return resICR;
							} else {
								return resCCT;
							}

						} else {
							return resCCF;
						}
					} else {
						return resCLOC;
					}

				} else {
					return resCMCSC;
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			return "Fail";
		} finally {
			conn.setAutoCommit(true);
			conn.close();
		}

	}

}
