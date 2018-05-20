import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';

declare var $:any;
declare var PNotify:any;

@Injectable()
export class EslSeoiService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getSystemTime() {
    return this.http.get(this.connectionLink.getConnection()+'/getSystemTimeSEOIREST',this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getESLSEOIList(studentCode:string, year: string, semester: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getESLClassSEOIREST/'+semester+'&'+year+'&'+studentCode,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getESLSEOIQuestionList(type: string, year: string, semester: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getESLSEOIQuestionREST/'+semester+'&'+year+'&'+type,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

}
