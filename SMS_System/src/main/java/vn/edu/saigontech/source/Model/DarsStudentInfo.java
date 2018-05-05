package vn.edu.saigontech.source.Model;

/** This class represents student information which is used in Dars 
 * @author Nguyen Bao Hoang Long
 * Written on 22/3/2018
 */
public class DarsStudentInfo {
	private String id_seq;
	private String name_e;
	private String name_v;
	private String status;
	private String note;
	private String typeBox;
	private String sequenceNum;
	
	
	public DarsStudentInfo(String id_seq, String name_e, String name_v, String status, String note, String typeBox,
			String sequenceNum) {
		super();
		this.id_seq = id_seq;
		this.name_e = name_e;
		this.name_v = name_v;
		this.status = status;
		this.note = note;
		this.typeBox = typeBox;
		this.sequenceNum = sequenceNum;
	}
	public String getId_seq() {
		return id_seq;
	}
	public void setId_seq(String id_seq) {
		this.id_seq = id_seq;
	}
	public String getName_e() {
		return name_e;
	}
	public void setName_e(String name_e) {
		this.name_e = name_e;
	}
	public String getName_v() {
		return name_v;
	}
	public void setName_v(String name_v) {
		this.name_v = name_v;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public String getTypeBox() {
		return typeBox;
	}
	public void setTypeBox(String typeBox) {
		this.typeBox = typeBox;
	}
	public String getSequenceNum() {
		return sequenceNum;
	}
	public void setSequenceNum(String sequenceNum) {
		this.sequenceNum = sequenceNum;
	}
}
