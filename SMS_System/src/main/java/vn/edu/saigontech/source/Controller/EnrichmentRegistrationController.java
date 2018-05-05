package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.EnrichmentOffered;
import vn.edu.saigontech.source.Model.EnrichmentRegistered;
import vn.edu.saigontech.source.Service.ServiceImpl.EnrichmentRegistrationService;
@CrossOrigin
@RestController
public class EnrichmentRegistrationController {
	EnrichmentRegistrationService enrichmentRegistrationService;
	
	@RequestMapping(value = "/getEnrichmentRegistered/{acaYear}&{semester}&{studentID}", method = RequestMethod.GET, produces = "application/json")
	public List<EnrichmentRegistered> getEnrichmentRegistered(@PathVariable("acaYear") int acaYear,
			@PathVariable("semester") int semester,@PathVariable("studentID") int studentID) {
		try {
			enrichmentRegistrationService= new EnrichmentRegistrationService();
			return enrichmentRegistrationService.getEnrichmentRegistered(acaYear, semester, studentID);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		} 
	}
	
	@RequestMapping(value = "/getEnrichmentOffered/{acaYear}&{semester}&{studentID}&{majorCode}", method = RequestMethod.GET, produces = "application/json")
	public List<EnrichmentOffered> getEnrichmentOffered(@PathVariable("acaYear") int acaYear,
			@PathVariable("semester") int semester,@PathVariable("studentID") int studentID,
			@PathVariable("majorCode") int majorCode) {
		try {
			enrichmentRegistrationService= new EnrichmentRegistrationService();
			return enrichmentRegistrationService.getEnrichmentOffered(acaYear, semester, studentID, majorCode);
		} catch (Exception e) {
			return null;
		} 
	}
}
