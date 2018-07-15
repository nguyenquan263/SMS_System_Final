package vn.edu.saigontech.source.DAO.DAOImpl;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

import vn.edu.saigontech.source.Model.AASSEOIQuestion;
import vn.edu.saigontech.source.Model.Question;
import vn.edu.saigontech.source.dbConnection.oConnection;

public class AASSEOIQuestionDAO implements vn.edu.saigontech.source.DAO.AASSEOIQuestionDAO {
	
	@Override
	public AASSEOIQuestion getAASSEOIQuestion(Integer classId, Integer instructorId) {
        EvaluationDAO evalDAO,evalDAO2;
		try {
			evalDAO = new EvaluationDAO();
			int classSeq = classId;
	        int instrSeq =instructorId;
		    List<Question> firstGroupQuestions = evalDAO.getFirstGroupQuestion();
		    evalDAO2 = new EvaluationDAO();
	        List<Question> secondGroupQuestions = evalDAO2.getSecondGroupQuestion();
	       
	        boolean isTutor = evalDAO.isTutor(classSeq, instrSeq);
	        
	        AASSEOIQuestion seoiQuestion =new AASSEOIQuestion(firstGroupQuestions, secondGroupQuestions,isTutor);
	        return seoiQuestion;
		} catch (ClassNotFoundException | SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}    
		
	}

}
