import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
import { CookieService } from 'ngx-cookie-service';
import { SemesterInformationService } from '../semester-info.service';
import { VnclassServiceService } from '../vnclass-service.service';
import { ConnectionService } from '../connection.service';
import { TimetableService } from '../timetable.service';
declare var $: any;

@Component({
  selector: 'app-vn-registration',
  templateUrl: './vn-registration.component.html',
  styleUrls: ['./vn-registration.component.css'],
  providers: [TimetableService, ConnectionService, VnclassServiceService, StudentInfoforRegistrationService, CookieService,SemesterInformationService]
})
export class VnRegistrationComponent implements OnInit {
  currStudent: any;
  vnClassavailable: any;
  vnClassregistered: any;
  //---------------------------------------------------
  currStudentID: string;
  currTimetable: any;
  currSemester: any;

  //---------------------------------------------------
  headers: any;
  options: RequestOptions;
  constructor(private studentInfoservice: StudentInfoforRegistrationService
    , private cookie: CookieService
    , private semesterService: SemesterInformationService
    , private VNClassService: VnclassServiceService
    , private TimetableService: TimetableService) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
      this.options = new RequestOptions({ headers: this.headers });
      //console.log(this.options);
    }

  ngOnInit() {
    this.currStudentID = this.cookie.get('loginID');
    this.studentInfoservice.getStudentinfoforRegistration(this.cookie.get('loginID'))
      .then(data => {
        this.currStudent = data;
        console.log(this.currStudent);
        $("#stuFullName").text(this.currStudent.studentName);

      });
    this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
      .then(data => {
        console.log(data);
        $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
      });

    this.semesterService.getSemesterInformation()
      .then(data => {
        console.log(data);
        this.currSemester = data;
        this.VNClassService.getVNClassRegistered(this.currStudentID
          , this.currSemester.acaYear
          , this.currSemester.semester)
          .then(data1 => {
            this.vnClassregistered = data1;
          });

        this.VNClassService.getVNClassAvailable(this.currStudentID
          , this.currSemester.acaYear
          , this.currSemester.semester)
          .then(data2 => {
            this.vnClassavailable = data2;
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


    this.VNClassService.addVnclass(this.currStudentID
      , this.currSemester.acaYear
      , this.currSemester.semester
      , openedClassstring);
    setTimeout(() => {
      this.semesterService.getSemesterInformation()
        .then(data => {
          this.currSemester = data;
          this.VNClassService.getVNClassRegistered(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data1 => {
              this.vnClassregistered = data1;
            });

          this.VNClassService.getVNClassAvailable(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data2 => {
              this.vnClassavailable = data2;
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


    this.VNClassService.deleteVnclass(this.currStudentID
      , this.currSemester.acaYear
      , this.currSemester.semester
      , classCodestring
      , studyCodestring);
    setTimeout(() => {
      this.semesterService.getSemesterInformation()
        .then(data => {
          this.currSemester = data;
          this.VNClassService.getVNClassRegistered(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data1 => {
              this.vnClassregistered = data1;
            });

          this.VNClassService.getVNClassAvailable(this.currStudentID
            , this.currSemester.acaYear
            , this.currSemester.semester)
            .then(data2 => {
              this.vnClassavailable = data2;
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
