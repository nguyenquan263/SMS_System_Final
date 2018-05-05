package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.AASTranscriptCourse;
import vn.edu.saigontech.source.Model.AASTranscriptSemester;

public interface AASTranscriptService {
	public List<AASTranscriptSemester> getAASTranscriptSemester(String stuId, String acaYear, String semester);
	public List<AASTranscriptCourse> getAASTranscriptCourse(String stuId, String acaYear, String semester);
}
