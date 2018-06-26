import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { EslSeoiService } from '../esl-seoi-service.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
declare var $: any;

@Component({
  selector: 'app-esl-seoi-listing',
  templateUrl: './esl-seoi-listing.component.html',
  styleUrls: ['./esl-seoi-listing.component.css'],
  providers: [CookieService, ConnectionService, EslSeoiService, StudentInfoforRegistrationService]
})
export class EslSeoiListingComponent implements OnInit {
  currSemester: any;
  listOfClassSEOI: any;
  currStudentID: string;
  currStudent: any;
  constructor(private router: Router, private studentInfoservice: StudentInfoforRegistrationService, private cookie: CookieService, private connectionLink: ConnectionService, private eslSEOIService: EslSeoiService) { }

  ngOnInit() {
    this.currStudentID = this.cookie.get('loginID');



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

        console.log(data);
        this.eslSEOIService.getESLSEOIList(this.currStudentID, data.acaYear, data.semester)
          .then(data1 => {
            console.log(data1);
            this.listOfClassSEOI = data1;
          });
      });

  }

  navigateToEvaluation(status: string, classID: string, teacherID: string){
    if (status == 'Incomplete'){
      // console.log(classID+" "+teacherID);
      this.cookie.set('ESLteacherID', teacherID);
      this.cookie.set('ESLclassID', classID);
      this.router.navigateByUrl('/ESLSEOIEvaluation');

    }
      
  }

}