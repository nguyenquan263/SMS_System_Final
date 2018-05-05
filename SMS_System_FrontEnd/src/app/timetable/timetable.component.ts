import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {SemesterInformationService} from '../semester-info.service'
import { TimetableService} from '../timetable.service';
import {IMyDpOptions,IMyDateModel} from 'mydatepicker';
import 'rxjs/add/operator/map';
import { ConnectionService } from '../connection.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
declare var $ : any;

@Component({

  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  providers:[CookieService, ConnectionService]
})

export class TimetableComponent implements OnInit {
  timeTable:any;
  dayOfWeek:any;
  studentCode:string;
  Semester: any;
  academicYear: any;
  semesterName:String;
  beginDate: string;
  endDate: string=null;
  dayName=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  DateOptions: IMyDpOptions ;
  modelBegin: any;
  modelEnd: any;

  currStudent: any = null;
  currSemesterAndYear:any= null;
  headers:any; //Headers (used for security)
  serverLink: string = this.connectionLink.getConnection();//The link of the server
  options: RequestOptions; //Option (used for security);
  constructor( private cookie: CookieService,private router: Router,private http: Http
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
    console.log(this.Semester)
    if(this.Semester===1){
      this.semesterName="Summer"
    }
    else if(this.Semester===2){
      this.semesterName="Fall"
    }
    else{
      this.semesterName="Spring"
    }
    this.DateOptions= {
      // disableUntil : {day: 1, month: 1,year: this.academicYear},
      // disableSince : {day: 1, month: 1,year: this.academicYear+1},
      sunHighlight: true,
      dateFormat: 'dd/mm/yyyy',
    };
    this.modelBegin= { date: { year: this.academicYear, month: 1, day: 1 } };
    this.modelEnd= { date: { year: this.academicYear, month: 1, day: 1 } };
    this.beginDate=this.modelBegin.date.day+":"+this.modelBegin.date.month+":"+this.modelBegin.date.year;

  }
  onBeginDateChanged(event: IMyDateModel) {
    if(this.endDate===null){
      this.beginDate=event.date.day+":"+event.date.month+":"+event.date.year
    }
    else{
      this.beginDate=event.date.day+":"+event.date.month+":"+event.date.year
      this.http.get(this.connectionLink.getConnection()+'/getTimeTable/'+this.studentCode+'&'+this.academicYear+'&'+this.Semester+'&'+this.beginDate+'&'+this.endDate, this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.timeTable = data 
        this.dayOfWeek=this.timeTable.dayOfWeek
       });
      // this.timetableService.getTimetable(this.academicYear,this.Semester,this.studentCode,this.beginDate,this.endDate)
      // .then(data =>{this.timeTable = data;this.dayOfWeek=this.timeTable.dayOfWeek});
    }
  }
  onEndDateChanged(event: IMyDateModel) {
    //  console.log('onDateChanged(): ', event.date, ' - jsdate: ', new Date(event.jsdate).toLocaleDateString(), ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
    this.endDate=event.date.day+":"+event.date.month+":"+event.date.year;
    this.http.get(this.connectionLink.getConnection()+'/getTimeTable/'+this.studentCode+'&'+this.academicYear+'&'+this.Semester+'&'+this.beginDate+'&'+this.endDate, this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.timeTable = data 
      this.dayOfWeek=this.timeTable.dayOfWeek
     });
    // this.timetableService.getTimetable(this.academicYear,this.Semester,this.studentCode,this.beginDate,this.endDate)
    // .then(data =>{this.timeTable = data;this.dayOfWeek=this.timeTable.dayOfWeek});
  }


}
