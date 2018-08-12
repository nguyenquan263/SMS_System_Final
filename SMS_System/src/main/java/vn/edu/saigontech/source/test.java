package vn.edu.saigontech.source;

import java.sql.SQLException;

import vn.edu.saigontech.source.Service.ServiceImpl.requestAASDegreeService;



public class test {
	public static void main(String[] args) {
		requestAASDegreeService req = new requestAASDegreeService();
		
		try {
			System.out.println(req.getRequestbyStudentID(13432));
			System.out.println(req.isStudentFinishAASProgram(13432));
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
