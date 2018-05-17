package vn.edu.saigontech.source.Model;

/** This class represents the general information of Other Courses which students took in
 * a particular semester and year
 * @author Nguyen Bao Hoang Long
 * Written on 13/5/2018
 */
public class OtherSEOIOtherCoursesInfo {
	private String teacherId; //Teacher Id
	private String lastName; //Last name
	private String firstname; //First name
	private String classId; //Class Id
	private String className; //Name of the class
	public OtherSEOIOtherCoursesInfo(String teacherId, String lastName, String firstname, String classId,
			String className) {
		super();
		this.teacherId = teacherId;
		this.lastName = lastName;
		this.firstname = firstname;
		this.classId = classId;
		this.className = className;
	}
	
	public String getTeacherId() {
		return teacherId;
	}
	public void setTeacherId(String teacherId) {
		this.teacherId = teacherId;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getClassId() {
		return classId;
	}
	public void setClassId(String classId) {
		this.classId = classId;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	
	
}
