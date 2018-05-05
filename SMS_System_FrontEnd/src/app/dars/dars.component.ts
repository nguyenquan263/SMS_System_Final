import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { SemesterInformationService } from '../semester-info.service';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from "rxjs/observable/forkJoin";

declare var $: any;

@Component({
  selector: 'app-dars',
  templateUrl: './dars.component.html',
  styleUrls: ['./dars.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class DarsComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  currStudent: any; //Current student
  additionInfo: any; //Store data of catalog of choice and study program
  semesterInfo: any; //The information of current semester
  dateAndTimeInfo: any //The current date and time in server

  studentInfoDataDetail: any; //Student information in more details (math score, high school diploma)
  studentScore = new Array(); //Scores such as Math score, Vietnamese essay score, etc.
  toelf_ieltsScore: any; //TOELF_IELTS score

  stuInfoFinalResult = new Array(); //Final result after combining all information

  aasTranscriptSemester: any; //The AAS semesters that the student has studied already
  aasTranscriptCourse: any; //In each AAS semesters, the student has studied some courses
  finalResultAAS = new Array(); //They result after loading AAS semesters and coresponding courses

  eslTranscriptSemesterBefore: any; //Semesters ESL before Spring 2003
  eslTranscriptCourseBefore: any; //Courses ESL data in each semester before Spring 2003
  eslTranscriptToeflBefore: any; //Toefl score in each semester before Spring 2003 
  finalResultESLBefore: any; //Combination of three variables above

  eslTranscriptSemesterAfter: any; //Semesters ESL after 2003
  eslTranscriptCourseAfter: any; //Courses ESL data in each semester after Spring 2003
  eslTranscriptToeflAfter: any; //Toefl score in each semester after Spring 2003
  finalResultESLAfter: any; //Combination of three variables above

  enrichmentTranscriptSemester: any; //Semesters Enrichment
  enrichmentTranscriptCourse: any; //Courses Enrichment data in each semester
  finalResultEnrichment: any; //Combination of two variables above

  otherTranscriptSemester: any; //Semesters Other courses
  otherTranscriptCourse: any; //Other courses data in each semester
  finalResultOther: any; //Combination of two variables above

  degreeGranted:any; //Degree data (if degree has been granted or not)

  totalCreditEarnedAAS: Number = 0; //Total earned credit of AAS courses
  totalCreditEarnedESL: Number = 0; //Total earned credit of ESL courses
  totalCoursePassEnrich: Number = 0; //Total earned credit of Enrichment courses
  totalCoursePassOther: Number = 0; //Total earned credit of Other courses

  showContentAAS: boolean = false; //True, the data content of AAS courses will be shown, false, the loading gif will be shown
  showContentESL: boolean = false; //True, the data content of ESL courses will be shown, false, the loading gif will be shown
  showContentEnrich: boolean = false; //True, the data content of Enrichment courses will be shown, false, the loading gif will be shown
  showContentOther: boolean = false; //True, the data content of Other courses will be shown, false, the loading gif will be shown
  showDegreeGranted: boolean = false//True if loading degree granted has been done, false, the loading gif will be shown
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
      '<a href="/Dars" class="text-infor"> Dars</a>')
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
              //Set student's full name and add a small photo in a sidebar 
              $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
              $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
              this.getStudentInfoDetail();
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

  //Function used to get student infomation in detail such as High School Diploma, Birth Certificate, Math Score,etc.
  getStudentInfoDetail() {
    this.http.get(this.serverLink + '/getDarsStudentInfo/',this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.studentInfoDataDetail = data;

        for (let i = 0; i < this.studentInfoDataDetail.length; i++) {
          //Get student score
          if (this.studentInfoDataDetail[i].id_seq == '41' || this.studentInfoDataDetail[i].id_seq == '42' || this.studentInfoDataDetail[i].id_seq == '61') {
            this.studentScore.push(
              this.http.get(this.serverLink + '/getDarsStudentInfoScore/' + this.currStudent.id + '&' + this.studentInfoDataDetail[i].id_seq,this.options).map((res: Response) => res.json())
            );
          }
        }
        forkJoin(this.studentScore).subscribe(data => {
          this.studentScore = data;

          //Get student's IELT/ELTS score
          this.http.get(this.serverLink + '/getDarsTOELF_IELTS/' + this.currStudent.id,this.options).map((res: Response) => res.json())
            .subscribe(data => {
              this.toelf_ieltsScore = data;
              //Combine everything into finalResult array
              for (let i = 0; i < this.studentInfoDataDetail.length + 1; i++) {
                if (i == this.studentInfoDataDetail.length) {
                  let value = "";
                  if (this.toelf_ieltsScore.length == 0) {
                    value = "N/A"
                  }
                  else {
                    value = this.toelf_ieltsScore.status;
                  }
                  this.stuInfoFinalResult.push({
                    id_seq: "182",
                    name_e: "TOEFL/IELTS",
                    name_v: "",
                    status: 1,
                    note: "",
                    typeBox: "",
                    sequenceNum: 10,
                    value: value
                  });
                }
                else if (this.studentInfoDataDetail[i].id_seq == '41') {
                  this.stuInfoFinalResult.push({
                    id_seq: "41",
                    name_e: "Maths Score",
                    name_v: "(Điểm Toán)",
                    status: 1,
                    note: "",
                    typeBox: "",
                    sequenceNum: 10,
                    value: this.studentScore[0].contents
                  });
                }
                else if (this.studentInfoDataDetail[i].id_seq == '42') {
                  this.stuInfoFinalResult.push({
                    id_seq: "42",
                    name_e: "Vietnamese Essay Score",
                    name_v: "(Điểm luận văn Tiếng Việt)",
                    status: 1,
                    note: "",
                    typeBox: "",
                    sequenceNum: 10,
                    value: this.studentScore[1].contents
                  });
                }
                else if (this.studentInfoDataDetail[i].id_seq == '61') {
                  this.stuInfoFinalResult.push({
                    id_seq: "41",
                    name_e: "English Placement Test Score",
                    name_v: "(Điểm xếp lớp Tiếng Anh)",
                    status: 1,
                    note: "",
                    typeBox: "",
                    sequenceNum: 10,
                    value: this.studentScore[1].contents
                  });
                }
                else {
                  let value = "";
                  if (this.studentInfoDataDetail[i].status == '1')
                    value = "OK";
                  else
                    value = "N/A";
                  this.stuInfoFinalResult.push({
                    id_seq: this.studentInfoDataDetail[i].id_seq,
                    name_e: this.studentInfoDataDetail[i].name_e,
                    name_v: "(" + this.studentInfoDataDetail[i].name_v + ")",
                    status: this.studentInfoDataDetail[i].status,
                    note: this.studentInfoDataDetail[i].note,
                    typeBox: this.studentInfoDataDetail[i].typeBox,
                    sequenceNum: this.studentInfoDataDetail[i].sequenceNum,
                    value: value
                  });
                }
              }
              this.getAASTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
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

  getAASTranscriptData(stuId: String, acaYear: String, semester: String) {
    this.http.get(this.serverLink + '/getAASTranscriptSemester/' + stuId + '&' + acaYear + '&' + semester,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        if (data.length == 0) {
          this.showContentAAS = true;
          this.getESLTranscriptDataBefore(this.currStudent.id);
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
              this.finalResultAAS.push({
                semester: this.aasTranscriptSemester[i].semester_name + '/' + this.aasTranscriptSemester[i].acaYear,
                termGPA: this.aasTranscriptSemester[i].term_gpa_aas,
                cumGPA: this.aasTranscriptSemester[i].cum_gpa_aas,
                courseData: this.aasTranscriptCourse[i]
              });

              for (let j = 0; j < this.aasTranscriptCourse[i].length; j++) {
                this.totalCreditEarnedAAS = Number(this.totalCreditEarnedAAS) + Number(this.aasTranscriptCourse[i][j].credits_earned);
              }
            }
            // console.log(this.finalResult);
            this.showContentAAS = true;
            this.getESLTranscriptDataBefore(this.currStudent.id);
          });
        }
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
        this.eslTranscriptSemesterBefore = data;

        //If current student doesn't have data before Spring 2003
        if (this.eslTranscriptSemesterBefore.length == 0) {
          this.getESLTranscriptDataAfter(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
        }
        else {
          //For each semesters, get corresponding courses
          this.eslTranscriptCourseBefore = new Array();
          for (let i = 0; i < this.eslTranscriptSemesterBefore.length; i++) {
            this.eslTranscriptCourseBefore.push(this.http.get(this.serverLink + "/getELSTranscriptCourseBefore/" +
              stuId + "&" + this.eslTranscriptSemesterBefore[i].aca_year + "&" + this.eslTranscriptSemesterBefore[i].semester,this.options).map((res: Response) => res.json()));
          }

          forkJoin(this.eslTranscriptCourseBefore).subscribe(data => {
            this.eslTranscriptCourseBefore = data;

            //For each semesters, get corresponding TOEFL score
            let tempToeflArray = new Array();
            for (let i = 0; i < this.eslTranscriptSemesterBefore.length; i++) {
              tempToeflArray.push(this.http.get(this.serverLink + "/getELSTranscriptTOEFL/" +
                stuId + "&" + this.eslTranscriptSemesterBefore[i].aca_year + "&" + this.eslTranscriptSemesterBefore[i].semester,this.options).map((res: Response) => res.json()));
            }

            forkJoin(tempToeflArray).subscribe(data => {
              this.eslTranscriptToeflBefore = data;

              //Combine everything into finalResultESLBefore
              this.finalResultESLBefore = new Array();
              for (let i = 0; i < this.eslTranscriptSemesterBefore.length; i++) {

                this.finalResultESLBefore.push({
                  aca_year: this.eslTranscriptSemesterBefore[i].aca_year,
                  semester_name: this.eslTranscriptSemesterBefore[i].semester_name,
                  semestervn: this.eslTranscriptSemesterBefore[i].semestervn,
                  esl: this.eslTranscriptCourseBefore[i],
                  credits: this.eslTranscriptSemesterBefore[i].credits,
                  credits_earn: this.eslTranscriptSemesterBefore[i].credits_earn,
                  term_gpa_esl: this.eslTranscriptSemesterBefore[i].term_gpa_esl,
                  cum_gpa_esl: this.eslTranscriptSemesterBefore[i].cum_gpa_esl,
                  toefl: this.eslTranscriptToeflBefore[i]
                });
                this.totalCreditEarnedESL = Number(this.totalCreditEarnedESL) + Number(this.eslTranscriptSemesterBefore[i].credits_earn);
              }
              this.getESLTranscriptDataAfter(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
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


  //Function is used to get Transcript ESL after Spring 2003
  getESLTranscriptDataAfter(stuId: String, acaYear: String, semester: String) {
    //Get semester data
    this.http.get(this.serverLink + '/getESLTranscriptSemesterAfter/' + stuId + "&" + acaYear + "&" + semester,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.eslTranscriptSemesterAfter = data;
        //If there is no content in eslTranscriptSemesterAfter
        if (this.eslTranscriptSemesterAfter.length == 0) {
          this.showContentESL = true;
          this.getEnrichmentTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
        }
        else {
          //For each semester, get the corresponding courses
          this.eslTranscriptCourseAfter = new Array();
          for (let i = 0; i < this.eslTranscriptSemesterAfter.length; i++) {
            this.eslTranscriptCourseAfter.push(this.http.get(this.serverLink + '/getESLTranscriptCourseAfter/' + this.eslTranscriptSemesterAfter[i].stuId + "&" + this.eslTranscriptSemesterAfter[i].acaYear + "&" + this.eslTranscriptSemesterAfter[i].semester,this.options).map((res: Response) => res.json()));
          }
          forkJoin(this.eslTranscriptCourseAfter).subscribe(data => {
            this.eslTranscriptCourseAfter = data;
            //For each semesters, get corresponding TOEFL score
            let tempToeflArray = new Array();
            for (let i = 0; i < this.eslTranscriptSemesterAfter.length; i++) {
              tempToeflArray.push(this.http.get(this.serverLink + "/getELSTranscriptTOEFL/" +
                stuId + "&" + this.eslTranscriptSemesterAfter[i].acaYear + "&" + this.eslTranscriptSemesterAfter[i].semester,this.options).map((res: Response) => res.json()));
            }

            forkJoin(tempToeflArray).subscribe(data => {
              this.eslTranscriptToeflAfter = data;
              //Combine everything into finalResultESLAfter
              this.finalResultESLAfter = new Array();
              for (let i = 0; i < this.eslTranscriptSemesterAfter.length; i++) {
                this.finalResultESLAfter.push({
                  aca_year: this.eslTranscriptSemesterAfter[i].acaYear,
                  semester_name: this.eslTranscriptSemesterAfter[i].semester_name,
                  semesterVn: this.eslTranscriptSemesterAfter[i].semesterVn,
                  course: this.eslTranscriptCourseAfter[i],
                  term_gpa_esl: this.eslTranscriptSemesterAfter[i].term_gpa_esl,
                  cum_gpa_esl: this.eslTranscriptSemesterAfter[i].cum_gpa_esl,
                  toefl: this.eslTranscriptToeflAfter[i]
                });

                for (let j = 0; j < this.eslTranscriptCourseAfter[i].length; j++) {
                  this.totalCreditEarnedESL = Number(this.totalCreditEarnedESL) + Number(this.eslTranscriptCourseAfter[i][j].credit_earn);
                }
              }
              this.showContentESL = true;
              this.getEnrichmentTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
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
      });
  }

  //Function used to get enrichment transcript
  getEnrichmentTranscriptData(stuId: String, acaYear: String, semester: String) {
    //Get semester data
    this.http.get(this.serverLink + '/getDarsEnrichmentSemester/' + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.enrichmentTranscriptSemester = data;
        if (this.enrichmentTranscriptSemester.length == 0) {
          this.showContentEnrich = true;
          this.getOtherTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
        }
        else {
          //For each semesters, get corresponding TOEFL score
          this.enrichmentTranscriptCourse = new Array();
          for (let i = 0; i < this.enrichmentTranscriptSemester.length; i++) {
            this.enrichmentTranscriptCourse.push(this.http.get(this.serverLink + "/getDarsEnrichmentCourse/" +
              stuId + "&" + this.enrichmentTranscriptSemester[i].acaYear + "&" + this.enrichmentTranscriptSemester[i].semester,this.options).map((res: Response) => res.json()));
          };

          forkJoin(this.enrichmentTranscriptCourse).subscribe(data => {
            this.enrichmentTranscriptCourse = data;
            //Combine everything to finalResult
            this.finalResultEnrichment = new Array();
            for (let i = 0; i < this.enrichmentTranscriptSemester.length; i++) {
              this.finalResultEnrichment.push({
                semester_name:this.enrichmentTranscriptSemester[i].semester_name,
                acaYear:this.enrichmentTranscriptSemester[i].acaYear,
                course:this.enrichmentTranscriptCourse[i],
              })

              for (let j = 0; j < this.enrichmentTranscriptCourse[i].length; j++)
              {
                if (this.enrichmentTranscriptCourse[i][j].credits_Earn > 0)
                {
                  this.totalCoursePassEnrich = Number(this.totalCoursePassEnrich) + 1;
                }
              }
             
            }
            // console.log(this.finalResultEnrichment);
            this.showContentEnrich = true;
            this.getOtherTranscriptData(this.currStudent.id, this.semesterInfo.acaYear, this.semesterInfo.semester);
          },err=>{
            this.cookie.delete('loginID');
            this.cookie.delete('token');
            this.router.navigate(['/Login']);
          });

        }
      });
  }

  //Function used to get other courses transcript
  getOtherTranscriptData(stuId: String, acaYear: String, semester: String)
  {
    //Get semester data
    this.http.get(this.serverLink + '/getDarsOthersSemester/' + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.otherTranscriptSemester = data;
        if (this.otherTranscriptSemester.length == 0)
        {
          this.showContentOther = true;
          this.getDegreeGranted(this.currStudent.id);
        }
        else
        {
           //For each semesters, get corresponding TOEFL score
           this.otherTranscriptCourse = new Array();
           for (let i = 0; i < this.otherTranscriptSemester.length; i++) {
             this.otherTranscriptCourse.push(this.http.get(this.serverLink + "/getDarsOtherCourse/" +
               stuId + "&" + this.otherTranscriptSemester[i].acaYear + "&" + this.otherTranscriptSemester[i].semester,this.options).map((res: Response) => res.json()));
           };

           forkJoin(this.otherTranscriptCourse).subscribe(data => {
             this.otherTranscriptCourse = data;
             //Combine everything to finalResult
             this.finalResultOther = new Array();
             for (let i = 0; i < this.otherTranscriptSemester.length; i++) {
               this.finalResultOther.push({
                 semester_name:this.otherTranscriptSemester[i].semester_name,
                 acaYear:this.otherTranscriptSemester[i].acaYear,
                 course:this.otherTranscriptCourse[i],
               });

              for (let j = 0; j < this.otherTranscriptCourse[i].length; j++)
              {
                if (this.otherTranscriptCourse[i][j].credits_Earn > 0)
                {
                  this.totalCoursePassOther = Number(this.totalCoursePassOther) + 1;
                }
              }
             }
             this.showContentOther = true;
             this.getDegreeGranted(this.currStudent.id);
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

  getDegreeGranted(stuId:String)
  {
    this.http.get(this.serverLink + '/getDarsDegreeGranted/' + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.degreeGranted = data;
        this.showDegreeGranted = true;
    },err=>{
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
  }

}
