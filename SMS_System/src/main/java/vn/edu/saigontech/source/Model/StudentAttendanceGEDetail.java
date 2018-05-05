package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store detail for for student attendance in ge classes.
public class StudentAttendanceGEDetail {
	Double hour;
	String reason,dateIn;
	public StudentAttendanceGEDetail() {
		super();
	}
	public Double getHour() {
		return hour;
	}
	public void setHour(Double hour) {
		this.hour = hour;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getDateIn() {
		return dateIn;
	}
	public void setDateIn(String datein) {
		dateIn = datein;
	}
	
}
