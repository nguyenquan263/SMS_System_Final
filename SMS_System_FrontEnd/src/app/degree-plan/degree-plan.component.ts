import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { SemesterInformationService } from '../semester-info.service';
import { DomSanitizer, SafeUrl, SafeHtml } from '@angular/platform-browser';
import { ConnectionService } from '../connection.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-degree-plan',
  templateUrl: './degree-plan.component.html',
  styleUrls: ['./degree-plan.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class DegreePlanComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  currStudent: any; //Current student
  doneLoading: boolean = false; //If it is true, hide loading gif and show content
  semesterInfo: any; //The information of current semester

  degreePlanData: any; //The degree plan pdf attachment link
  basePath: String = "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/degree_plan_upload/"; //Base path of the attchement
  finalPath: String; //The final part after concatinate degree plan data attachement link and basePath
  innerHtml: SafeHtml; //Inner html which will contain the pdf embedding code

  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http,
    private semesterService: SemesterInformationService, private sanitizer: DomSanitizer,private connectionLink:ConnectionService, private router: Router) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/DegreePlan" class="text-infor"> Degree Plan</a>')

      this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;

        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/',this.options).map((res: Response) => res.json())
      .subscribe(data2 => {
            this.semesterInfo = data;
            //Set student's full name and a small photo in a sidebar 
            $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);

            //Get HCC degree plan
            this.http.get(this.serverLink + '/getDegreePlanAttachment/' + this.currStudent.id,this.options).map((res: Response) => res.json())
              .subscribe(data => {
                if (data.length == 0) {
                  this.doneLoading = true;
                }
                else {
                  this.degreePlanData = data;
                  this.finalPath = this.basePath + this.degreePlanData[0].attachement;
                  //If user uses computer, allow him to view directly
                  if (window.screen.width >= 1024) {
                    this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(
                      '<object data="' + this.finalPath + '" type="application/pdf" style="width: 100%; height: 100vh"  class="embed-responsive-item"></object>');
                    this.doneLoading = true;
                  }
                  else {
                    this.innerHtml = this.sanitizer.bypassSecurityTrustHtml(
                      '<a href="' + this.finalPath + '" download>Click here</a> &nbsp;to download your degree plan.');
                    this.doneLoading = true;
                  }
                }
              },err=>{
                this.cookie.delete('loginID');
                this.cookie.delete('token');
                this.router.navigate(['/Login']);
              });
          });
      });
  }

}
