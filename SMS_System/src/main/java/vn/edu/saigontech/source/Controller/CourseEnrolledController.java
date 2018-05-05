package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import vn.edu.saigontech.source.Model.CourseEnrolled;

import vn.edu.saigontech.source.Service.ServiceImpl.CourseEnrolledService;

@CrossOrigin
@RestController
public class CourseEnrolledController {
	CourseEnrolledService courseEnrolledService;
	@RequestMapping(value = "/getCourseEnrolledList/{studentID}&{acaYear}&{Semester}", method = RequestMethod.GET, produces = "application/json")
	public List<CourseEnrolled> getCourseEnrolledList(@PathVariable("Semester") Integer Semester, @PathVariable("acaYear") Integer acaYear, @PathVariable("studentID") String studentID) {
		try {
			courseEnrolledService = new CourseEnrolledService();
			return courseEnrolledService.getCourseEnrolledList(Semester, acaYear, studentID);
		} catch (Exception e) {
			return null;
		}
	}
}
