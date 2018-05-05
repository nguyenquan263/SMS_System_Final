package vn.edu.saigontech.source.Model;

/** This class represents the courses in each semester in AAS
 * @author Nguyen Bao Hoang Long
 */

public class AASTranscriptCourse {
	private String acaYear;
	private String subjectId;
	private String subjectName;
	private String credits;
	private String creditsEarned;
	private String letterMark;
	
	/**
	 * @param acaYear Academic year
	 * @param subjectId Subject Id
	 * @param subjectName Subject name
	 * @param credits Credit
	 * @param creditsEarned Earned credits
	 * @param letteMark Letter mark (Ex: A, B, C, D,...)
	 */
	public AASTranscriptCourse(String acaYear, String subjectId, String subjectName, String credits,
			String creditsEarned, String letteMark) {
		super();
		this.acaYear = acaYear;
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.credits = credits;
		this.creditsEarned = creditsEarned;
		this.letterMark = letteMark;
	}
	public String getAcaYear() {
		return acaYear;
	}
	public void setAcaYear(String acaYear) {
		this.acaYear = acaYear;
	}
	public String getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
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
	public String getCredits_earned() {
		return creditsEarned;
	}
	public void setCredits_earned(String credits_earned) {
		this.creditsEarned = credits_earned;
	}
	public String getLetter_mark() {
		return letterMark;
	}
	public void setLetter_mark(String letter_mark) {
		this.letterMark = letter_mark;
	}
}
