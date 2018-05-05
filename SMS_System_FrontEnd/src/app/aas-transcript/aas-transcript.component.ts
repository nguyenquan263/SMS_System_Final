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
  selector: 'app-aas-transcript',
  templateUrl: './aas-transcript.component.html',
  styleUrls: ['./aas-transcript.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})


export class AasTranscriptComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  currStudent: any; //Current student
  additionInfo: any; //Store data of catalog of choice and study program
  semesterInfo: any; //The information of current semester
  dateAndTimeInfo: any //The current date and time in server
  showContent: boolean = false; //True, the data content will be shown, false, the loading gif will be shown

  aasTranscriptSemester: any; //The semesters that the student has studied already
  aasTranscriptCourse: any; //In each semesters, the student has studied some courses
  finalResult = new Array(); //They result after loading semesters and coresponding courses

  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http,
    private semesterService: SemesterInformationService,private connectionLink:ConnectionService, private router:Router) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/AASTranscript" class="text-infor"> AAS Transcript</a>')
    //Get general data 
    this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.additionInfo = data;
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });

      this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;

        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/',this.options).map((res: Response) => res.json())
      .subscribe(data => {
            this.semesterInfo = data;
            this.http.get(this.serverLink + '/getSystemDateAndTime/0',this.options).map((res: Response) => res.json())
      .subscribe(data => {
              this.dateAndTimeInfo = data;
              //Set student's full name and a small photo in a sidebar 
              $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
              $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
              this.getAASTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
            },err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });

          },err=>{
            this.cookie.delete('loginID');
            this.cookie.delete('token');
            this.router.navigate(['/Login']);
          });
      });
  }

  getAASTranscriptData(stuId: String, acaYear: String, semester: String) {
    this.http.get(this.serverLink + '/getAASTranscriptSemester/' + stuId + '&' + acaYear + '&' + semester,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        if (data.length == 0) {
          this.showContent = true;
        }
        else {
          this.aasTranscriptSemester = data;

          var arrayOfCourses = new Array(); //The array of courses
          //Loop through aasTranscriptSemester and get the courses for each of them
          for (let i = 0; i < this.aasTranscriptSemester.length; i++) {
            arrayOfCourses.push(this.http.get(this.serverLink + '/getAASTranscriptCourse/' + stuId + '&' + this.aasTranscriptSemester[i].acaYear
              + '&' + this.aasTranscriptSemester[i].semester,this.options).map((res: Response) => res.json()));
          }

          forkJoin(arrayOfCourses).subscribe(data => {
            this.aasTranscriptCourse = data;
            //Combine all data into finalResult array
            for (let i = 0; i < this.aasTranscriptSemester.length; i++) {
              this.finalResult.push({
                semester: this.aasTranscriptSemester[i].semester_name + '/' + this.aasTranscriptSemester[i].acaYear,
                termGPA: this.aasTranscriptSemester[i].term_gpa_aas,
                cumGPA: this.aasTranscriptSemester[i].cum_gpa_aas,
                courseData: this.aasTranscriptCourse[i]
              });
            }
            // console.log(this.finalResult);
            this.showContent = true;
          },err=>{
            this.cookie.delete('loginID');
            this.cookie.delete('token');
            this.router.navigate(['/Login']);
          });
        }
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

}
