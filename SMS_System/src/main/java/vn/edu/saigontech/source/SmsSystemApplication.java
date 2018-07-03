package vn.edu.saigontech.source;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.*;
import org.springframework.context.annotation.Bean;

import vn.edu.saigontech.source.Security.JwtFilter;


@SpringBootApplication
public class SmsSystemApplication {
	public static void main(String[] args) {
		SpringApplication.run(SmsSystemApplication.class, args);
	}
	
	
	@Bean
	public FilterRegistrationBean jwtFilter() {
		final FilterRegistrationBean registrationBean = new FilterRegistrationBean();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/*");
		return registrationBean;
	}
}
