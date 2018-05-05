package vn.edu.saigontech.source.Model;

/** This class represents the ESL semesters (after SPRING 2003) in which student studied ESL courses
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class ESLTranscriptSemesterAfter {
	private String stuId;
	private String semesterName;
	private String semesterVn;
	private String acaYear;
	private String semester;
	private String numSemesterYear;
	private String termGPAESL;
	private String cumGPAESL;
	
	public ESLTranscriptSemesterAfter(String stuId, String semester_name, String semesterVn, String acaYear,
			String semester, String numSemesterYear, String termGPAESL, String cumGPAESL) {
		super();
		this.stuId = stuId;
		this.semesterName = semester_name;
		this.semesterVn = semesterVn;
		this.acaYear = acaYear;
		this.semester = semester;
		this.numSemesterYear = numSemesterYear;
		this.termGPAESL = termGPAESL;
		this.cumGPAESL = cumGPAESL;
	}
	
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	public String getSemester_name() {
		return semesterName;
	}
	public void setSemester_name(String semester_name) {
		this.semesterName = semester_name;
	}
	public String getSemesterVn() {
		return semesterVn;
	}
	public void setSemesterVn(String semesterVn) {
		this.semesterVn = semesterVn;
	}
	public String getAcaYear() {
		return acaYear;
	}
	public void setAcaYear(String acaYear) {
		this.acaYear = acaYear;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getNum_semester_year() {
		return numSemesterYear;
	}
	public void setNum_semester_year(String num_semester_year) {
		this.numSemesterYear = num_semester_year;
	}
	public String getTerm_gpa_esl() {
		return termGPAESL;
	}
	public void setTerm_gpa_esl(String term_gpa_esl) {
		this.termGPAESL = term_gpa_esl;
	}
	public String getCum_gpa_esl() {
		return cumGPAESL;
	}
	public void setCum_gpa_esl(String cum_gpa_esl) {
		this.cumGPAESL = cum_gpa_esl;
	}
}
