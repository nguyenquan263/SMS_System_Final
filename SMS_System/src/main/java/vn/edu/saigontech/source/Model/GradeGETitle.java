package vn.edu.saigontech.source.Model;

/**
 * This class represents the title in GE classes (Ex:  General English Integrated Level 2, General English Integrated Level 5, etc.)
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class GradeGETitle {
	private String subjectCode;
	private String geId;
	private String geName;
	private String averageMark;
	
	public GradeGETitle(String subjectCode, String geId, String geName, String averageMark) {
		super();
		this.subjectCode = subjectCode;
		this.geId = geId;
		this.geName = geName;
		this.averageMark = averageMark;
	}
	
	public String getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}
	public String getGeId() {
		return geId;
	}
	public void setGeId(String geId) {
		this.geId = geId;
	}
	public String getGeName() {
		return geName;
	}
	public void setGeName(String geName) {
		this.geName = geName;
	}
	public String getAverageMark() {
		return averageMark;
	}
	public void setAverageMark(String averageMark) {
		this.averageMark = averageMark;
	}
	
	
}
