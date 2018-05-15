import java.sql.SQLException;

import vn.edu.saigontech.source.DAO.DAOImpl.seoiESLDAO;

public class test {
	public static void main(String[] args) throws ClassNotFoundException, SQLException {
		seoiESLDAO sed = new seoiESLDAO();
		
		System.out.println(sed.getAllESLClassForSEOI(3, 2017, 13960));
	}

}
