package vn.edu.saigontech.source.Controller;



import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.TimetableForRegis;

import vn.edu.saigontech.source.Service.ServiceImpl.TimetableForRegisService;

@CrossOrigin
@RestController
public class TimetableForRegisController {
	TimetableForRegisService timetableService;

	@RequestMapping(value = "/getTimetableREST/{classCode}&{acaYear}&{semester}", method = RequestMethod.GET, produces = "application/json")
	public TimetableForRegis getTimetableREST(@PathVariable("classCode") String classCode,
			@PathVariable("acaYear") String acaYear, @PathVariable("semester") String semester) {
		try {
			timetableService = new TimetableForRegisService();
			return timetableService.getTimetable(classCode, acaYear, semester);
		} catch (Exception e) {
			return null;
		}
	}

}
