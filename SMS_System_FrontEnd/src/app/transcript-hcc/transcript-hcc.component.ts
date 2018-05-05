import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { ViewEncapsulation } from '@angular/core';
import { SemesterInformationService } from '../semester-info.service';
import { ConnectionService } from '../connection.service';

declare var $: any;

@Component({
  selector: 'app-transcript-hcc',
  templateUrl: './transcript-hcc.component.html',
  styleUrls: ['./transcript-hcc.component.css'],
  providers: [CookieService, LoginService, SemesterInformationService,ConnectionService]
})
export class TranscriptHccComponent implements OnInit {
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  currStudent: any; //Current student
  additionInfo: any; //Store data of catalog of choice and study program
  semesterInfo: any; //The information of current semester
  hccTranscriptData: any;//The HCC transcript data for the table
  averageGPA: any; //The average GPA
  yearArray = new Array(); //The array of year (beginning is 2001, end will be the current year + 5)

  showContent: boolean = false; //True, the data content will be shown, false, the loading gif will be shown
  constructor(private cookie: CookieService, private loginService: LoginService, private http: Http,
    private semesterService: SemesterInformationService,private connectionLink:ConnectionService) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {
    //Set navigation bar 
    $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
      '<a href="/TranscriptHCC" class="text-infor"> HCC Workforce Transcript</a>')
    //Get general data 
    this.http.get(this.serverLink + '/getHCCTranscriptGeneralInfo/' + this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.additionInfo = data;
      });
      this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
        this.currStudent = data;

        //Load current semester's information
        this.http.get(this.serverLink + '/getSystemTimeREST/',this.options).map((res: Response) => res.json())
      .subscribe(data2 => {
            this.semesterInfo = data2;
            //Set student's full name and a small photo in a sidebar 
            $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
            $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
            //Get HCC transcript data 
            this.http.get(this.serverLink + '/getHCCTranscript/' + this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
              .subscribe(data => {
                this.hccTranscriptData = data;
                //Get HCC transcript average GPA
                this.http.get(this.serverLink + '/getHCCTranscriptAverageGPA/' + this.currStudent.id + "&" + this.semesterInfo.acaYear
                  + "&" + this.semesterInfo.semester,this.options).map((res: Response) => res.json())
                  .subscribe(data => {
                    this.averageGPA = data;
                    this.showContent = true;
                  });
              });
          });
      });
  }

  //This method is used to convert the semester name to number. VD: SPRING => 4
  convertSemesterToNumber(semester: String) {
    if (semester.toUpperCase() == 'SPRING')
      return 4;
    else if (semester.toUpperCase() == 'SUMMER')
      return 2;
    else if (semester.toUpperCase() == 'FALL')
      return 3;
    else
      return
  }

  //Check if we can show grade and credit earn of a specific semester
  canShowCheck(currSemester: String, currAcaYear: String, itemSemester: String, itemAcaYear: String) {
    if (Number(currAcaYear) > Number(itemAcaYear))
      return true;
    else if (Number(currSemester) != Number(itemSemester))
      return true;
    else
      return false;
  }


}
