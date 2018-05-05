package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.AcademicYear;
import vn.edu.saigontech.source.Model.SystemDateAndTime;
import vn.edu.saigontech.source.Model.SystemTime;
import vn.edu.saigontech.source.Model.StudentInformation;
import vn.edu.saigontech.source.Service.ServiceImpl.SystemTimeService;

@CrossOrigin
@RestController
public class SystemTimeController {
	SystemTimeService systemTimeService;
	
	@RequestMapping(value = "/getSystemTimeREST", method = RequestMethod.GET, produces = "application/json")
	public SystemTime getSystemTimeREST() {
		try {
			systemTimeService = new SystemTimeService();
			return systemTimeService.getSystemTime();
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getAcademicYear", method = RequestMethod.GET, produces = "application/json")
	public List<AcademicYear> getAcademicYear() {
		try {
			systemTimeService = new SystemTimeService();
			return systemTimeService.getAcaYear();
		} catch (Exception e) {
			return null;
		}
	}
	
	@RequestMapping(value = "/getSystemDateAndTime/{format}", method = RequestMethod.GET, produces = "application/json")
	public SystemDateAndTime getSystemDateAndTime(@PathVariable("format") String format) {
		try {
			systemTimeService = new SystemTimeService();
			return systemTimeService.getSystemDateAndTime(format);
		} catch (Exception e) {
			return null;
		}
	}
	
	
	
}
