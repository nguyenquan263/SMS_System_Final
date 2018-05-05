package vn.edu.saigontech.source.Model;

/** This class represents policy 2 data in each semester
 *  @author Nguyen Bao Hoang Long
 *  Written on 23/3/2018
 */
public class Policy2Model {
	private String id;
	private String semester;
	private String acaYear;
	private String numOfViolate;
	private String minusGrade;
	private String note;
	private String courseType;
	public Policy2Model(String id, String semester, String acaYear, String numOfViolate, String minusGrade, String note,
			String courseType) {
		super();
		this.id = id;
		this.semester = semester;
		this.acaYear = acaYear;
		this.numOfViolate = numOfViolate;
		this.minusGrade = minusGrade;
		this.note = note;
		this.courseType = courseType;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getSemester() {
		return semester;
	}
	public void setSemester(String semester) {
		this.semester = semester;
	}
	public String getAcaYear() {
		return acaYear;
	}
	public void setAcaYear(String acaYear) {
		this.acaYear = acaYear;
	}
	public String getNumOfViolate() {
		return numOfViolate;
	}
	public void setNumOfViolate(String numOfViolate) {
		this.numOfViolate = numOfViolate;
	}
	public String getMinusGrade() {
		return minusGrade;
	}
	public void setMinusGrade(String minusGrade) {
		this.minusGrade = minusGrade;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getCourseType() {
		return courseType;
	}
	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}
	
	
}
