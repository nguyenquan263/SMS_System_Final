import { Injectable } from '@angular/core';

import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class StudentInfoforRegistrationService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getStudentinfoforRegistration(id: string) {

    return this.http.get(this.connectionLink.getConnection()+'/getStudentVNInfo/'+id,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getStudentAvaImage(id: string){

    console.log(this.options);
    return this.http.get(this.connectionLink.getConnection()+'/getStudentVNAvaImage/'+id,this.options)
    .toPromise()
    .then(res =>res.text());
   
  }

  getStudentinfoforRegistration1(acaYear: string, semester: string, id: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getStudentESLInfo/'+acaYear+'&'+semester+'&'+id, this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getStudentAvaImage1(id: string){
    return this.http.get(this.connectionLink.getConnection()+'/getStudentESLAvaImage/'+id, this.options)
    .toPromise()
    .then(res =>res.text());
   
  }

  

}
