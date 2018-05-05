package vn.edu.saigontech.source.Model;
/** This class represents teachers' comments in Grade
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */

public class TeacherComment {
	private String id_seq;
	private String id;
	private String name;
	private String teacherName;
	private String midterComment;
	private String finalComment;
	
	public TeacherComment(String id_seq, String id, String name, String teacherName, String midterComment,
			String finalComment) {
		super();
		this.id_seq = id_seq;
		this.id = id;
		this.name = name;
		this.teacherName = teacherName;
		this.midterComment = midterComment;
		this.finalComment = finalComment;
	}

	public String getId_seq() {
		return id_seq;
	}

	public void setId_seq(String id_seq) {
		this.id_seq = id_seq;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTeacherName() {
		return teacherName;
	}

	public void setTeacherName(String teacherName) {
		this.teacherName = teacherName;
	}

	public String getMidterComment() {
		return midterComment;
	}

	public void setMidterComment(String midterComment) {
		this.midterComment = midterComment;
	}

	public String getFinalComment() {
		return finalComment;
	}

	public void setFinalComment(String finalComment) {
		this.finalComment = finalComment;
	}
	
	
}
