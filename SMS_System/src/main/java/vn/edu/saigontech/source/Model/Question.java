package vn.edu.saigontech.source.Model;

public class Question
{
  private int idSeq;
  
  private String engContent;
  private String vnContent;
  private String label;
  private int orderId;
  private int type;
  private int status;
  
  public Question() {}
  
  public Question(int idSeq, String engContent, String vnContent, int orderId, int type, int status)
  {
    this.idSeq = idSeq;
    this.engContent = engContent;
    this.vnContent = vnContent;
    this.orderId = orderId;
    this.type = type;
    this.status = status;
  }
  
  public String getEngContent() {
    return engContent;
  }
  
  public void setEngContent(String engContent) {
    this.engContent = engContent;
  }
  
  public int getIdSeq() {
    return idSeq;
  }
  
  public void setIdSeq(int idSeq) {
    this.idSeq = idSeq;
  }
  
  public int getOrderId() {
    return orderId;
  }
  
  public void setOrderId(int orderId) {
    this.orderId = orderId;
  }
  
  public int getStatus() {
    return status;
  }
  
  public void setStatus(int status) {
    this.status = status;
  }
  
  public int getType() {
    return type;
  }
  
  public void setType(int type) {
    this.type = type;
  }
  
  public String getVnContent() {
    return vnContent;
  }
  
  public void setVnContent(String vnContent) {
    this.vnContent = vnContent;
  }

public String getLabel() {
	return label;
}

public void setLabel(String label) {
	this.label = label;
}
}