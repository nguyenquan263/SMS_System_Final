package vn.edu.saigontech.source.Model;

/** This class represents student prohibited data
 * @author Bao Long
 * Written on 23/3/2018
 */
public class StudentProhibited
{
	private String idseq;
	private String classid;
	private String name;
	private String tong;
	private String percent;
	public StudentProhibited(String idseq, String classid, String name, String tong, String percent) {
		super();
		this.idseq = idseq;
		this.classid = classid;
		this.name = name;
		this.tong = tong;
		this.percent = percent;
	}
	public String getIdseq() {
		return idseq;
	}
	public void setIdseq(String idseq) {
		this.idseq = idseq;
	}
	public String getClassid() {
		return classid;
	}
	public void setClassid(String classid) {
		this.classid = classid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTong() {
		return tong;
	}
	public void setTong(String tong) {
		this.tong = tong;
	}
	public String getPercent() {
		return percent;
	}
	public void setPercent(String percent) {
		this.percent = percent;
	}
	
	
	
}
