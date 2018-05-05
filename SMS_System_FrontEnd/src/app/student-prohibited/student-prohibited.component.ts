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
  selector: 'app-student-prohibited',
  templateUrl: './student-prohibited.component.html',
  styleUrls: ['./student-prohibited.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class StudentProhibitedComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)

  upperPart: boolean = false; //When it is true, the page will show the upper part of the page (selection boxes)
  lowerPart: boolean = false; //When it is true, the page will show the lower part (the table), if not, a loading gif will be displayed instead
  semesterInfo: any; //The information of current semester
  academicYearInfo: any; //The array of academic year
  currStudent: any; //Current student
  yearArray = new Array(); //The array of year (beginning is 2001, end will be the current year + 5)

  attendanceData: any; //Attendance information

  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http,
    private semesterService: SemesterInformationService,private connectionLink:ConnectionService, private router: Router) {
      //Initiate header (for security)
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
      this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/StudentProhibited" class="text-infor"> Student Prohibited</a>')
    //Load current student's information (name, image, student Id,...)
    this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;

        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/',this.options).map((res: Response) => res.json())
      .subscribe(data2 => {
            this.semesterInfo = data2;
            //Get academic year array
            forkJoin( this.http.get(this.serverLink + '/getAcademicYear/',this.options).map((res: Response) => res.json())).subscribe(data => {
              this.academicYearInfo = data;
              //Set student's full name and a small photo in a sidebar 
              $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
              $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);

              //Get attendance information
              this.loadStudentProhibitedInformation(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
              this.upperPart = true;
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

  //Function to get attendance information from semester, academic year and student id
  loadStudentProhibitedInformation(semester: String, academicYear: String, studentId: String) {
    this.lowerPart = false; //Make the loading gif appear
    var tableResult = ""; //The code of result table in html
    this.http.get(this.serverLink + '/getStudentProhibitedInformation/' + semester + '&' + academicYear + '&' + studentId, this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.attendanceData = data;
        this.lowerPart = true; //Make the loading gif disappear and the result table will be shown
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }


  //Funtion used to update the table information after the user selects another item in selection boxes
  updateTableInformation() {
    //Add loading image before the table appears
    $("#studentPro-mainTable").html('<img id = "studentPro-loadingImg" src = "assets/img/loading.gif"/>');
    //Get attendance information
    this.loadStudentProhibitedInformation($("#semester").val(), $("#academicYear").val(), this.currStudent.id);
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
