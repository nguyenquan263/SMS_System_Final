import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
import { EslSeoiService } from '../esl-seoi-service.service';
import { RequestAasDegreeService } from '../request-aas-degree.service';
declare var $: any;

@Component({
  selector: 'app-request-aas-degree',
  templateUrl: './request-aas-degree.component.html',
  styleUrls: ['./request-aas-degree.component.css'],
  providers: [RequestAasDegreeService, CookieService, ConnectionService, StudentInfoforRegistrationService, EslSeoiService]
})
export class RequestAasDegreeComponent implements OnInit {
  currStudentID: string;
  currSemester: any;
  currStudent: any;

  isFinish: any;
  currRequest: any = null;

  self: any;

  constructor(private requestService: RequestAasDegreeService, private router: Router, private studentInfoservice: StudentInfoforRegistrationService, private cookie: CookieService, private connectionLink: ConnectionService, private eslSEOIService: EslSeoiService) { }

  ngOnInit() {


    $("#next17BTN").click(function () {
      $("#step17").modal("hide");
      $("#step27").modal("show");
    });

    $("#next27BTN").click(function () {
      $("#step27").modal("hide");
      $("#step37").modal("show");
    });
    $("#back27BTN").click(function () {
      $("#step27").modal("hide");
      $("#step17").modal("show");
    });

    $("#next37BTN").click(function () {
      $("#step37").modal("hide");
      $("#step47").modal("show");
    });
    $("#back37BTN").click(function () {
      $("#step37").modal("hide");
      $("#step27").modal("show");
    });

    $("#next47BTN").click(function () {
      $("#step47").modal("hide");
      $("#step57").modal("show");
      $('body').addClass('modal-open');

    });
    $("#back47BTN").click(function () {
      $("#step47").modal("hide");
      $("#step37").modal("show");
    });

    $("#next57BTN").click(function () {
      $("#step57").modal("hide");
      $("#step67").modal("show");
    });
    $("#back57BTN").click(function () {
      $("#step57").modal("hide");
      $("#step47").modal("show");
    });

    $("#next67BTN").click(function () {
      $("#step67").modal("hide");
      $("#step77").modal("show");
    });
    $("#back67BTN").click(function () {
      $("#step67").modal("hide");
      $("#step57").modal("show");
    });

    $("#back77BTN").click(function () {
      $("#step77").modal("hide");
      $("#step67").modal("show");
    });

    // $("#step17").modal("show");


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

        this.requestService.getStudentFinish(this.cookie.get('loginID'))
          .then(data => {
            this.isFinish = data;

            alert(this.isFinish);
            if (this.isFinish === true) {
              this.requestService.getAASDegreeRequest(this.cookie.get('loginID'))
                .then(data => {
                  this.currRequest = data;
                  console.log(this.currRequest);

                  if (this.currRequest.status === -1) {
                    $("#step17").modal("show");
                  } else if (this.currRequest.status === 1) {

                    $("#requestAASStatus").text("You requested for The AAS Degree before!");

                  } else {
                    $("#requestAASStatus").text("Your request has been rejected because: "+ this.currRequest.officerComment);
                  }

                });
            } else {
              $("#requestAASStatus").text("You are not allowed in here!");
            }
          });
      });
  }



}
