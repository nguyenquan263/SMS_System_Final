package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentAttendanceAAS;

import vn.edu.saigontech.source.Service.ServiceImpl.StudentAttendanceAASService;
//Written by Dang Quoc Thanh Phong
@CrossOrigin
@RestController
public class StudentAttendanceAASController {
	StudentAttendanceAASService studentAttendanceAASService;
	@RequestMapping(value = "/getStudentAttendanceAASList/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	//Receive parameter sent by get method
	public List<StudentAttendanceAAS> getStudentAttendanceAASList(@PathVariable("Semester") Integer Semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("studentID") String studentID) {
		try {
			studentAttendanceAASService = new StudentAttendanceAASService();
			return studentAttendanceAASService.getAllStudentAttendanceAAS(Semester, acaYear, studentID);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
