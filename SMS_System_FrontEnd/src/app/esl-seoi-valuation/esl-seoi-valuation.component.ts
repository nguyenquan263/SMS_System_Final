import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { EslSeoiService } from '../esl-seoi-service.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
declare var $: any;

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
  constructor(private studentInfoservice: StudentInfoforRegistrationService, private cookie: CookieService, private connectionLink: ConnectionService, private eslSEOIService: EslSeoiService) { }

  ngOnInit() {

    this.eslSEOIService.getSystemTime()
      .then(data => {
        
        this.currSemester = data;
        console.log(this.currSemester);
        this.studentInfoservice.getStudentinfoforRegistration1(this.currSemester.acaYear, this.currSemester.semester, this.cookie.get('loginID'))
          .then(data => {
            this.currStudent = data;
            console.log(this.currStudent);
            $("#stuFullName").text(this.currStudent.studentName);

          });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
          .then(data => {
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
          });

        this.eslSEOIService.getESLSEOIQuestionList('0', data.acaYear, data.semester)
          .then(data1 => {
            console.log(data1);
            this.questions = data1;
          });
        
        this.eslSEOIService.getTeacherInfo(this.cookie.get('ESLteacherID'),this.cookie.get('ESLclassID'))
        .then(data2 => {
          this.currInformation = data2;
          console.log(this.currInformation);
        });
      });


  }

  submitSEOI(){
    let questionIDString = '';
    let pointsString = '';

    for (var i = 0 ; i < this.questions.length; i ++){
      // console.log(this.questions[i].questionID+" "+$('input[name='+this.questions[i].questionID+']:checked').val());
      questionIDString+= this.questions[i].questionID+" ";
      pointsString += $('input[name='+this.questions[i].questionID+']:checked').val()+" ";

    }

    this.eslSEOIService.addPoints(this.cookie.get('loginID'), this.currSemester.semester, this.currSemester.acaYear, this.cookie.get('ESLteacherID'), this.cookie.get('ESLclassID'), questionIDString, pointsString);

    let comment = $('#commentTA').val();
    console.log(comment);

    this.eslSEOIService.addComment(this.cookie.get('loginID'), this.currSemester.semester, this.currSemester.acaYear, this.cookie.get('ESLteacherID'), this.cookie.get('ESLclassID'), comment);
  }

}