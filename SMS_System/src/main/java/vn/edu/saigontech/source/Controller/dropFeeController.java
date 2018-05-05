package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.DropFee;
import vn.edu.saigontech.source.Service.ServiceImpl.DropFeeService;
//Written by Dang Quoc Thanh Phong
@CrossOrigin
@RestController
public class dropFeeController {
	//Receive parameter sent by get method
	DropFeeService dropFeeService;
	@RequestMapping(value = "/getDropFee/{studentID}&{academicYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<DropFee> getDropFee(@PathVariable("Semester") Integer Semester, @PathVariable("academicYear") Integer academicYear, @PathVariable("studentID") String studentID) {
		try {
			dropFeeService = new DropFeeService();
			return dropFeeService.getDropFee(Semester, academicYear, studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
