import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { ConnectionService } from '../connection.service';

declare var $: any;
@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css'],
  providers: [CookieService, LoginService,ConnectionService]
})
export class StudentInformationComponent implements OnInit {
  currStudent: any = null;
  currSemesterAndYear:any= null;
  headers:any; //Headers (used for security)
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (used for security)

  constructor(private cookie: CookieService, private loginService: LoginService,private http: Http
    , private router: Router,private connectionLink:ConnectionService) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
      this.options = new RequestOptions({ headers: this.headers });
  }

  ngOnInit() {

    this.http.get(this.connectionLink.getConnection()+'/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
       .map((res: Response) => res.json())
      .subscribe(data => {
          this.currStudent = data
          //Set student's full name and a small photo in a sidebar 
          $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
          $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);
        },
      err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }  
}
