package vn.edu.saigontech.source.Model;
/** This class represents the semesters in which students studied courses which is categorized as Other courses in Dars
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */
public class DarsOthersSemester {
	private String semester_name;
	private String acaYear;
	private String semester;
	private String num_semester_year;
	
	public DarsOthersSemester(String semester_name, String acaYear, String semester, String num_semester_year) {
		super();
		this.semester_name = semester_name;
		this.acaYear = acaYear;
		this.semester = semester;
		this.num_semester_year = num_semester_year;
	}
	public String getSemester_name() {
		return semester_name;
	}
	public void setSemester_name(String semester_name) {
		this.semester_name = semester_name;
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
		return num_semester_year;
	}
	public void setNum_semester_year(String num_semester_year) {
		this.num_semester_year = num_semester_year;
	}
	
}
