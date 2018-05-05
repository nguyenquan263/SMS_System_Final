package vn.edu.saigontech.source.Model;

/** This class represents the enrichment course that the student studied in semesters
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */
public class DarsEnrichmentCourse {
	private String aca_year;
	private String subjectId;
	private String subjectName;
	private String credits;
	private String credits_Earn;
	private String letter_mark;
	public DarsEnrichmentCourse(String aca_year, String subjectId, String subjectName, String credits,
			String credits_Earn, String letter_mark) {
		super();
		this.aca_year = aca_year;
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.credits = credits;
		this.credits_Earn = credits_Earn;
		this.letter_mark = letter_mark;
	}
	public String getAca_year() {
		return aca_year;
	}
	public void setAca_year(String aca_year) {
		this.aca_year = aca_year;
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
