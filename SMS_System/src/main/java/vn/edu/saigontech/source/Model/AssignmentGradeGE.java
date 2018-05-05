package vn.edu.saigontech.source.Model;
/** This class represents the assignment grade ESL data
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class AssignmentGradeGE {
	private String col;
	private String percent;
	private String grade;
	public AssignmentGradeGE(String col, String percent, String grade) {
		super();
		this.col = col;
		this.percent = percent;
		this.grade = grade;
	}
	public String getCol() {
		return col;
	}
	public void setCol(String col) {
		this.col = col;
	}
	public String getPercent() {
		return percent;
	}
	public void setPercent(String percent) {
		this.percent = percent;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
}
