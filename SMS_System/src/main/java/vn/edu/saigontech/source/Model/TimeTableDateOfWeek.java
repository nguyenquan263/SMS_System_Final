package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store detail of classes, time, room in the day.
public class TimeTableDateOfWeek {	
	Integer dateOfWeek;
	String 	time,classID,room,day;
	public TimeTableDateOfWeek() {
		super();
	}
	public Integer getDateOfWeek() {
		return dateOfWeek;
	}
	public void setDateOfWeek(Integer dateOfWeek) {
		this.dateOfWeek = dateOfWeek;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getClassID() {
		return classID;
	}
	public void setClassID(String classID) {
		this.classID = classID;
	}
	public String getRoom() {
		return room;
	}
	public void setRoom(String room) {
		this.room = room;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	
	
}
