package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store all enrolled classes of student
public class CourseEnrolled {
	private String course,courseName;
	private Integer credit;
	public CourseEnrolled() {
		super();
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Integer getCredit() {
		return credit;
	}

	public void setCredit(Integer credit) {
		this.credit = credit;
	}


	
}
