package vn.edu.saigontech.source.Model;

import java.util.List;

public class AASSEOIQuestion {
	 private List<Question> firstGroupQuestions;
     private List<Question> secondGroupQuestions;
     private boolean isTutor;
     
	public AASSEOIQuestion() {
		super();
	}

	public AASSEOIQuestion(List<Question> firstGroupQuestions, List<Question> secondGroupQuestions, boolean isTutor) {
		super();
		this.firstGroupQuestions = firstGroupQuestions;
		this.secondGroupQuestions = secondGroupQuestions;
		this.isTutor = isTutor;
	}

	public List<Question> getfirstGroupQuestions() {
		return firstGroupQuestions;
	}

	public void setfirstGroupQuestions(List<Question> firstGroupQuestions) {
		this.firstGroupQuestions = firstGroupQuestions;
	}

	public List<Question> getSecondGroupQuestions() {
		return secondGroupQuestions;
	}

	public void setSecondGroupQuestions(List<Question> secondGroupQuestions) {
		this.secondGroupQuestions = secondGroupQuestions;
	}

	public boolean isTutor() {
		return isTutor;
	}

	public void setTutor(boolean isTutor) {
		this.isTutor = isTutor;
	}
     
}
