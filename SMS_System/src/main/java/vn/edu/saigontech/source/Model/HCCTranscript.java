package vn.edu.saigontech.source.Model;

/** This class represents HCC Transcript data
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class HCCTranscript {
	private String semesterName;
	private String subjectId;
	private String acaYear;
	private String grade;
	private String letterMark;
	private String subjectName;
	private String credits;
	private String creditsEarned;
	private String averageMark;
	private String numSemesterYear;
	
	/**
	 * 
	 * @param semesterName Semester name
	 * @param subjectId Subject Id
	 * @param acaYear Academic year
	 * @param grade Grade
	 * @param letterMark Letter mark (Ex: A,B,C,etc)
	 * @param subjectName Subject name
	 * @param credits Number of credits
	 * @param creditsEarned Number of earned credit
	 * @param averageMark Average mark in each semester
	 * @param numSemesterYear Which is the combination between acaYear and semester Id (Ex: 20181, 2071, 20174, etc.)
	 */
	public HCCTranscript(String semesterName, String subjectId, String acaYear, String grade, String letterMark,
			String subjectName, String credits, String creditsEarned, String averageMark, String numSemesterYear) {
		super();
		this.semesterName = semesterName;
		this.subjectId = subjectId;
		this.acaYear = acaYear;
		this.grade = grade;
		this.letterMark = letterMark;
		this.subjectName = subjectName;
		this.credits = credits;
		this.creditsEarned = creditsEarned;
		this.averageMark = averageMark;
		this.numSemesterYear = numSemesterYear;
	}
	
	public String getSemester_name() {
		return semesterName;
	}
	public void setSemester_name(String semester_name) {
		this.semesterName = semester_name;
	}
	public String getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}
	public String getAcaYear() {
		return acaYear;
	}
	public void setAcaYear(String acaYear) {
		this.acaYear = acaYear;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getLetter_mark() {
		return letterMark;
	}
	public void setLetter_mark(String letter_mark) {
		this.letterMark = letter_mark;
	}
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public String getCredits() {
		return credits;
	}
	public void setCredits(String credits) {
		this.credits = credits;
	}
	public String getCredits_Earn() {
		return creditsEarned;
	}
	public void setCredits_Earn(String credits_Earn) {
		this.creditsEarned = credits_Earn;
	}
	public String getAverage_mark() {
		return averageMark;
	}
	public void setAverage_mark(String average_mark) {
		this.averageMark = average_mark;
	}
	public String getNum_semester_year() {
		return numSemesterYear;
	}
	public void setNum_semester_year(String num_semester_year) {
		this.numSemesterYear = num_semester_year;
	}
	
	
}
