package vn.edu.saigontech.source.Model;

import java.util.Arrays;

public class TimetableForRegis {
	private String classCode;
	private String className;
	private String instructorName;
	private String semesterYear;
	
	private String[][] timetableMatrix = new String[9][9];

	public TimetableForRegis(String classCode, String className, String instructorName, String semesterYear,
			String[][] timetableMatrix) {
		super();
		this.classCode = classCode;
		this.className = className;
		this.instructorName = instructorName;
		this.semesterYear = semesterYear;
		this.timetableMatrix = timetableMatrix;
	}

	public TimetableForRegis() {
		super();
	}

	public String getClassCode() {
		return classCode;
	}

	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getInstructorName() {
		return instructorName;
	}

	public void setInstructorName(String instructorName) {
		this.instructorName = instructorName;
	}

	public String getSemesterYear() {
		return semesterYear;
	}

	public void setSemesterYear(String semesterYear) {
		this.semesterYear = semesterYear;
	}

	public String[][] getTimetableMatrix() {
		return timetableMatrix;
	}

	public void setTimetableMatrix(String[][] timetableMatrix) {
		this.timetableMatrix = timetableMatrix;
	}

	@Override
	public String toString() {
		return "Timetable [classCode=" + classCode + ", className=" + className + ", instructorName=" + instructorName
				+ ", semesterYear=" + semesterYear + ", timetableMatrix=" + Arrays.toString(timetableMatrix) + "]";
	}
	
	
	
	

}
