package vn.edu.saigontech.source.Model;
public class ClassEvaluation
{
  private int classId;
  
  private int instructorId;
  private String className;
  private String instructorName;
  private int status;
  boolean checkEvaluationTime = false;
  boolean finishEvaluation = false;
  public ClassEvaluation() {}
  
  public ClassEvaluation(int classId, int instructorId, String className, String instructorName, int status)
  {
    this.classId = classId;
    this.instructorId = instructorId;
    this.className = className;
    this.instructorName = instructorName;
    this.status = status;
  }
		public boolean isCheckEvaluationTime() {
			return checkEvaluationTime;
		}
	
		public void setCheckEvaluationTime(boolean checkEvaluationTime) {
			 this.checkEvaluationTime = checkEvaluationTime;
		}
	
		public boolean isFinishEvaluation() {
			return finishEvaluation;
		}
	
		public void setFinishEvaluation(boolean finishEvaluation) {
			this.finishEvaluation = finishEvaluation;
		}

	public int getClassId() {
	    return classId;
	  }
  
  public void setClassId(int classId) {
    this.classId = classId;
  }
  
  public String getClassName() {
    return className;
  }
  
  public void setClassName(String className) {
    this.className = className;
  }
  
  public int getInstructorId() {
    return instructorId;
  }
  
  public void setInstructorId(int instructorId) {
    this.instructorId = instructorId;
  }
  
  public String getInstructorName() {
    return instructorName;
  }
  
  public void setInstructorName(String instructorName) {
    this.instructorName = instructorName;
  }
  
  public int getStatus() {
    return status;
  }
  
  public void setStatus(int status) {
    this.status = status;
  }
}
