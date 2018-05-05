package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store information of the newest tuition fee of student
public class TuitionFee {
	public String className,courseCode,courseName,courseResume;
	public Double Credit,Rate,usdClassFee,vndClassFee,submitUSD,submitVND,aasSGT,subjectCode;
	public double[] infrastructureHccFee,studentFee;
	public TuitionFee() {
		super();
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getCourseResume() {
		return courseResume;
	}
	public void setCourseResume(String courseResume) {
		this.courseResume = courseResume;
	}
	public Double getCredit() {
		return Credit;
	}
	public void setCredit(Double credit) {
		Credit = credit;
	}
	public Double getRate() {
		return Rate;
	}
	public void setRate(Double rate) {
		Rate = rate;
	}
	public Double getUsdClassFee() {
		return usdClassFee;
	}
	public void setUsdClassFee(Double usdClassFee) {
		this.usdClassFee = usdClassFee;
	}
	public Double getVndClassFee() {
		return vndClassFee;
	}
	public void setVndClassFee(Double vndClassFee) {
		this.vndClassFee = vndClassFee;
	}
	public Double getSubmitUSD() {
		return submitUSD;
	}
	public void setSubmitUSD(Double submitUSD) {
		this.submitUSD = submitUSD;
	}
	public Double getSubmitVND() {
		return submitVND;
	}
	public void setSubmitVND(Double submitVND) {
		this.submitVND = submitVND;
	}
	
	public Double getAasSGT() {
		return aasSGT;
	}
	public void setAasSGT(Double aasSGT) {
		this.aasSGT = aasSGT;
	}
	public Double getSubjectCode() {
		return subjectCode;
	}
	public void setSubjectCode(Double subjectCode) {
		this.subjectCode = subjectCode;
	}
	public double[] getInfrastructureHccFee() {
		return infrastructureHccFee;
	}
	public void setInfrastructureHccFee(double[] infrastructureHccFee) {
		this.infrastructureHccFee = infrastructureHccFee;
	}
	public double[] getStudentFee() {
		return studentFee;
	}
	public void setStudentFee(double[] studentFee) {
		this.studentFee = studentFee;
	}


	
}
