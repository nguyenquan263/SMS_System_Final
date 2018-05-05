package vn.edu.saigontech.source.Controller;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.TimeTable;
import vn.edu.saigontech.source.Service.ServiceImpl.TimeTableService;;
//Written by Dang Quoc Thanh Phong
@CrossOrigin
@RestController
public class TimeTableController {
		TimeTableService timeTableService;
		//Receive parameter sent by get method
		@RequestMapping(value = "/getTimeTable/{studentID}&{academicYear}&{Semester}&{beginDate}&{endDate}", method = RequestMethod.GET, produces = "application/json")
		public TimeTable getTimeTable(@PathVariable("Semester") Integer Semester, @PathVariable("academicYear") Integer academicYear, @PathVariable("studentID") String studentID
				,@PathVariable("beginDate") String beginDate,@PathVariable("endDate") String endDate) {
		
			try {
				timeTableService = new TimeTableService();
				
				return timeTableService.getTimeTable(Semester, academicYear, studentID, beginDate, endDate);
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("Hello");
				return null;
			}
		}
}
