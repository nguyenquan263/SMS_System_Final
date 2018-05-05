package vn.edu.saigontech.source.DAO;

import java.util.List;

import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;
import vn.edu.saigontech.source.Model.HCCTranscript;
import vn.edu.saigontech.source.Model.HCCTranscriptAverageGPA;

public interface HCCTranscriptDAO
{
	public List<HCCTranscriptGeneralInfo> getHCCTranscriptGeneralInfo(String stuId);
	public List<HCCTranscript> getHCCTranscript(String stuId);
	public List<HCCTranscriptAverageGPA> getAverageGPA(String stuId, String acaYear, String semester);
}
