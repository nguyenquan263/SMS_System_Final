import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class TimetableService {
  headers: any;
  options: RequestOptions;
      constructor(private http: Http,private connectionLink: ConnectionService, private cookie: CookieService) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
        this.options = new RequestOptions({ headers: this.headers });
      }
    
      getTimetable(academicyear: string, semester: string, id: string, beginDate: string, endDate: string) {
        console.log(this.connectionLink.getConnection()+'/getTimeTable/'+id+'&'+academicyear+'&'+semester+'&'+beginDate+'&'+endDate)
        return this.http.get(this.connectionLink.getConnection()+'/getTimeTable/'+id+'&'+academicyear+'&'+semester+'&'+beginDate+'&'+endDate, this.options)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }

      getTimetableRegis(classCode: string, acaYear: string, semester: string ) {
        return this.http.get(this.connectionLink.getConnection()+'/getTimetableREST/'+classCode+'&'+acaYear+'&'+semester, this.options)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }
    
 }