package vn.edu.saigontech.source.Model;

/** This class represents student's detailed grade in AAS courses
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class GradeAASDetail {
	private String id;
	private String name;
	private String midMark;
	private String finalMark;
	private String averageMark;
	private String classCode;
	private String studyCode;
	private String midPercent;
	private String finalPercent;
	private String subjectCode;
	private String aasSGT;
	
	public GradeAASDetail(String id, String name, String midMark, String finalMark, String averageMark,
			String classCode, String studyCode, String midPercent, String finalPercent, String subjectCode,
			String aasSGT) {
		super();
		this.id = id;
		this.name = name;
		this.midMark = midMark;
		this.finalMark = finalMark;
		this.averageMark = averageMark;
		this.classCode = classCode;
		this.studyCode = studyCode;
		this.midPercent = midPercent;
		this.finalPercent = finalPercent;
		this.subjectCode = subjectCode;
		this.aasSGT = aasSGT;
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
	public String getStudyCode() {
		return studyCode;
	}
	public void setStudyCode(String studyCode) {
		this.studyCode = studyCode;
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
	public String getAasSGT() {
		return aasSGT;
	}
	public void setAasSGT(String aasSGT) {
		this.aasSGT = aasSGT;
	}
	
	
}
