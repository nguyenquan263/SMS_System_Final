package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentAttendanceGE;
import vn.edu.saigontech.source.Service.ServiceImpl.StudentAttendanceGEService;
//Written by Dang Quoc Thanh Phong
@CrossOrigin
@RestController
public class StudentAttendanceGEController {
	StudentAttendanceGEService studentAttendanceGEService;
	//Receive parameter sent by get method
	@RequestMapping(value = "/getStudentAttendanceGEList/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<StudentAttendanceGE> getStudentAttendanceGEList(@PathVariable("Semester") Integer Semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("studentID") String studentID) {
		try {
			studentAttendanceGEService = new StudentAttendanceGEService();
			return studentAttendanceGEService.getAllStudentAttendanceGE(Semester, acaYear, studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
