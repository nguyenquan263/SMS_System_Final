package vn.edu.saigontech.source.Model;

/** This class represents Other SEOI question
 * @author Nguyen Bao Hoang Long
 * Written on 1/7/2018
 */
public class OtherSEOIQuestion {
	String id_seq;
	String content_en; //Content in English
	String content_vn; //Content in Vietnamese
	String type;
	
	
	public OtherSEOIQuestion(String id_seq, String content_en, String content_vn, String type) {
		super();
		this.id_seq = id_seq;
		this.content_en = content_en;
		this.content_vn = content_vn;
		this.type = type;
	}
	
	public String getId_seq() {
		return id_seq;
	}
	public void setId_seq(String id_seq) {
		this.id_seq = id_seq;
	}
	public String getContent_en() {
		return content_en;
	}
	public void setContent_en(String content_en) {
		this.content_en = content_en;
	}
	public String getContent_vn() {
		return content_vn;
	}
	public void setContent_vn(String content_vn) {
		this.content_vn = content_vn;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
	
}
