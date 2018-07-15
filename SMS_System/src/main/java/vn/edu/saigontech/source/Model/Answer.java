package vn.edu.saigontech.source.Model;
public class Answer
{
  private int stuSeq;
  
  private int classSeq;
  private int quesSeq;
  private int instrSeq;
  private int answerValue;
  
  public Answer() {}
  
  public Answer(int stuSeq, int classSeq, int quesSeq, int instrSeq, int answerValue)
  {
    this.stuSeq = stuSeq;
    this.classSeq = classSeq;
    this.quesSeq = quesSeq;
    this.instrSeq = instrSeq;
    this.answerValue = answerValue;
  }
  
  public int getAnswerValue() {
    return answerValue;
  }
  
  public void setAnswerValue(int answerValue) {
    this.answerValue = answerValue;
  }
  
  public int getClassSeq() {
    return classSeq;
  }
  
  public void setClassSeq(int classSeq) {
    this.classSeq = classSeq;
  }
  
  public int getInstrSeq() {
    return instrSeq;
  }
  
  public void setInstrSeq(int instrSeq) {
    this.instrSeq = instrSeq;
  }
  
  public int getQuesSeq() {
    return quesSeq;
  }
  
  public void setQuesSeq(int quesSeq) {
    this.quesSeq = quesSeq;
  }
  
  public int getStuSeq() {
    return stuSeq;
  }
  
  public void setStuSeq(int stuSeq) {
    this.stuSeq = stuSeq;
  }

@Override
public String toString() {
	return "Answer [stuSeq=" + stuSeq + ", classSeq=" + classSeq + ", quesSeq=" + quesSeq + ", instrSeq=" + instrSeq
			+ ", answerValue=" + answerValue + "]";
}
  
}
