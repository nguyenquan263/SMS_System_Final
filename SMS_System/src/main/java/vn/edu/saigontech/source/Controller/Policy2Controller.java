package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.HCCTranscriptGeneralInfo;
import vn.edu.saigontech.source.Model.Policy2Model;
import vn.edu.saigontech.source.Service.ServiceImpl.HCCTranscriptService;
import vn.edu.saigontech.source.Service.ServiceImpl.Policy2Service;
/** This class gets Policy2 data from API
 * @author Nguyen Bao Hoang Long
 * Written on 22/03/2018
 */

@CrossOrigin
@RestController
public class Policy2Controller {
	private Policy2Service policy2Service;
	
	/** Gets policy 2 data
	 * @param semester Semester Id
	 * @param acaYear Academic year
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getPolicy2Data/{semester}&{acaYear}&{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<Policy2Model> getPolicy2Data(@PathVariable("semester") String semester,
			@PathVariable("acaYear") String acaYear, @PathVariable("stuId") String stuId) {
		try {
			policy2Service = new Policy2Service();
			return policy2Service.getPolicy2Data(semester, acaYear, stuId);
		} catch (Exception e) {
			return null;
		}
	}
}
