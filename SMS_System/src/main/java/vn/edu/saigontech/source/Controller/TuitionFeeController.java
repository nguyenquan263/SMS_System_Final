package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.TuitionFee;
import vn.edu.saigontech.source.Service.ServiceImpl.TuitionFeeService;
//Written by Dang Quoc Thanh Phong
@CrossOrigin
@RestController
public class TuitionFeeController {
	TuitionFeeService tuitionFeeService;
	//Receive parameter sent by get method
	@RequestMapping(value = "/getTuitionFee/{studentID}&{academicYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<TuitionFee> getTuitionFee(@PathVariable("Semester") Integer Semester, @PathVariable("academicYear") Integer academicYear, @PathVariable("studentID")  Integer studentID) {
		try {
			tuitionFeeService = new TuitionFeeService();
			return tuitionFeeService.getTuitionFee(Semester, academicYear, studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
