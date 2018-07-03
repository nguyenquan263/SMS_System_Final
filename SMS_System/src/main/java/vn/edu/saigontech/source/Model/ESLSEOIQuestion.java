package vn.edu.saigontech.source.Model;
//written by Nguyen Ngoc Minh Quan
//this class is using to store information of questions which will be shown
//in the evaluate site.
public class ESLSEOIQuestion {
	//id of this question
	private Integer questionID;
	//content of this question in english
	private String questionLeftContent;
	//content of this question in vietnamese
	private String questionLeftContentVN;
	public ESLSEOIQuestion(Integer questionID, String questionLeftContent, String questionLeftContentVN) {
		super();
		this.questionID = questionID;
		this.questionLeftContent = questionLeftContent;
		this.questionLeftContentVN = questionLeftContentVN;
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
	public String getQuestionLeftContentVN() {
		return questionLeftContentVN;
	}
	public void setQuestionLeftContentVN(String questionLeftContentVN) {
		this.questionLeftContentVN = questionLeftContentVN;
	}
	@Override
	public String toString() {
		return "ESLSEOIQuestion [questionID=" + questionID + ", questionLeftContent=" + questionLeftContent
				+ ", questionLeftContentVN=" + questionLeftContentVN + "]";
	}
	
	
	
	

}
