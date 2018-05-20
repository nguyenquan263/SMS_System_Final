import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { EslSeoiService } from '../esl-seoi.service';
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
  constructor(private studentInfoservice: StudentInfoforRegistrationService, private cookie: CookieService, private connectionLink: ConnectionService, private eslSEOIService: EslSeoiService) { }

  ngOnInit() {
    this.eslSEOIService.getSystemTime()
      .then(data => {
        this.currSemester = data;

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
          });
      });


  }

}
