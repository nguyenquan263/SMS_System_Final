import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { EslSeoiService } from '../esl-seoi-service.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
declare var $: any;
declare var PNotify: any;

@Component({
  selector: 'app-esl-seoi-valuation',
  templateUrl: './esl-seoi-valuation.component.html',
  styleUrls: ['./esl-seoi-valuation.component.css'],
  providers: [CookieService, ConnectionService, EslSeoiService, StudentInfoforRegistrationService]
})
export class EslSeoiValuationComponent implements OnInit {
  currSemester: any;
  listOfQuestionSEOI: any;
  currStudentID: string;
  currStudent: any;

  currInformation: any;
  questions: any;
  constructor(private studentInfoservice: StudentInfoforRegistrationService, private cookie: CookieService, private connectionLink: ConnectionService, private eslSEOIService: EslSeoiService, private router: Router) { }

  ngOnInit() {

    this.eslSEOIService.getSystemTime()
      .then(data => {
        //get information of current semester.
        this.currSemester = data;
        console.log(this.currSemester);
        this.studentInfoservice.getStudentinfoforRegistration1(this.currSemester.acaYear, this.currSemester.semester, this.cookie.get('loginID'))
          .then(data => {
            //get information of current student.
            this.currStudent = data;
            console.log(this.currStudent);
            $("#stuFullName").text(this.currStudent.studentName);

          });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
          .then(data => {
            //push image to navbar.
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
          });

        this.eslSEOIService.getESLSEOIQuestionList('0', data.acaYear, data.semester)
          .then(data1 => {
            //get question list of this ESL SEOI.
            console.log(data1);
            this.questions = data1;
          });
        
        this.eslSEOIService.getTeacherInfo(this.cookie.get('ESLteacherID'),this.cookie.get('ESLclassID'))
        .then(data2 => {
          //get teacher of this class.
          this.currInformation = data2;
          console.log(this.currInformation);
        });
      });


  }
  //submit those answers to database. 
  submitSEOI(){
    let questionIDString = '';
    let pointsString = '';
    let ok: boolean = true;

    for (var i = 0 ; i < this.questions.length; i ++){

      // console.log(this.questions[i].questionID+" "+$('input[name='+this.questions[i].questionID+']:checked').val());
      //get string of question id.
      questionIDString+= this.questions[i].questionID+" ";
      //get points that are chosen by users.
      pointsString += $('input[name='+this.questions[i].questionID+']:checked').val()+" ";
      
    }
    alert(ok);
    console.log(questionIDString);
    console.log(pointsString);

    let comment = $('#commentTA').val()+"";
    console.log(comment);

    if (pointsString.indexOf('undefined') == -1){
      //add those point to backend.
      this.eslSEOIService.addPoints(this.cookie.get('loginID'), this.currSemester.semester, this.currSemester.acaYear, this.cookie.get('ESLteacherID'), this.cookie.get('ESLclassID'), questionIDString, pointsString);

      
      //add those comment to backend if not null.
      if (comment != "")
        this.eslSEOIService.addComment(this.cookie.get('loginID'), this.currSemester.semester, this.currSemester.acaYear, this.cookie.get('ESLteacherID'), this.cookie.get('ESLclassID'), comment);

      var notification0 = new PNotify({
        title: 'Notification: ',
        text: "Thanks for your evaluation on Class "+ this.currInformation.className+" by Mr/Ms "+ this.currInformation.lastName+" "+this.currInformation.firstName
      });

      this.router.navigateByUrl('/ESLSEOI');
    } else {
      var notification0 = new PNotify({
        title: 'Notification: ',
        text: "Please fill in all neccessary information(s)."
      });
    }

  }

}