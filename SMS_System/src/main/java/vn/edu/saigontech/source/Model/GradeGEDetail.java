package vn.edu.saigontech.source.Model;

/** This class represents the student's detailed grade GE
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class GradeGEDetail {
	private String id;
	private String name;
	private String midMark;
	private String finalMark;
	private String averageMark;
	private String classCode;
	private String studySubCode;
	private String midPercent;
	private String finalPercent;
	private String subjectCode;
	
	public GradeGEDetail(String id, String name, String midMark, String finalMark, String averageMark, String classCode,
			String studySubCode, String midPercent, String finalPercent, String subjectCode) {
		super();
		this.id = id;
		this.name = name;
		this.midMark = midMark;
		this.finalMark = finalMark;
		this.averageMark = averageMark;
		this.classCode = classCode;
		this.studySubCode = studySubCode;
		this.midPercent = midPercent;
		this.finalPercent = finalPercent;
		this.subjectCode = subjectCode;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMidMark() {
		return midMark;
	}
	public void setMidMark(String midMark) {
		this.midMark = midMark;
	}
	public String getFinalMark() {
		return finalMark;
	}
	public void setFinalMark(String finalMark) {
		this.finalMark = finalMark;
	}
	public String getAverageMark() {
		return averageMark;
	}
	public void setAverageMark(String averageMark) {
		this.averageMark = averageMark;
	}
	public String getClassCode() {
		return classCode;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}
	public String getstudySubCode() {
		return studySubCode;
	}
	public void setstudySubCode(String studySubCode) {
		this.studySubCode = studySubCode;
	}
	public String getMidPercent() {
		return midPercent;
	}
	public void setMidPercent(String midPercent) {
		this.midPercent = midPercent;
	}
	public String getFinalPercent() {
		return finalPercent;
	}
	public void setFinalPercent(String finalPercent) {
		this.finalPercent = finalPercent;
	}
	public String getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}
}
