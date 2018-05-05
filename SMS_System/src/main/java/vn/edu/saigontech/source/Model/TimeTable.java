package vn.edu.saigontech.source.Model;

import java.util.ArrayList;
//Written by Dang Quoc Thanh Phong. The class store objects that contain detail of classes.

public class TimeTable {
	private ArrayList<ArrayList<TimeTableDateOfWeek>> dayOfWeek =new ArrayList<ArrayList<TimeTableDateOfWeek>>();
	private ArrayList<TimeTableDateOfWeek> monday,tuesday,wednesday,thursday,friday,saturday,sunday;
	public TimeTable() {	
		monday = new ArrayList<>();
		tuesday = new ArrayList<>();
		wednesday = new ArrayList<>();
		thursday = new ArrayList<>();
		friday = new ArrayList<>();
		saturday = new ArrayList<>();
		sunday = new ArrayList<>();
		dayOfWeek.add(monday);
		dayOfWeek.add(tuesday);
		dayOfWeek.add(wednesday);
		dayOfWeek.add(thursday);
		dayOfWeek.add(friday);
		dayOfWeek.add(saturday);
		dayOfWeek.add(sunday);
	}

	public ArrayList<ArrayList<TimeTableDateOfWeek>> getDayOfWeek() {
		return dayOfWeek;
	}

	public void setDayOfWeek(ArrayList<ArrayList<TimeTableDateOfWeek>> dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}

	public ArrayList<TimeTableDateOfWeek> getMonday() {
		return monday;
	}

	public void setMonday(ArrayList<TimeTableDateOfWeek> monday) {
		this.monday = monday;
	}

	public ArrayList<TimeTableDateOfWeek> getTuesday() {
		return tuesday;
	}

	public void setTuesday(ArrayList<TimeTableDateOfWeek> tuesday) {
		this.tuesday = tuesday;
	}

	public ArrayList<TimeTableDateOfWeek> getWednesday() {
		return wednesday;
	}

	public void setWednesday(ArrayList<TimeTableDateOfWeek> wednesday) {
		this.wednesday = wednesday;
	}

	public ArrayList<TimeTableDateOfWeek> getThursday() {
		return thursday;
	}

	public void setThursday(ArrayList<TimeTableDateOfWeek> thursday) {
		this.thursday = thursday;
	}

	public ArrayList<TimeTableDateOfWeek> getFriday() {
		return friday;
	}

	public void setFriday(ArrayList<TimeTableDateOfWeek> friday) {
		this.friday = friday;
	}

	public ArrayList<TimeTableDateOfWeek> getSaturday() {
		return saturday;
	}

	public void setSaturday(ArrayList<TimeTableDateOfWeek> saturday) {
		this.saturday = saturday;
	}

	public ArrayList<TimeTableDateOfWeek> getSunday() {
		return sunday;
	}

	public void setSunday(ArrayList<TimeTableDateOfWeek> sunday) {
		this.sunday = sunday;
	}
	
	
}
