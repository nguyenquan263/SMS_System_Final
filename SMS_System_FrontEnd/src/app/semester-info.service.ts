import { Injectable } from '@angular/core';

import { Http, HttpModule, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service'; 
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class SemesterInformationService {
  headers: any;
  options: RequestOptions;

  constructor(private http: Http, private connectionLink: ConnectionService, private cookie: CookieService) { 
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getSemesterInformation() {

    return this.http.get(this.connectionLink.getConnection()+'/getSystemTimeREST',this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getAcademicYear()
  {

    return this.http.get(this.connectionLink.getConnection()+'/getAcademicYear',this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getSystemDateAndTime(format:String)
  {

    return this.http.get(this.connectionLink.getConnection()+'/getSystemDateAndTime/'+format,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

}
