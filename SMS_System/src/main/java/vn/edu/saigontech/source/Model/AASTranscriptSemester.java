package vn.edu.saigontech.source.Model;

/** This class represents the semesters in AAS  
 * @author Nguyen Bao Hoang Long
 */
public class AASTranscriptSemester {
	private String stuId;
	private String semesterName;
	private String acaYear;
	private String semesterId;
	private double termGPAAAS;
	private double cumGPAAAS;
	
	/**
	 * 
	 * @param stuId Student id
	 * @param semesterName Name of semester
	 * @param acaYear Academic year
	 * @param semesterId Id of semester (Ex: 2,3,4)
	 * @param termGPAAAS Term GPA
	 * @param cumGPAAAS Cumulative GPA
	 */
	public AASTranscriptSemester(String stuId, String semesterName, String acaYear, String semesterId,
			double termGPAAAS, double cumGPAAAS) {
		super();
		this.stuId = stuId;
		this.semesterName = semesterName;
		this.acaYear = acaYear;
		this.semesterId = semesterId;
		this.termGPAAAS = termGPAAAS;
		this.cumGPAAAS = cumGPAAAS;
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
	public String getAcaYear() {
		return acaYear;
	}
	public void setAcaYear(String acaYear) {
		this.acaYear = acaYear;
	}
	public String getSemester() {
		return semesterId;
	}
	public void setSemester(String semester) {
		this.semesterId = semester;
	}
	public double getTerm_gpa_aas() {
		return termGPAAAS;
	}
	public void setTerm_gpa_aas(double term_gpa_aas) {
		this.termGPAAAS = term_gpa_aas;
	}
	public double getCum_gpa_aas() {
		return cumGPAAAS;
	}
	public void setCum_gpa_aas(double cum_gpa_aas) {
		this.cumGPAAAS = cum_gpa_aas;
	}
	
	
}
