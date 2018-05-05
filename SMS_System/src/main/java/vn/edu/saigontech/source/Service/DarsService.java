package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.DarsDegreeGranted;
import vn.edu.saigontech.source.Model.DarsEnrichmentCourse;
import vn.edu.saigontech.source.Model.DarsEnrichmentSemester;
import vn.edu.saigontech.source.Model.DarsOthersCourse;
import vn.edu.saigontech.source.Model.DarsOthersSemester;
import vn.edu.saigontech.source.Model.DarsStudentInfo;
import vn.edu.saigontech.source.Model.DarsStudentInfoScore;
import vn.edu.saigontech.source.Model.DarsTOEFL_IELTS;

public interface DarsService {
	public List<DarsStudentInfo> getDarsStudentInfo();
	public List<DarsTOEFL_IELTS> getDarsToEFL_ITELTS(String stuId);
	public DarsStudentInfoScore getDarsStudentInfoScore(String stuId, String id_seq); 
	public List<DarsEnrichmentSemester> getDarsEnrichmentSemester(String stuId);
	public List<DarsEnrichmentCourse> getDarsEnrichmentCourse(String stuId, String acaYear, String semester);
	public List<DarsOthersSemester> getDarsOthersSemester(String stuId);
	public List<DarsOthersCourse> getDarsOtherCourse(String stuId, String acaYear, String semester);
	public List<DarsDegreeGranted> getDarsDegreeGranted(String stuId);
}
