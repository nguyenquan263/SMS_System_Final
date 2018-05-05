import { Component, OnInit } from '@angular/core';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
import { CookieService } from 'ngx-cookie-service';
import { SemesterInformationService } from '../semester-info.service';
import { EslclassServiceService } from '../eslclass-service.service';
import { ConnectionService } from '../connection.service';
import { TimetableService } from '../timetable.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-esl-registration',
  templateUrl: './esl-registration.component.html',
  styleUrls: ['./esl-registration.component.css'],
  providers: [TimetableService, ConnectionService, EslclassServiceService, StudentInfoforRegistrationService, CookieService, SemesterInformationService]
})
export class EslRegistrationComponent implements OnInit {

  currStudent: any;
  eslClassavailable: any;
  eslClassregistered: any;
  //---------------------------------------------------
  currStudentID: string;
  currTimetable: any;
  currSemester: any;

  constructor(private studentInfoservice: StudentInfoforRegistrationService
    , private cookie: CookieService
    , private semesterService: SemesterInformationService
    , private ESLClassService: EslclassServiceService
    , private TimetableService: TimetableService
    , private router: Router) { }

  ngOnInit() {
    this.currStudentID = this.cookie.get('loginID');
    this.semesterService.getSemesterInformation()
      .then(data => {
        this.currSemester = data;
        this.studentInfoservice.getStudentinfoforRegistration1(this.currSemester.acaYear, this.currSemester.semester,this.cookie.get('loginID'))
          .then(data => {
            this.currStudent = data;
            console.log(this.currStudent);
            $("#stuFullName").text(this.currStudent.studentName);

          });
        this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
          .then(data => {
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
          });

        this.ESLClassService.getESLClassRegistered(this.currStudentID
          , this.currSemester.acaYear
          , this.currSemester.semester)
          .then(data1 => {
            console.log(data1);
            this.eslClassregistered = data1;
          });

        this.ESLClassService.getESLClassAvailable(this.currStudentID
          , this.currSemester.acaYear
          , this.currSemester.semester)
          .then(data2 => {
            console.log(data2);
            this.eslClassavailable = data2;
          });
      });
  }

  addClass() {
    let checkedOpenclassCodearr = [];
    $(".openedChecked:checked").each(function () {
      checkedOpenclassCodearr.push($(this).val());
    });
    console.log(checkedOpenclassCodearr);
    let openedClassstring: string = "";

    for (let cl1 of checkedOpenclassCodearr) {
      openedClassstring += cl1 + ",";
    }

    console.log(openedClassstring);


    this.ESLClassService.addESLClass(this.currStudentID
      , this.currSemester.acaYear
      , this.currSemester.semester
      , openedClassstring);
    setTimeout(() => {
      this.semesterService.getSemesterInformation()
        .then(data => {
          this.currSemester = data;
          this.ESLClassService.getESLClassRegistered(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data1 => {
              this.eslClassregistered = data1;
            });

          this.ESLClassService.getESLClassAvailable(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data2 => {
              this.eslClassavailable = data2;
            });
        });
    }, 1000);

  }

  testCheckbox(event: any) {
    console.log(event.target.value);
  }

  deleteClass() {
    let ClassCodeandStudyCode = [];

    $(".registeredChecked:checked").each(function () {
      ClassCodeandStudyCode.push($(this).val());
    });

    let classCode = [];
    let studyCode = [];

    for (let cl of ClassCodeandStudyCode) {
      let temp: string = cl;
      classCode.push(temp.split('|')[0]);
      studyCode.push(temp.split('|')[1]);
    }



    let classCodestring: string = "";
    let studyCodestring: string = "";

    for (let i: number = 0; i < classCode.length; i++) {
      classCodestring += classCode[i] + ",";
      studyCodestring += studyCode[i] + ",";
    }


    this.ESLClassService.deleteESLClass(this.currStudentID
      , this.currSemester.acaYear
      , this.currSemester.semester
      , classCodestring);
    setTimeout(() => {
      this.semesterService.getSemesterInformation()
        .then(data => {
          this.currSemester = data;
          this.ESLClassService.getESLClassRegistered(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data1 => {
              this.eslClassregistered = data1;
            });

          this.ESLClassService.getESLClassAvailable(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data2 => {
              this.eslClassavailable = data2;
            });
        });
    }, 1000);



  }

  showTimetable(classCode: string) {
    this.TimetableService.getTimetableRegis(classCode, this.currSemester.acaYear, this.currSemester.semester)
      .then(data => {
        this.currTimetable = data;
        console.log(this.currTimetable.timetableMatrix);
      });
    setTimeout(() => {
      $('.bd-example-modal-lg').modal();
    }, 200);

  }

}
