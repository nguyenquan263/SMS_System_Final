package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.HCCTranscript;
import vn.edu.saigontech.source.Model.HCCTranscriptAverageGPA;
import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;

public interface HCCTranscriptService {
	List<HCCTranscriptGeneralInfo> getHCCTranscriptGeneralInfo(String stuId);
	public List<HCCTranscript> getHCCTranscript(String stuId);
	public List<HCCTranscriptAverageGPA> getAverageGPA(String stuId, String acaYear, String semester);
}

