package vn.edu.saigontech.source.dbConnection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.stereotype.Repository;

import ch.qos.logback.core.db.DataSourceConnectionSource;

@Configuration
@PropertySource("classpath:application.properties")
@Repository
public class oConnection {
	@Autowired
	private static DataSource dataSource;
	public static Connection getOracleConnection() throws SQLException {
		AnnotationConfigApplicationContext ctx = new AnnotationConfigApplicationContext();
		try {
			ctx.register(oConnection.class);
			ctx.refresh();
			Environment p = ctx.getEnvironment();
			String driverName = p.getProperty("spring.datasource.driverName");
			String hostName = p.getProperty("spring.datasource.hostname");
			String dbPort = p.getProperty("spring.datasource.dbPort");
			String sid = p.getProperty("spring.datasource.sid");
			String userName = p.getProperty("spring.datasource.username");
			String password = p.getProperty("spring.datasource.password");

			return getOracleConnection(driverName, hostName, dbPort, sid, userName, password);
		} catch (Exception e) {
			System.out.println(e);
			return null;
		} finally {
			ctx.close();
		}


	}

	public static Connection getOracleConnection(String driverName, String hostName, String dbPort, String sid,
			String userName, String password) throws ClassNotFoundException, SQLException {
		
		DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());
		
		String connectionURL = driverName + ":@" + hostName + ":" + dbPort + ":" + sid;

		Connection conn = DriverManager.getConnection(connectionURL, userName, password);
		return conn;
	}
}