package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.DAO.DAOImpl.DegreePlanDAO;
import vn.edu.saigontech.source.Model.DegreePlanAttachment;
/** This class gets degreePlan pdf file link through REST services
 * @author Nguyen Bao Hoang Long
 * Written on 22/03/2018
 */

@CrossOrigin
@RestController
public class DegrreePlanController {

	private DegreePlanDAO degreePlanDAO;
	
	/** Get degree plan pdf file link
	 * @param stuId Student Id
	 */
	@RequestMapping(value = "/getDegreePlanAttachment/{stuId}", method = RequestMethod.GET, produces = "application/json")
	public List<DegreePlanAttachment> getDegreePlanAttachment(@PathVariable("stuId") String stuId) {
		try {
			degreePlanDAO = new DegreePlanDAO();
			return degreePlanDAO.getDegreePlanAttachment(stuId);
		} catch (Exception e) {
			return null;
		}
	}
}
