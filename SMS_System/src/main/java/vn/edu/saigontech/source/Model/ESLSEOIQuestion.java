package vn.edu.saigontech.source.Model;

public class ESLSEOIQuestion {
	private Integer questionID;
	private String questionLeftContent;
	public ESLSEOIQuestion(Integer questionID, String questionLeftContent) {
		super();
		this.questionID = questionID;
		this.questionLeftContent = questionLeftContent;
	}
	public ESLSEOIQuestion() {
		super();
	}
	public Integer getQuestionID() {
		return questionID;
	}
	public void setQuestionID(Integer questionID) {
		this.questionID = questionID;
	}
	public String getQuestionLeftContent() {
		return questionLeftContent;
	}
	public void setQuestionLeftContent(String questionLeftContent) {
		this.questionLeftContent = questionLeftContent;
	}
	@Override
	public String toString() {
		return "ESLSEOIQuestion [questionID=" + questionID + ", questionLeftContent=" + questionLeftContent + "]";
	}
	
	

}
