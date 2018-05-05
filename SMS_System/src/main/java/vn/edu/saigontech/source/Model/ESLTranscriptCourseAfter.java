package vn.edu.saigontech.source.Model;

/** This class represents the ESL courses that the student studied after SPRING 2003
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class ESLTranscriptCourseAfter {
	private String acaYear;
	private String subjectId;
	private String subjectName;
	private String credits;
	private String creditEarned;
	private String letterMark;
	private String averageMark;
	
	public ESLTranscriptCourseAfter(String acaYear, String subjectId, String subjectName, String credits,
			String creditEarned, String letterMark, String averageMark) {
		super();
		this.acaYear = acaYear;
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.credits = credits;
		this.creditEarned = creditEarned;
		this.letterMark = letterMark;
		this.averageMark = averageMark;
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
	public String getCredit_earn() {
		return creditEarned;
	}
	public void setCredit_earn(String credit_earn) {
		this.creditEarned = credit_earn;
	}
	public String getLetter_mark() {
		return letterMark;
	}
	public void setLetter_mark(String letter_mark) {
		this.letterMark = letter_mark;
	}
	public String getAverage_mark() {
		return averageMark;
	}
	public void setAverage_mark(String average_mark) {
		this.averageMark = average_mark;
	}
	
	
}
