package vn.edu.saigontech.source.Model;

public class systemTimeForSEOI {
	private Integer acaYear;
	private Integer semester;
	private String semesterName;

	public systemTimeForSEOI() {
		super();
	}

	public systemTimeForSEOI(Integer acaYear, Integer semester, String semesterName) {
		super();
		this.acaYear = acaYear;
		this.semester = semester;
		this.semesterName = semesterName;
	}

	public Integer getAcaYear() {
		return acaYear;
	}

	public void setAcaYear(Integer acaYear) {
		this.acaYear = acaYear;
	}

	public Integer getSemester() {
		return semester;
	}

	public void setSemester(Integer semester) {
		this.semester = semester;
	}

	public String getSemesterName() {
		return semesterName;
	}

	public void setSemesterName(String semesterName) {
		this.semesterName = semesterName;
	}

	@Override
	public String toString() {
		return "systemTimeForSEOI [acaYear=" + acaYear + ", semester=" + semester + ", semesterName=" + semesterName
				+ "]";
	}

}
