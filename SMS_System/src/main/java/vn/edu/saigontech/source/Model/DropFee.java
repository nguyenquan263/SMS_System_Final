package vn.edu.saigontech.source.Model;
//Written by Dang Quoc Thanh Phong. The class store information of the newest drop fee of student
public class DropFee {
	public String className,courseCode,courseName;
	public Double credit,usdClassFee,vndClassFee,submitUSD,percentReturn,percentSubmit,usdDropFee,vndDropFee;
	public DropFee() {
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
	public Double getCredit() {
		return credit;
	}
	public void setCredit(Double credit) {
		this.credit = credit;
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
	public Double getPercentReturn() {
		return percentReturn;
	}
	public void setPercentReturn(Double percentReturn) {
		this.percentReturn = percentReturn;
	}
	public Double getPercentSubmit() {
		return percentSubmit;
	}
	public void setPercentSubmit(Double percentSubmit) {
		this.percentSubmit = percentSubmit;
	}
	public Double getUsdDropFee() {
		return usdDropFee;
	}
	public void setUsdDropFee(Double usdDropFee) {
		this.usdDropFee = usdDropFee;
	}
	public Double getVndDropFee() {
		return vndDropFee;
	}
	public void setVndDropFee(Double vndDropFee) {
		this.vndDropFee = vndDropFee;
	}
	
}
