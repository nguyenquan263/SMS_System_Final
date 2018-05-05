package vn.edu.saigontech.source.Service;

import java.util.List;

import vn.edu.saigontech.source.Model.EnrichmentOffered;
import vn.edu.saigontech.source.Model.EnrichmentRegistered;

public interface EnrichmentRegistrationService {
	public List<EnrichmentRegistered> getEnrichmentRegistered(Integer acaYear,Integer semester,Integer studentID);
	public List<EnrichmentOffered> getEnrichmentOffered(Integer acaYear,Integer semester,
			Integer studentID,Integer majorCode);
}
