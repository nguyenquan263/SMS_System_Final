import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { SemesterInformationService } from '../semester-info.service';
import { ConnectionService } from '../connection.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-esl-transcript',
  templateUrl: './esl-transcript.component.html',
  styleUrls: ['./esl-transcript.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class EslTranscriptComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)

  currStudent: any; //Current student
  additionInfo: any; //Store data of catalog of choice and study program
  semesterInfo: any; //The information of current semester
  dateAndTimeInfo: any //The current date and time in server
  showContentBefore: boolean = false; //True, the data before Spring 2003 will be shown, false, the loading gif will be shown
  showContentAfter: boolean = false; //True, the data after Spring 2003 will be shown, false, the loading gif will be shown

  semesterDataBefore: any; //Semesters before Spring 2003
  courseDataBefore: any; //Courses data in each semester before Spring 2003
  toeflDataBefore: any; //Toefl score in each semester before Spring 2003 
  finalResultBefore: any; //Combination of three variables above

  semesterDataAfter: any; //Semesters after
  courseDataAfter: any; //Courses data in each semester after Spring 2003
  toeflDataAfter: any; //Toefl score in each semester after Spring 2003
  finalResultAfter: any; //Combination of three variables above

  totalCreditEarned:Number = 0; //Total number of credits earned
  totalCourse:Number = 0; //Total number of courses
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
      '<a href="/ESLTranscript" class="text-infor"> ESL Transcript</a>')
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
              this.getESLTranscriptDataBefore(this.currStudent.id);

            },err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });

          });
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

  //This function is used to get transcript ESL before Spring 2003
  getESLTranscriptDataBefore(stuId: String) {
    //Get semesters data
    this.http.get(this.serverLink + '/getELSTranscriptSemesterBefore/' + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.semesterDataBefore = data;

        //If current student doesn't have data before Spring 2003
        if (this.semesterDataBefore.length == 0) {
          this.showContentBefore = true;
          this.getESLTranscriptDataAfter(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
        }
        else {
          //For each semesters, get corresponding courses
          this.courseDataBefore = new Array();
          for (let i = 0; i < this.semesterDataBefore.length; i++) {
            this.courseDataBefore.push(this.http.get(this.serverLink + "/getELSTranscriptCourseBefore/" +
              stuId + "&" + this.semesterDataBefore[i].aca_year + "&" + this.semesterDataBefore[i].semester,this.options).map((res: Response) => res.json()));
          }

          forkJoin(this.courseDataBefore).subscribe(data => {
            this.courseDataBefore = data;

            //For each semesters, get corresponding TOEFL score
            let tempToeflArray = new Array();
            for (let i = 0; i < this.semesterDataBefore.length; i++) {
              tempToeflArray.push(this.http.get(this.serverLink + "/getELSTranscriptTOEFL/" +
                stuId + "&" + this.semesterDataBefore[i].aca_year + "&" + this.semesterDataBefore[i].semester,this.options).map((res: Response) => res.json()));
            }

            forkJoin(tempToeflArray).subscribe(data => {
              this.toeflDataBefore = data;
    
              //Combine everything into finalResultBefore
              this.finalResultBefore = new Array();
              for (let i = 0; i < this.semesterDataBefore.length; i++) {

                this.finalResultBefore.push({
                  aca_year: this.semesterDataBefore[i].aca_year,
                  semester_name: this.semesterDataBefore[i].semester_name,
                  semestervn: this.semesterDataBefore[i].semestervn,
                  esl: this.courseDataBefore[i],
                  credits: this.semesterDataBefore[i].credits,
                  credits_earn: this.semesterDataBefore[i].credits_earn,
                  term_gpa_esl: this.semesterDataBefore[i].term_gpa_esl,
                  cum_gpa_esl: this.semesterDataBefore[i].cum_gpa_esl,
                  toefl: this.toeflDataBefore[i]
                });

                this.totalCourse += this.courseDataBefore[i].length;
                this.totalCreditEarned = Number(this.totalCreditEarned)+ Number(this.semesterDataBefore[i].credits_earn);
              }
              this.showContentBefore = true;
              this.getESLTranscriptDataAfter(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
            },err=>{
              this.cookie.delete('loginID');
              this.cookie.delete('token');
              this.router.navigate(['/Login']);
            });
          });
        }
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

  //Function is used to get Transcript ESL after Spring 2003
  getESLTranscriptDataAfter(stuId:String, acaYear:String, semester:String) {
    //Get semester data
    this.http.get(this.serverLink + '/getESLTranscriptSemesterAfter/' +stuId+"&"+acaYear+"&"+semester,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.semesterDataAfter = data;
        //If there is no content in semesterDataAfter
        if (this.semesterDataAfter.length == 0)
        {
          this.showContentAfter = true;
        }
        else
        {
          //For each semester, get the corresponding courses
          this.courseDataAfter = new Array();
          for (let i = 0; i < this.semesterDataAfter.length; i++)
          {
            this.courseDataAfter.push(this.http.get(this.serverLink + '/getESLTranscriptCourseAfter/' +this.semesterDataAfter[i].stuId+"&"+this.semesterDataAfter[i].acaYear+"&"+this.semesterDataAfter[i].semester,this.options).map((res: Response) => res.json()));
          }
          forkJoin(this.courseDataAfter).subscribe(data => {
            this.courseDataAfter = data;
             //For each semesters, get corresponding TOEFL score
             let tempToeflArray = new Array();
             for (let i = 0; i < this.semesterDataAfter.length; i++) {
               tempToeflArray.push(this.http.get(this.serverLink + "/getELSTranscriptTOEFL/" +
                 stuId + "&" + this.semesterDataAfter[i].acaYear + "&" + this.semesterDataAfter[i].semester,this.options).map((res: Response) => res.json()));
             }
             
             forkJoin(tempToeflArray).subscribe(data => {
              this.toeflDataAfter = data;
              //Combine everything into finalResultAfter
              this.finalResultAfter = new Array();
              for (let i = 0; i < this.semesterDataAfter.length; i++) {
                this.finalResultAfter.push({
                  aca_year:this.semesterDataAfter[i].acaYear,
                  semester_name:this.semesterDataAfter[i].semester_name,
                  semesterVn:this.semesterDataAfter[i].semesterVn,
                  course:this.courseDataAfter[i],
                  term_gpa_esl:this.semesterDataAfter[i].term_gpa_esl,
                  cum_gpa_esl:this.semesterDataAfter[i].cum_gpa_esl,
                  toefl:this.toeflDataAfter[i]
                });
                this.totalCourse += this.courseDataAfter[i].length;
                for (let j = 0; j < this.courseDataAfter[i].length; j++)
                {
                  this.totalCreditEarned = Number(this.totalCreditEarned)+ Number(this.courseDataAfter[i][j].credit_earn);
                }
               
              }
              this.showContentAfter = true;
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
        }
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

}
