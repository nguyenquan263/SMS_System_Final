package vn.edu.saigontech.source.Model;
/**
 * This class is used to store student's general information
 * like  catalog of choice, program, etc and will be used
 * in HCC Workforce Transcript
 * @author Nguyen Bao Hoang Long
 * Written on 23/3/2018
 */
public class HCCTranscriptGeneralInfo
{
	private String name;
	private String id;
	private String dob;
	private String idHCCS;
	private String pidHCCS;
	private String catalog;
	private String program;
	
	public HCCTranscriptGeneralInfo(String name, String id, String dob, String id_hccs, String pid_hccs, String catalog,
			String program) {
		super();
		this.name = name;
		this.id = id;
		this.dob = dob;
		this.idHCCS = id_hccs;
		this.pidHCCS = pid_hccs;
		this.catalog = catalog;
		this.program = program;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getId_hccs() {
		return idHCCS;
	}
	public void setId_hccs(String id_hccs) {
		this.idHCCS = id_hccs;
	}
	public String getPid_hccs() {
		return pidHCCS;
	}
	public void setPid_hccs(String pid_hccs) {
		this.pidHCCS = pid_hccs;
	}
	public String getCatalog() {
		return catalog;
	}
	public void setCatalog(String catalog) {
		this.catalog = catalog;
	}
	public String getProgram() {
		return program;
	}
	public void setProgram(String program) {
		this.program = program;
	}
	
	
}
