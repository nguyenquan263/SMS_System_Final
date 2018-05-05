package vn.edu.saigontech.source.Service.ServiceImpl;

import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.DAO.DAOImpl.DarsDAO;
import vn.edu.saigontech.source.DAO.DAOImpl.Policy2DAO;
import vn.edu.saigontech.source.Model.DarsDegreeGranted;
import vn.edu.saigontech.source.Model.DarsEnrichmentCourse;
import vn.edu.saigontech.source.Model.DarsEnrichmentSemester;
import vn.edu.saigontech.source.Model.DarsOthersCourse;
import vn.edu.saigontech.source.Model.DarsOthersSemester;
import vn.edu.saigontech.source.Model.DarsStudentInfo;
import vn.edu.saigontech.source.Model.DarsStudentInfoScore;
import vn.edu.saigontech.source.Model.DarsTOEFL_IELTS;

public class DarsService implements vn.edu.saigontech.source.Service.DarsService{
	private DarsDAO darsDAO;
	
	public DarsService() throws ClassNotFoundException, SQLException {
		darsDAO = new DarsDAO();
	}
	
	@Override
	public List<DarsStudentInfo> getDarsStudentInfo() {
		return darsDAO.getDarsStudentInfo();
	}

	@Override
	public List<DarsTOEFL_IELTS> getDarsToEFL_ITELTS(String stuId) {
		return darsDAO.getDarsTOEFL_IELTS(stuId);
	}

	@Override
	public DarsStudentInfoScore getDarsStudentInfoScore(String stuId, String id_seq) {
		return darsDAO.getDarsStudentInfoScore(stuId, id_seq);
	}

	@Override
	public List<DarsEnrichmentSemester> getDarsEnrichmentSemester(String stuId) {
		return darsDAO.getDarsEnrichmentSemester(stuId);
	}

	@Override
	public List<DarsEnrichmentCourse> getDarsEnrichmentCourse(String stuId, String acaYear, String semester) {
		return darsDAO.getDarsEnrichmentCourse(stuId, acaYear, semester);
	}

	@Override
	public List<DarsOthersSemester> getDarsOthersSemester(String stuId) {
		return darsDAO.getDarsOthersSemester(stuId);
	}

	@Override
	public List<DarsOthersCourse> getDarsOtherCourse(String stuId, String acaYear, String semester) {
		return darsDAO.getDarsOtherCourse(stuId, acaYear, semester);
	}

	@Override
	public List<DarsDegreeGranted> getDarsDegreeGranted(String stuId) {
		return darsDAO.getDarsDegreeGranted(stuId);
	}

}
