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
  selector: 'app-policy2',
  templateUrl: './policy2.component.html',
  styleUrls: ['./policy2.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class Policy2Component implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  semesterInfo: any; //The information of current semester
  academicYearInfo: any; //The array of academic year

  currStudent: any; //Current student
  policy2Data: any; //Policy 2 data
  doneLoading: boolean = false; //If it is true, the data has been loaded completely
  
  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http,
    private semesterService: SemesterInformationService,private connectionLink:ConnectionService,private router: Router) {
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
              this.getPolicy2Data(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
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

  //Function is used to get policy 2 data
  getPolicy2Data(semester: String, acaYear: String, stuId: String) {
    this.policy2Data = "";
    this.http.get(this.serverLink + '/getPolicy2Data/' + semester + "&" + acaYear + "&" + stuId,this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.policy2Data = data;
        this.doneLoading = true;
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }

  //Function is used to update data when user select another item in selection box
  updatePolicy2Data() {
    this.getPolicy2Data(this.semesterInfo.semester, this.semesterInfo.acaYear, this.currStudent.id);
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

}
