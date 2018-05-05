package vn.edu.saigontech.source.Model;
/** This Object is used to contain Specialization Information which is Actived
 * @author Tạ Minh Triết
 * Written on 22/3/2018
 */ 
public class SpecializationActived {
	private Integer ID;
	private String specializationName;
	private Integer credit;
	
	public SpecializationActived() {};
	
	public SpecializationActived(Integer iD, String specializationName, Integer credit) {
		super();
		ID = iD;
		this.specializationName = specializationName;
		this.credit = credit;
	}
	public Integer getID() {
		return ID;
	}
	public void setID(Integer iD) {
		ID = iD;
	}
	public String getSpecializationName() {
		return specializationName;
	}
	public void setSpecializationName(String specializationName) {
		this.specializationName = specializationName;
	}
	public Integer getCredit() {
		return credit;
	}
	public void setCredit(Integer credit) {
		this.credit = credit;
	}

	@Override
	public String toString() {
		return "SpecializationActived [ID=" + ID + ", specializationName=" + specializationName + ", credit=" + credit
				+ "]";
	}
	
	
	
}
