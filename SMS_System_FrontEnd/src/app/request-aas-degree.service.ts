import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RequestAasDegreeService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAASDegreeRequest(studentID: string){
    return this.http.get(this.connectionLink.getConnection()+'/getAASDegreeRequestByStudentIDREST/'+studentID, this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }
  
  getStudentFinish(studentID: string){
    return this.http.get(this.connectionLink.getConnection()+'/checkStudentFinishAAS/'+studentID, this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }  

}
