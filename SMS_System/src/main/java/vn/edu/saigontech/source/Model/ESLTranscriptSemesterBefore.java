package vn.edu.saigontech.source.Model;
/** This class represents semesters before SPRING 2003 in which student studied ESL courses
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class ESLTranscriptSemesterBefore {
	private String stuId;
	private String semesterName;
	private String semesterVn;
	private String credits;
	private String creditsEarned;
	private String acaYear;
	private String semester;
	private String numSemesterYear;
	private String termGPAESL;
	private String cumGPAESL;
	
	/**
	 * 
	 * @param stuId
	 * @param semesterName
	 * @param semestervn Student ID
	 * @param credits Credits
	 * @param creditsEarned Earned credits
	 * @param acaYear Academic year
	 * @param semester Semester Id
	 * @param numSemesterYear The combination between academic year adn semester (Ex: 20184, 20181, 20172,etc.)
	 * @param termGPAESL Term GPA 
	 * @param cumGPAESL Cumulative GPA
	 */
	public ESLTranscriptSemesterBefore(String stuId, String semesterName, String semestervn, String credits,
			String creditsEarned, String acaYear, String semester, String numSemesterYear, String termGPAESL,
			String cumGPAESL) {
		super();
		this.stuId = stuId;
		this.semesterName = semesterName;
		this.semesterVn = semestervn;
		this.credits = credits;
		this.creditsEarned = creditsEarned;
		this.acaYear = acaYear;
		this.semester = semester;
		this.numSemesterYear = numSemesterYear;
		this.termGPAESL = termGPAESL;
		this.cumGPAESL = cumGPAESL;
	}
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	public String getSemester_name() {
		return semesterName;
	}
	public void setSemester_name(String semester_name) {
		this.semesterName = semester_name;
	}
	public String getSemestervn() {
		return semesterVn;
	}
	public void setSemestervn(String semestervn) {
		this.semesterVn = semestervn;
	}
	public String getCredits() {
		return credits;
	}
	public void setCredits(String credits) {
		this.credits = credits;
	}
	public String getCredits_earn() {
		return creditsEarned;
	}
	public void setCredits_earn(String credits_earn) {
		this.creditsEarned = credits_earn;
	}
	public String getAca_year() {
		return acaYear;
	}
	public void setAca_year(String aca_year) {
		this.acaYear = aca_year;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getNum_semester_year() {
		return numSemesterYear;
	}
	public void setNum_semester_year(String num_semester_year) {
		this.numSemesterYear = num_semester_year;
	}
	public String getTerm_gpa_esl() {
		return termGPAESL;
	}
	public void setTerm_gpa_esl(String term_gpa_esl) {
		this.termGPAESL = term_gpa_esl;
	}
	public String getCum_gpa_esl() {
		return cumGPAESL;
	}
	public void setCum_gpa_esl(String cum_gpa_esl) {
		this.cumGPAESL = cum_gpa_esl;
	}
	
}
