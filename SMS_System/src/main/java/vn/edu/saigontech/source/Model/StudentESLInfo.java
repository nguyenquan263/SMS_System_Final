package vn.edu.saigontech.source.Model;

public class StudentESLInfo {
	private String studentID;
	private String studentName;
	private String catalog;
	private String specialization;
	private String semesterYear;
	private String eslLevel;
	private Integer aasRegisteredNumber,geRegisteredNumber;
	private Integer isCheatToefl;
	private Integer isAfterFall2008,isLevel4;
	private String message; 
	public StudentESLInfo() {
		
	}
	public StudentESLInfo(String studentID, String studentName, String catalog, String specialization,
			String semesterYear, String eslLevel, Integer aasRegisteredNumber, Integer geRegisteredNumber,
			Integer isCheatToefl, Integer isAfterFall2018, Integer isLevel4, String message) {
		super();
		this.studentID = studentID;
		this.studentName = studentName;
		this.catalog = catalog;
		this.specialization = specialization;
		this.semesterYear = semesterYear;
		this.eslLevel = eslLevel;
		this.aasRegisteredNumber = aasRegisteredNumber;
		this.geRegisteredNumber = geRegisteredNumber;
		this.isCheatToefl = isCheatToefl;
		this.isAfterFall2008 = isAfterFall2018;
		this.isLevel4 = isLevel4;
		this.message = message;
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
		return catalog;
	}
	public void setCatalog(String catalog) {
		this.catalog = catalog;
	}
	public String getSpecialization() {
		return specialization;
	}
	public void setSpecialization(String specialization) {
		this.specialization = specialization;
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
	public Integer getAasRegisteredNumber() {
		return aasRegisteredNumber;
	}
	public void setAasRegisteredNumber(Integer aasRegisteredNumber) {
		this.aasRegisteredNumber = aasRegisteredNumber;
	}
	public Integer getGeRegisteredNumber() {
		return geRegisteredNumber;
	}
	public void setGeRegisteredNumber(Integer geRegisteredNumber) {
		this.geRegisteredNumber = geRegisteredNumber;
	}
	public Integer getIsCheatToefl() {
		return isCheatToefl;
	}
	public void setIsCheatToefl(Integer isCheatToefl) {
		this.isCheatToefl = isCheatToefl;
	}
	public Integer getIsAfterFall2008() {
		return isAfterFall2008;
	}
	public void setIsAfterFall2008(Integer isAfterFall2008) {
		this.isAfterFall2008 = isAfterFall2008;
	}
	public Integer getIsLevel4() {
		return isLevel4;
	}
	public void setIsLevel4(Integer isLevel4) {
		this.isLevel4 = isLevel4;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "StudentESLInfo [studentID=" + studentID + ", studentName=" + studentName + ", catalog=" + catalog
				+ ", specialization=" + specialization + ", semesterYear=" + semesterYear + ", eslLevel=" + eslLevel
				+ ", aasRegisteredNumber=" + aasRegisteredNumber + ", geRegisteredNumber=" + geRegisteredNumber
				+ ", isCheatToefl=" + isCheatToefl + ", isAfterFall2018=" + isAfterFall2008 + ", isLevel4=" + isLevel4
				+ ", message=" + message + "]";
	}
	
	
	
	
	

}
