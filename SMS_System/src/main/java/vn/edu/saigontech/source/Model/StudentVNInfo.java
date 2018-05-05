package vn.edu.saigontech.source.Model;

//Written by Nguyen Ngoc Minh Quan.
//Student Information use for showing on VN Registration.
public class StudentVNInfo {
	private String studentID;
	private String studentName;
	private String Catalog;
	private String Specialization;
	private String semesterYear;
	private String eslLevel;

	public StudentVNInfo(String studentID, String studentName, String catalog, String specialization,
			String semesterYear, String eslLevel) {
		super();
		this.studentID = studentID;
		this.studentName = studentName;
		Catalog = catalog;
		Specialization = specialization;
		this.semesterYear = semesterYear;
		this.eslLevel = eslLevel;
	}

	public StudentVNInfo() {
		super();
	}

	public String getStudentID() {
		return studentID;
	}

	public void setStudentID(String studentID) {
		this.studentID = studentID;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getCatalog() {
		return Catalog;
	}

	public void setCatalog(String catalog) {
		Catalog = catalog;
	}

	public String getSpecialization() {
		return Specialization;
	}

	public void setSpecialization(String specialization) {
		Specialization = specialization;
	}

	public String getSemesterYear() {
		return semesterYear;
	}

	public void setSemesterYear(String semesterYear) {
		this.semesterYear = semesterYear;
	}

	public String getEslLevel() {
		return eslLevel;
	}

	public void setEslLevel(String eslLevel) {
		this.eslLevel = eslLevel;
	}

	@Override
	public String toString() {
		return "StudentVNInfo [studentID=" + studentID + ", studentName=" + studentName + ", Catalog=" + Catalog
				+ ", Specialization=" + Specialization + ", semesterYear=" + semesterYear + ", eslLevel=" + eslLevel
				+ "]";
	}

}
