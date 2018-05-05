import { Component, OnInit } from '@angular/core';
import {SemesterInformationService} from '../semester-info.service'
import { TuitionFeeService } from '../tuition-fee.service';
import { DropFeeService } from '../drop-fee.service';
import { Router} from '@angular/router';
import { ConnectionService } from '../connection.service';
import { CookieService } from 'ngx-cookie-service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
declare var $: any;
@Component({
  selector: 'app-tuition-fee',
  templateUrl: './tuition-fee.component.html',
  styleUrls: ['./tuition-fee.component.css'],
  providers: [ CookieService,ConnectionService]
})
export class TuitionFeeComponent implements OnInit {
  tuitionFee:any;
  dropFee:any;
  studentCode:string;
  Semester: any;
  academicYear: any;
  tuitionUSDSubmit:number;
  tuitionVNDSubmit:number;
  dropUSDSubmit:number;
  dropVNDSubmit:number;

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
    this.tuitionUSDSubmit=0.0;
    this.tuitionVNDSubmit=0.0;
    this.dropUSDSubmit=0.0;
    this.dropVNDSubmit=0.0;
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
    this.http.get(this.connectionLink.getConnection()+'/getTuitionFee/'+this.studentCode+'&'+this.academicYear+'&'+this.Semester, this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.tuitionFee = data;
      this.tuitionFeeTotal(); 
     });
     this.http.get(this.connectionLink.getConnection()+'/getDropFee/'+this.studentCode+'&'+this.academicYear+'&'+this.Semester, this.options)
     .map((res: Response) => res.json())
     .subscribe(data => {
       this.dropFee = data;
       this.dropFeeTotal(); 
      });

    // this.tuitionFeeService.getTuitionFee(this.academicYear,this.Semester,this.studentCode)
    // .then(data =>{console.log(data);this.tuitionFee= data;this.tuitionFeeTotal()}); 
    // this.dropFeeService.getDropFee(this.academicYear,this.Semester,this.studentCode)
    // .then(data =>{ this.dropFee= data;this.dropFeeTotal()}); 
 
  }
  tuitionFeeTotal(){
    for (let tu of this.tuitionFee) {
      
      this.tuitionUSDSubmit+=tu.submitUSD;   
      this.tuitionVNDSubmit+=tu.submitVND;
      if(tu.submitUSD===0){
        tu.submitUSD=" "
      }
      else{
        tu.submitUSD=(tu.submitUSD).toLocaleString('en-us', {minimumFractionDigits:0});
      }
      if(tu.submitVND===0){
        tu.submitVND=" "
      }
      else{
        tu.submitVND=(tu.submitVND).toLocaleString('en-us', {minimumFractionDigits:0});
      }

    }
  }


  dropFeeTotal(){
    for (let dr of this.dropFee) {
      this.dropUSDSubmit+=dr.submitUSD;   
      this.dropVNDSubmit+=dr.submitVND;
      if(dr.submitUSD===0){
        dr.submitUSD=" "
      }
      else{
        dr.submitUSD=(dr.submitUSD).toLocaleString('en-us', {minimumFractionDigits:0});
      }
      if(dr.submitVND===0){
        dr.submitVND=" "
      }
      else{
        dr.submitVND=(dr.submitVND).toLocaleString('en-us', {minimumFractionDigits:0});
      }
    }
    
   console.log(this.tuitionUSDSubmit);
  }

}
