import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { SemesterInformationService } from '../semester-info.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';
declare var $: any;
declare var PNotify: any;

@Component({
  selector: 'app-other-seoi',
  templateUrl: './other-seoi.component.html',
  styleUrls: ['./other-seoi.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService, ConnectionService]
})
export class OtherSeoiComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection(); //The link of the server
  options: RequestOptions; //Option (Used for security)
  headers: any;  //Headers (Used for security)

  semesterInfo: any; //The information of current semester
  academicYearInfo: any; //The array of academic year
  currStudent: any; //Current student

  showCourseList: boolean = true; //If it is true, show the course list
  showEvaluationForm: boolean = false; //If it is true, show evaluation form of a specific course
  doneLoading: boolean = false; //If it is true, the data has been loaded completely
  otherSEOICourseInfo: any;
  fullOtherSEOICourseInfo = new Array(); //Other SEOI course information with evaluation status

  otherSEOIQuestions: any; //Other SEOI questions
  currentInstructorName: String = ""; //Current selected instructor for evaluation
  currentClassName: String = ""; //Current selected class name for evaluation
  currentClassId: String = ""; //Current selected class id for evaluation
  currentInstructorId: String = ""; //Current selected instructor id for evaluation

  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http, private semesterService: SemesterInformationService, private connectionLink: ConnectionService, private router: Router) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/Policy2" class="text-infor"> Policy 2</a>')

    //Load current student's information (name, image, student Id,...)
    this.http.get(this.serverLink + '/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;
        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/', this.options).map((res: Response) => res.json())
          .subscribe(data2 => {
            this.semesterInfo = data2;
            //Get academic year array
            forkJoin(this.http.get(this.serverLink + '/getAcademicYear/', this.options).map((res: Response) => res.json())).subscribe(data => {
              this.academicYearInfo = data;
              //Set student's full name and a small photo in a sidebar 
              $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
              $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
              //Get general courses information of other SEOI courses
              this.getOtherSEOICourseInfo(this.cookie.get('loginID'), this.semesterInfo.acaYear, this.semesterInfo.semester);

            }, err => {
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });
          }, err => {
            this.cookie.delete('loginID');
            this.cookie.delete('token');
            this.router.navigate(['/Login']);
          });
      });
  }

  // Get general courses information of other SEOI courses
  getOtherSEOICourseInfo(stuId: String, acaYear: String, semester: String) {
    this.otherSEOICourseInfo = new Array();
    this.fullOtherSEOICourseInfo = new Array();
    this.http.get(this.serverLink + '/getOtherSEOICoursesInfo/' + stuId + "&" + acaYear + "&" + semester, this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.otherSEOICourseInfo = data;
        if (this.otherSEOICourseInfo.length == 0)
        {
          this.showCourseList = true;
            this.doneLoading = true;
        }
        else{
          var tempEvaluationStatusArray = new Array(); //Array that contains the evaluation status for each class
          var tempEvaluationTimeStatusArray = new Array(); //Array that contains the evaluation time status for each class
  
          //Load the evaluation status (already or not yet)
          for (let i = 0; i < this.otherSEOICourseInfo.length; i++) {
            tempEvaluationStatusArray.push(this.http.get(this.serverLink + '/isStatus/' + stuId + "&" + this.otherSEOICourseInfo[i].classId + "&" + this.otherSEOICourseInfo[i].teacherId, this.options).map((res: Response) => res.json()));
            tempEvaluationTimeStatusArray.push(this.http.get(this.serverLink + '/isEvaluationTime/' + this.otherSEOICourseInfo[i].classId, this.options).map((res: Response) => res.json()))
          }
  
          forkJoin(tempEvaluationStatusArray).subscribe(data => {
            tempEvaluationStatusArray = data;
            forkJoin(tempEvaluationTimeStatusArray).subscribe(data => {
              tempEvaluationTimeStatusArray = data;
              for (let i = 0; i < this.otherSEOICourseInfo.length; i++) {
                this.fullOtherSEOICourseInfo.push({
                  classId: this.otherSEOICourseInfo[i].classId,
                  className: this.otherSEOICourseInfo[i].className,
                  firstname: this.otherSEOICourseInfo[i].firstname,
                  lastName: this.otherSEOICourseInfo[i].lastName,
                  teacherId: this.otherSEOICourseInfo[i].teacherId,
                  evaluationStatus: tempEvaluationStatusArray[i],
                  evaluationTimeStatus: tempEvaluationTimeStatusArray[i]
                })
              }
              this.showCourseList = true;
              this.doneLoading = true;
            });
          });
        }
      }, err => {
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

  //Function is used to convert number to coresponding semester. Ex: 4 = Spring, 1 = Summer,etc.
  convertToSemester(semester: Number) {
    if (semester == 1)
      return "SUMMER";
    else if (semester == 4)
      return "SPRING";
    else if (semester == 3)
      return "FALL";
    else
      return "UNKNOWN";
  }

  showEvaluationFormAction(instructorFName: String, instructorLName: String, className: String, classId: String, instructorId: String) {
    this.currentInstructorName = instructorFName + " " + instructorLName;
    this.currentClassName = className;
    this.currentClassId = classId;
    this.currentInstructorId = instructorId;
    this.doneLoading = false;
    this.showCourseList = false;
    this.http.get(this.serverLink + '/getOtherSEOIQuestions/', this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.otherSEOIQuestions = data;
        // console.log(this.otherSEOIQuestions)
        this.showEvaluationForm = true;
        this.doneLoading = true;
      });
  }

  submitEvaluationForm() {

    var tempEvaluationResult = new Array();

    for (var i = 0; i < this.otherSEOIQuestions.length; i++) {
      if ($('input[name=' + this.otherSEOIQuestions[i].id_seq + ']:checked').val() === undefined) {
        var notification1 = new PNotify({
          title: 'Error',
          text: 'Please complete all questions',
          type: 'error',
          delay: 2000
        });
        break;
      }
      else {
        tempEvaluationResult.push(
          this.http.get(this.serverLink + '/insertOtherStudentEvaluation/' + this.currStudent.id
            + "&" + this.currentClassId + "&" + this.otherSEOIQuestions[i].id_seq + "&" + $('input[name=' + this.otherSEOIQuestions[i].id_seq + ']:checked').val() + "&" + this.currentInstructorId,this.options).map((res: Response) => res.json()));

      }
    }

    if (tempEvaluationResult.length == this.otherSEOIQuestions.length) {
      if ($('#commentArea').val() == "") {
        var notification1 = new PNotify({
          title: 'Error',
          text: 'Please fill in your comment',
          type: 'error',
          delay: 2000
        });
      }
      else {
        var comment = $('#commentArea').val();
        this.doneLoading = false;
        forkJoin(tempEvaluationResult).subscribe(
          data => {
            this.http.get(this.serverLink + '/insertOtherStudentEvaluationComment/'+ this.currStudent.id
            + "&" + this.currentClassId + "&" + this.currentInstructorId+"&"+comment, this.options).map((res: Response) => res.json())
              .subscribe(data => {
                this.showEvaluationForm = false;
                var notification1 = new PNotify({
                  title: 'Success',
                  text: 'You evaluation has been completed',
                  type: 'success',
                  delay: 2000
                });
                this.getOtherSEOICourseInfo(this.cookie.get('loginID'), this.semesterInfo.acaYear, this.semesterInfo.semester);
              });
          });
      }
    }
  }

}
