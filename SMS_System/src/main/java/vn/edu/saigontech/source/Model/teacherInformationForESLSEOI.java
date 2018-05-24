package vn.edu.saigontech.source.Model;

public class teacherInformationForESLSEOI {
	private String lastName;
	private String firstName;
	private String className;
	public teacherInformationForESLSEOI(String lastName, String firstName, String className) {
		super();
		this.lastName = lastName;
		this.firstName = firstName;
		this.className = className;
	}
	public teacherInformationForESLSEOI() {
		super();
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	@Override
	public String toString() {
		return "teacherInformationForESLSEOI [lastName=" + lastName + ", firstName=" + firstName + ", className="
				+ className + "]";
	}
	
	

}
