package vn.edu.saigontech.source.Service.ServiceImpl;
import vn.edu.saigontech.source.DAO.DAOImpl.AASSEOIQuestionDAO;

import vn.edu.saigontech.source.Model.AASSEOIQuestion;

public class AASSEOIQuestionService  implements vn.edu.saigontech.source.Service.AASSEOIQuestionSerivce {
	private AASSEOIQuestionDAO  aasSEOIQuestionDAO;
	@Override
	public AASSEOIQuestion getAASSEOIQuestion(Integer classId, Integer instructorId) {
		// TODO Auto-generated method stub
		aasSEOIQuestionDAO = new AASSEOIQuestionDAO();
		return aasSEOIQuestionDAO.getAASSEOIQuestion(classId, instructorId);
	}

}
