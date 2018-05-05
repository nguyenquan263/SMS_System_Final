import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class ClassStatusService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getAllClassStatus(acaYear: string, semester: string, type: string){
      if (type !== '-1'){
        return this.http.get(this.connectionLink.getConnection()+'/getAllclassInformation1/'+semester+'&'+acaYear+'&'+type, this.options)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }
      else {
        return this.http.get(this.connectionLink.getConnection()+'/getAllclassInformation2/'+semester+'&'+acaYear, this.options)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }
  }

}
