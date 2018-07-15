package vn.edu.saigontech.source.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vn.edu.saigontech.source.Model.AASSEOIQuestion;
import vn.edu.saigontech.source.Service.ServiceImpl.AASSEOIQuestionService;

@CrossOrigin
@RestController
public class AASSEOIQuestionController {
	AASSEOIQuestionService aasSEOIQuestionService;
	
	@RequestMapping(value = "/getAASSEOIQuestion/{classId}&{instructorId}", method = RequestMethod.GET, produces = "application/json")
	public AASSEOIQuestion getAASSEOIQuestionService(@PathVariable("classId") int classId,
			@PathVariable("instructorId") int instructorId) {
		try {
			 aasSEOIQuestionService= new AASSEOIQuestionService();
			
			return aasSEOIQuestionService.getAASSEOIQuestion(classId, instructorId);
		} catch (Exception e) {
			return null;
		} 
	}
}
