package vn.edu.saigontech.source.Model;

import java.util.ArrayList;
//Written by Dang Quoc Thanh Phong. The class store list of ge classes that student was late or absent
public class StudentAttendanceGE {
	String classCode,classID,name;
	Double absentHours, studyHours, percentAbsent;
	ArrayList<StudentAttendanceGEDetail> detail;
	
	public StudentAttendanceGE() {
		detail = new ArrayList<>();
	}
	public void addDetail(StudentAttendanceGEDetail detail) {
		this.detail.add(detail);
	}
	
	public ArrayList<StudentAttendanceGEDetail> getDetail() {
		return detail;
	}
	public void setDetail(ArrayList<StudentAttendanceGEDetail> detail) {
		this.detail = detail;
	}
	public String getClassCode() {
		return classCode;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
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
	public Double getAbsentHours() {
		return absentHours;
	}
	public void setAbsentHours(Double absentHours) {
		this.absentHours = absentHours;
	}
	public Double getStudyHours() {
		return studyHours;
	}
	public void setStudyHours(Double studyHours) {
		this.studyHours = studyHours;
	}
	public Double getPercentAbsent() {
		return percentAbsent;
	}
	public void setPercentAbsent(Double percentAbsent) {
		this.percentAbsent = percentAbsent;
	}
	
}
