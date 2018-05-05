package vn.edu.saigontech.source.Model;

/** This class represents the entrance examination score of the student
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */
public class DarsStudentInfoScore {
	private String idSeq;
	private String description;
	private String contents;
	private String typeBox;
	
	public DarsStudentInfoScore(String id_seq, String description, String contents, String typeBox) {
		super();
		this.idSeq = id_seq;
		this.description = description;
		this.contents = contents;
		this.typeBox = typeBox;
	}
	
	public String getId_seq() {
		return idSeq;
	}
	public void setId_seq(String id_seq) {
		this.idSeq = id_seq;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getTypeBox() {
		return typeBox;
	}
	public void setTypeBox(String typeBox) {
		this.typeBox = typeBox;
	}
	
}
