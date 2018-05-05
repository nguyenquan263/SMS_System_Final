package vn.edu.saigontech.source.Controller;


import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.AASRegistrationResult;
import vn.edu.saigontech.source.Model.BeforeAASRegistration;
import vn.edu.saigontech.source.Service.ServiceImpl.AASRegistraionService;


@CrossOrigin
@RestController
public class AASRegistrationController {
	AASRegistraionService aasRegistraionService;
	
	@RequestMapping(value = "/insertCourseRegistrationREST", method = RequestMethod.POST, produces = "application/json", consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public AASRegistrationResult insertCourseRegistrationREST(
			@RequestParam("studentID") Integer studentID,
			@RequestParam("domain") Integer domain,
//			@RequestParam("ipAddress") String ipAddress,
			@RequestParam("acaYear") Integer acaYear,
			@RequestParam("semester") Integer semester,
			@RequestParam("classCode") String classCode,
			@RequestParam("catalog") Integer catalog,
			@RequestParam("isToefl") Integer isToefl,
			HttpServletRequest request)
	{
		try {
			String ipAddress= request.getRemoteAddr();
			aasRegistraionService = new AASRegistraionService();
			return aasRegistraionService.insertCourseRegistration(studentID, domain, ipAddress, acaYear, semester, classCode,catalog,isToefl);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return null;
		} 		
	}
	
	@RequestMapping(value = "/deleteCourseRegistrationREST", method = RequestMethod.POST, produces = "application/json", consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public Integer deleteCourseRegistrationREST(
			@RequestParam("studentID") Integer studentID,
			@RequestParam("domain") Integer domain,
//			@RequestParam("ipAddress") String ipAddress,
			@RequestParam("acaYear") Integer acaYear,
			@RequestParam("semester") Integer semester,
			@RequestParam("classCode") String classCode,
			HttpServletRequest request)
	{
		try {
			aasRegistraionService = new AASRegistraionService();
			String ipAddress= request.getRemoteAddr();
			return aasRegistraionService.deleteCourseRegistration(studentID, domain, ipAddress, acaYear, semester, classCode);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return 0;
		} 		
	}
	
	@RequestMapping(value = "/getBeforeAASRegistration", method = RequestMethod.POST, produces = "application/json", consumes = {
			"application/x-www-form-urlencoded", "multipart/form-data" })
	public BeforeAASRegistration getBeforeAASRegistration(
			@RequestParam("studentID") Integer studentID,
			@RequestParam("acaYear") Integer acaYear,
			@RequestParam("semester") Integer semester)
	{
		try {
			aasRegistraionService = new AASRegistraionService();	
			return aasRegistraionService.beforeAasRegistration(studentID, acaYear, semester);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return null;
		} 		
	}
	private Map<String, String> getHeadersInfo(HttpServletRequest request) {

        Map<String, String> map = new HashMap<String, String>();

        Enumeration headerNames = request.getHeaderNames();
        while (headerNames.hasMoreElements()) {
            String key = (String) headerNames.nextElement();
            String value = request.getHeader(key);
            map.put(key, value);
        }

        return map;
    }
	
	
}
