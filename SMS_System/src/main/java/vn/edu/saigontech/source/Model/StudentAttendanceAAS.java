package vn.edu.saigontech.source.Model;

import java.util.ArrayList;

//Written by Dang Quoc Thanh Phong. The class store list of aas classes that student was late or absent
public class StudentAttendanceAAS {
	String classCode,subjectCode,subSubjectcode;
	Double hoursAbsent, hoursStudy, percentAbsent;
	ArrayList<StudentAttendanceAASDetail> detail;
	
	public StudentAttendanceAAS() {
		detail = new ArrayList<>();
	}
	
	public ArrayList<StudentAttendanceAASDetail> getDetail() {
		return detail;
	}

	public void setDetail(ArrayList<StudentAttendanceAASDetail> detail) {
		this.detail = detail;
	}

	public void addDetail(StudentAttendanceAASDetail detail) {
		this.detail.add(detail);
	}
	public String getClassCode() {
		return classCode;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}
	public String getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(String subjectCode) {
		this.subjectCode = subjectCode;
	}
	public String getSubSubjectcode() {
		return subSubjectcode;
	}
	public void setSubSubjectcode(String subSubjectcode) {
		this.subSubjectcode = subSubjectcode;
	}
	public Double getHoursAbsent() {
		return hoursAbsent;
	}
	public void setHoursAbsent(Double hoursAbsent) {
		this.hoursAbsent = hoursAbsent;
	}
	public Double getHoursStudy() {
		return hoursStudy;
	}
	public void setHoursStudy(Double hoursStudy) {
		this.hoursStudy = hoursStudy;
	}
	public Double getPercentAbsent() {
		return percentAbsent;
	}
	public void setPercentAbsent(Double percentAbsent) {
		this.percentAbsent = percentAbsent;
	}
	
	
	
	
}
