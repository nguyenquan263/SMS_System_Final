package vn.edu.saigontech.source.Controller;

import java.util.List;
//Written by Dang Quoc Thanh Phong
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.StudentAttendanceDateLearn;

import vn.edu.saigontech.source.Service.ServiceImpl.StudentAttendanceDateLearnServive;
@CrossOrigin
@RestController
//Receive parameter sent by get method
public class StudentAttendanceDateLearnController {
	StudentAttendanceDateLearnServive studentAttendanceDateLearnService;
	@RequestMapping(value = "/getAllStudentAttendanceDateLearn/{studentId}&{academicYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<StudentAttendanceDateLearn> getAllStudentAttendanceDateLearn(@PathVariable("Semester") Integer Semester, @PathVariable("academicYear") Integer academicYear, @PathVariable("studentId") String studentId) {
		try {
			studentAttendanceDateLearnService = new StudentAttendanceDateLearnServive();
			return studentAttendanceDateLearnService.getAllStudentAttendanceDateLearn(Semester, academicYear, studentId);
		} catch (Exception e) {
			return null;
		}
	}
}
