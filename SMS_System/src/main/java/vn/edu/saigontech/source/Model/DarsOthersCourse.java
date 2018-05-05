package vn.edu.saigontech.source.Model;

/** This class represents courses which is categorized as Other courses in Dars that student studied in a specific semester
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */
public class DarsOthersCourse {
	private String acaYear;
	private String subjectId;
	private String subjectName;
	private String credits;
	private String credits_Earn;
	private String letter_mark;
	
	public DarsOthersCourse(String acaYear, String subjectId, String subjectName, String credits, String credits_Earn,
			String letter_mark) {
		super();
		this.acaYear = acaYear;
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.credits = credits;
		this.credits_Earn = credits_Earn;
		this.letter_mark = letter_mark;
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
	public String getCredits_Earn() {
		return credits_Earn;
	}
	public void setCredits_Earn(String credits_Earn) {
		this.credits_Earn = credits_Earn;
	}
	public String getLetter_mark() {
		return letter_mark;
	}
	public void setLetter_mark(String letter_mark) {
		this.letter_mark = letter_mark;
	}
}
