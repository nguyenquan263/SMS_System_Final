package vn.edu.saigontech.source.Controller;

import java.sql.SQLException;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.SpecializationActived;
import vn.edu.saigontech.source.Service.ServiceImpl.SpecializationActivedService;

@CrossOrigin
@RestController
public class SpecializationActivedController {
	SpecializationActivedService specializationActivedService;
	
	@RequestMapping(value = "/getSpecializationActived", method = RequestMethod.GET, produces = "application/json")
	public List<SpecializationActived> getSpecializationActivedREST() {
		try {
			specializationActivedService= new SpecializationActivedService();
			return specializationActivedService.getSpecializationActived();
		} catch (Exception e) {
			return null;
		} 
	}

}
