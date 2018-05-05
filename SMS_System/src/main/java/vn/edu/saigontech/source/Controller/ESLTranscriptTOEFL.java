package vn.edu.saigontech.source.Controller;

/** This class represents the toefl score in ESL courses
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class ESLTranscriptTOEFL {
	private String subjectId;
	private String subjectName;
	private String averageMark;
	private String toefl_pass;
	
	public ESLTranscriptTOEFL(String subjectId, String subjectName, String averageMark, String toefl_pass) {
		super();
		this.subjectId = subjectId;
		this.subjectName = subjectName;
		this.averageMark = averageMark;
		this.toefl_pass = toefl_pass;
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
	public String getAverageMark() {
		return averageMark;
	}
	public void setAverageMark(String averageMark) {
		this.averageMark = averageMark;
	}
	public String getToefl_pass() {
		return toefl_pass;
	}
	public void setToefl_pass(String toefl_pass) {
		this.toefl_pass = toefl_pass;
	}
	
	
}
