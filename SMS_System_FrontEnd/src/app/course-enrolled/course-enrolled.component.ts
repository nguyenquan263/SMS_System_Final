import { Component, OnInit } from '@angular/core';
import { CourseEnrolledService } from '../course-enrolled.service';
import { OnChanges } from '@angular/core';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {SemesterInformationService} from '../semester-info.service';

import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { ConnectionService } from '../connection.service';
declare var $: any;
@Component({
  selector: 'app-course-enrolled',
  templateUrl: './course-enrolled.component.html',
  styleUrls: ['./course-enrolled.component.css'],
  providers: [ CookieService,ConnectionService]
})
export class CourseEnrolledComponent implements OnInit,OnChanges {
  course: any;
  selectedYear: string;
  selectedSemester: string;
  studentCode:string;
  Semester: any;
  academicYear: any;
    years = [
    '2002',
    '2003','2004',
    '2005','2006',
    '2007','2008',
    '2009','2010',
    '2011','2012',
    '2013','2014',
    '2015','2016',
    '2017','2018',
    '2019','2020',
    '2021','2022',
    '2023','2024',
    '2025','2026',
  ];

  currStudent: any = null;
  currSemesterAndYear:any= null;
  headers:any; //Headers (used for security)
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (used for security);

  constructor(private cookie: CookieService,private router: Router,private http: Http
    , private connectionLink:ConnectionService) {
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
      this.options = new RequestOptions({ headers: this.headers });
     }

  ngOnInit() {
    this.studentCode=this.cookie.get('loginID');   

    this.http.get(this.connectionLink.getConnection()+'/getStudentinfoByIDREST/' + this.cookie.get('loginID'), this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
       this.currStudent = data
       var temp:any;
       this.http.get(this.connectionLink.getConnection()+'/getSystemTimeREST', this.options)
       .map((res: Response) => res.json())
       .subscribe(data => {
        temp=data;
        this.Semester=temp.semester;
        this.academicYear=temp.acaYear;
        this.initialization();
        });
     },
    err=>{
     this.cookie.delete('loginID');
     this.cookie.delete('token');
     this.router.navigate(['/Login']);
    });
  }

  initialization(){
    $('#academicyear').val(this.academicYear);
    $('#semester').val(this.Semester);

    this.http.get(this.connectionLink.getConnection()+'/getCourseEnrolledList/'+this.studentCode+'&'+this.academicYear+'&'+this.Semester, this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.course = data 
     });

  }
  ngOnChanges() {
    console.log($('#academicyear').val());
  }
  update(){

    var year =$('#academicyear').val();
    var semester=$('#semester').val();

    this.http.get(this.connectionLink.getConnection()+'/getCourseEnrolledList/'+this.studentCode+'&'+year+'&'+semester, this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      console.log(data);
      this.course = data 
     });
  }
}
