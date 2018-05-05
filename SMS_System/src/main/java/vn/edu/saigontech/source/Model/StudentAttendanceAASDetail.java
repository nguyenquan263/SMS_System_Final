package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store detail for for student attendance in ge classes.
public class StudentAttendanceAASDetail {
	String classID,name,dateIn,reason;
	Double hours;
	public StudentAttendanceAASDetail() {
		super();
	}

	public String getClassID() {
		return classID;
	}

	public void setClassID(String classID) {
		this.classID = classID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDateIn() {
		return dateIn;
	}

	public void setDateIn(String dateIn) {
		this.dateIn = dateIn;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public Double getHours() {
		return hours;
	}

	public void setHours(Double hours) {
		this.hours = hours;
	}


}
