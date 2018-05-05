package vn.edu.saigontech.source.Model;

/** This class represents system time (Current academic year and semester) 
 * @author Nguyen Bao Hoang Long
 * Written on 24/3/2018
 */
public class SystemTime {
	private Integer acaYear;
	private Integer semester;
	
	public SystemTime() {}
	
	public SystemTime(Integer acaYear, Integer semester) {
		super();
		this.acaYear = acaYear;
		this.semester = semester;
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
	
	
}
