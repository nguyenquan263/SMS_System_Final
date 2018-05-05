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
@Component({
  selector: 'app-grade-and-semester',
  templateUrl: './grade-and-semester.component.html',
  styleUrls: ['./grade-and-semester.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class GradeAndSemesterComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection(); //The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  upperPart: boolean = false; //When it is true, the page will show the upper part of the page (selection boxes)
  lowerPart: boolean = false; //When both lowerPart and lowerPart2 are true,loading gif disappears and table shows 
  lowerPart2: boolean = false; //When both lowerPart and lowerPart2 are true,loading gif disappears and table shows 
  semesterInfo: any; //The information of current semester
  currStudent: any; //Current student
  academicYearInfo: any; //The array of academic year

  gradeData = new Array(); //Grade AAS data
  tempGradeAASData: any; //Temp variable to store grade AAS
  tempPolicy2AAS = new Array();//Temp variable to store policy 2 for AAS data
  tempAssigmentAAS = new Array() //Assgiment grade AAS data for each class
  tempGradeGEData: any; //Temp variable to store grade GE
  tempPolicy2GE = new Array();//Temp variable to store policy 2 for GE data
  tempAssigmentGE = new Array() //Assgiment grade GE data for each class
  teacherComments: any; //Data for teachers' comment


  gradeGEData: any; //Grade GE data

  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http, private http2: Http, private http3: Http,
    private http4: Http, private semesterService: SemesterInformationService,private connectionLink:ConnectionService, private router: Router) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
    console.log(this.options);
  }

  ngOnInit() {
    console.log(this.options);
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/GradeAndSemester" class="text-infor"> Grade & Semester</a>')
    //Load current student's information (name, image, student Id,...)
    this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;
        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/',this.options).map((res: Response) => res.json())
      .subscribe(data2 => {
            this.semesterInfo = data2;
            //Get academic year array
            forkJoin( this.http.get(this.serverLink + '/getAcademicYear/',this.options).map((res: Response) => res.json()))
            .subscribe(data => {
              this.academicYearInfo = data;

              //Set student's full name and a small photo in a sidebar 
              $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
              $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
              //Get grade data
              this.loadGradeData(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
              this.upperPart = true;
            },err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });

          });

      });
  }

  //Function to get attendance information from semester, academic year and student id
  loadGradeData(semester: String, academicYear: String, studentId: String) {
    //Reset variables
    this.gradeData = [];
    this.tempAssigmentAAS = [];
    this.tempGradeAASData = "";
    this.tempPolicy2AAS = [];
    this.tempGradeGEData = "";
    this.tempPolicy2GE = [];
    this.tempAssigmentGE = [];

    this.lowerPart = false; //Make the loading gif appear if both lowerPart and lowerPart2 are true
    this.lowerPart2 = false; //Make the loading gif appear if both lowerPart and lowerPart2 are true

    this.getGradeAAS(semester, academicYear, studentId);
  }

  getGradeAAS(semester: String, academicYear: String, studentId: String) {
    this.http.get(this.serverLink + '/getGradeAAS/' + semester + '&' + academicYear + '&' + studentId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.tempGradeAASData = data;
        //If student has no course in AAS to display, hide loading gif and display table
        if (this.tempGradeAASData.length == 0) {
          this.lowerPart = true;
          this.getGradeGE(semester, academicYear, studentId);
        }
        else //If not
        {
  
          for (let i = 0; i < this.tempGradeAASData.length; i++) {
            //If mid percent or final percent == 0, convert it to N/A, if not, add "%"
            if (this.tempGradeAASData[i].midPercent == '0')
              this.tempGradeAASData[i].midPercent = 'N/A';
            else
              this.tempGradeAASData[i].midPercent = this.tempGradeAASData[i].midPercent + "%";

            if (this.tempGradeAASData[i].finalPercent == '0')
              this.tempGradeAASData[i].finalPercent = 'N/A';
            else
              this.tempGradeAASData[i].finalPercent = this.tempGradeAASData[i].finalPercent + "%";
          }

          for (let i = 0; i < this.tempGradeAASData.length; i++) {
            //Get policy 2 data
            this.tempPolicy2AAS.push(this.http.get(this.serverLink + '/getPolicyGrade/' + semester + '&' + academicYear
              + '&' + this.tempGradeAASData[i].subjectCode + '&' + studentId,this.options).map((res: Response) => res.json()));
          }
          forkJoin(this.tempPolicy2AAS).subscribe(data => {
            this.tempPolicy2AAS = data;
            for (let i = 0; i < this.tempGradeAASData.length; i++) {
              //Get assgiment data for each course
              this.tempAssigmentAAS.push(this.http.get(this.serverLink + '/getAssgimentGradeAAS/'
                + this.tempGradeAASData[i].studyCode + '&' + this.tempGradeAASData[i].classCode,this.options).map((res: Response) => res.json()));
            }
            forkJoin(this.tempAssigmentAAS).subscribe(data => {
              this.tempAssigmentAAS = data;
              //AAS data has been done, start to merge
              for (let i = 0; i < this.tempGradeAASData.length; i++) {
                var policy2ForDisplay: any = "";
                if (this.tempPolicy2AAS[i] == "") {
                  policy2ForDisplay = "";
                }
                else {
                  policy2ForDisplay = this.tempPolicy2AAS[i][0].numOfViolate * this.tempPolicy2AAS[i][0].minusGrade;
                }
                this.gradeData.push(
                  {
                    no: i + 1,
                    id: this.tempGradeAASData[i].id,
                    name: this.tempGradeAASData[i].name,
                    midMark: this.tempGradeAASData[i].midMark,
                    finalMark: this.tempGradeAASData[i].finalMark,
                    averageMark: this.tempGradeAASData[i].averageMark,
                    classCode: this.tempGradeAASData[i].classCode,
                    studyCode: this.tempGradeAASData[i].studyCode,
                    midPercent: this.tempGradeAASData[i].midPercent,
                    finalPercent: this.tempGradeAASData[i].finalPercent,
                    subjectCode: this.tempGradeAASData[i].subjectCode,
                    aasSGT: this.tempGradeAASData[i].aasSGT,
                    policy2: policy2ForDisplay,
                    assignment: this.tempAssigmentAAS[i],
                    isGEGradeTitle: false
                  }
                );
              }
              this.lowerPart = true;
              this.getGradeGE(semester, academicYear, studentId);
            }, err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });
          });
        }
      });
  }

  getGradeGE(semester: String, academicYear: String, studentId: String) {
    //Get gradeGE
    this.http2.get(this.serverLink + '/getGradeGE/' + semester + '&' + academicYear + "&" + studentId,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.gradeGEData = data;
        //If student has no course in GE to display, hide loading gif and display table
        if (this.gradeGEData.length == 0) {
          this.getTeacherComment(semester, academicYear, studentId);
          this.lowerPart2 = true;
        }
        else {
          this.gradeData.push(
            {
              no: this.tempGradeAASData.length,
              id: this.gradeGEData[0].geId,
              name: this.gradeGEData[0].geName,
              midMark: null,
              finalMark: null,
              averageMark: this.gradeGEData[0].averageMark,
              classCode: null,
              studyCode: null,
              midPercent: null,
              finalPercent: null,
              subjectCode: this.gradeGEData[0].subjectCode,
              aasSGT: null,
              policy2: null,
              assignment: "",
              isGEGradeTitle: true
            });

          this.http2.get(this.serverLink + '/getGradeGEDetail/' + semester + '&' + academicYear + "&" + studentId,this.options)
            .map((res: Response) => res.json())
            .subscribe(data => {
              this.tempGradeGEData = data;
              if (this.tempGradeGEData.length == 0)
              {
                this.getTeacherComment(semester, academicYear, studentId);
              }
              else
              {
                for (let i = 0; i < this.tempGradeGEData.length; i++) {
                  //If mid percent or final percent == 0, convert it to N/A, if not, add "%"
                  if (this.tempGradeGEData[i].midPercent == '0')
                    this.tempGradeGEData[i].midPercent = 'N/A';
                  else
                    this.tempGradeGEData[i].midPercent = this.tempGradeGEData[i].midPercent + "%";
  
                  if (this.tempGradeGEData[i].finalPercent == '0')
                    this.tempGradeGEData[i].finalPercent = 'N/A';
                  else
                    this.tempGradeGEData[i].finalPercent = this.tempGradeGEData[i].finalPercent + "%";
                }
  
  
                for (let i = 0; i < this.tempGradeGEData.length; i++) {
                  //Get policy 2 data
                  this.tempPolicy2GE.push(this.http.get(this.serverLink + '/getPolicyGrade/' + semester + '&' + academicYear
                    + '&' + this.tempGradeGEData[i].subjectCode + '&' + studentId,this.options).map((res: Response) => res.json()));
                }
                forkJoin(this.tempPolicy2GE).subscribe(data => {
                  this.tempPolicy2GE = data;
                  for (let i = 0; i < this.tempGradeGEData.length; i++) {
                    //Get assgiment data for each course
                    this.tempAssigmentGE.push(this.http.get(this.serverLink + '/getAssgimentGradeGE/'
                      + this.tempGradeGEData[i].studySubCode + '&' + this.tempGradeGEData[i].classCode,this.options).map((res: Response) => res.json()));
                  }
                  forkJoin(this.tempAssigmentGE).subscribe(data => {
                    this.tempAssigmentGE = data;
                    //GE data has been done, start to merge
                    for (let i = 0; i < this.tempGradeGEData.length; i++) {
                      var policy2ForDisplay: any = "";
                      if (this.tempPolicy2GE[i] == "") {
                        policy2ForDisplay = "";
                      }
                      else {
                        policy2ForDisplay = this.tempPolicy2GE[i][0].numOfViolate * this.tempPolicy2GE[i][0].minusGrade;
                      }
                      this.gradeData.push(
                        {
                          no: i + 1,
                          id: this.tempGradeGEData[i].id,
                          name: this.tempGradeGEData[i].name,
                          midMark: this.tempGradeGEData[i].midMark,
                          finalMark: this.tempGradeGEData[i].finalMark,
                          averageMark: this.tempGradeGEData[i].averageMark,
                          classCode: this.tempGradeGEData[i].classCode,
                          studyCode: this.tempGradeGEData[i].studyCode,
                          midPercent: this.tempGradeGEData[i].midPercent,
                          finalPercent: this.tempGradeGEData[i].finalPercent,
                          subjectCode: this.tempGradeGEData[i].subjectCode,
                          aasSGT: this.tempGradeGEData[i].aasSGT,
                          policy2: policy2ForDisplay,
                          assignment: this.tempAssigmentGE[i],
                          isGEGradeTitle: false
                        });
                    }
                    this.getTeacherComment(semester, academicYear, studentId);
                  }, err=>{
                    this.cookie.delete('loginID');
                    this.cookie.delete('token');
                    this.router.navigate(['/Login']);
                  });
                });
              }
            }, err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });

        }
      });
  }

  //Function is used to get teachers' comments
  getTeacherComment(semester: String, acaYear: String, stuId: String) {
    this.teacherComments = ""; //Reset variable
    this.http.get(this.serverLink + '/getTeacherComment/' + semester + '&' + acaYear + '&' + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.teacherComments = data;
      }, err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
      this.lowerPart2 = true; //Make the loading gif disappear and show table data
  }

  //Function to update the table grade data when user click other selection box
  updateGradeData() {
    this.gradeData = [];
    this.loadGradeData(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
  }

  //Function used to convert number to coresponding semester. Ex: 4 = Spring, 1 = Summer,etc.
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

}
