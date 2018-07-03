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
            //get information of current student.
            this.currStudent = data;
            console.log(this.currStudent);
            $("#stuFullName").text(this.currStudent.studentName);

          });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
          .then(data => {
            //push the arvatar to navbar.
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
          });

        console.log(data);
        //get list of class that have SEOI. with status.
        this.eslSEOIService.getESLSEOIList(this.currStudentID, data.acaYear, data.semester)
          .then(data1 => {
            console.log(data1);
            this.listOfClassSEOI = data1;
          });
      });

  }

  //access the evaluation page.
  navigateToEvaluation(status: string, classID: string, teacherID: string){
    if (status == 'Incomplete'){
      // console.log(classID+" "+teacherID);]
      //push teacherid to cookie.
      this.cookie.set('ESLteacherID', teacherID);
      //push classid to cookie.
      this.cookie.set('ESLclassID', classID);
      this.router.navigateByUrl('/ESLSEOIEvaluation');

    }
      
  }
  //check status and add color to style of those statuses.
  textColor(status: string): string{
    if (status == 'Incomplete'){
      return 'blue'
    } else if (status == 'Completed') {
      return 'green'
    } return 'red';
  }

}