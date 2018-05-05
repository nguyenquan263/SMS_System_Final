package vn.edu.saigontech.source.Model;

/** This class represents the ESL courses student studied before SPRING 2003
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class ESLTranscriptCourseBefore {
	private String subjectName;
	private String subjectId;
	private String mark;
	private String letter_Mark;
	
	public ESLTranscriptCourseBefore(String subjectName, String subjectId, String mark, String letter_Mark) {
		super();
		this.subjectName = subjectName;
		this.subjectId = subjectId;
		this.mark = mark;
		this.letter_Mark = letter_Mark;
	}
	
	public String getSubjectName() {
		return subjectName;
	}
	public void setSubjectName(String subjectName) {
		this.subjectName = subjectName;
	}
	public String getSubjectId() {
		return subjectId;
	}
	public void setSubjectId(String subjectId) {
		this.subjectId = subjectId;
	}
	public String getMark() {
		return mark;
	}
	public void setMark(String mark) {
		this.mark = mark;
	}
	public String getLetter_Mark() {
		return letter_Mark;
	}
	public void setLetter_Mark(String letter_Mark) {
		this.letter_Mark = letter_Mark;
	}
	
	
}
