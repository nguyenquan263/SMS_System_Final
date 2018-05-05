import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ConnectionService } from './connection.service';
declare var $: any;
@Injectable()
export class LoginService {
  private loginState = new Subject<any>();

  constructor(private http: Http, private connectionLink: ConnectionService) { }

  getStudent(id: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getStudentinfoByIDREST/'+id)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  setState(state: any) {
    this.loginState.next(state);
  }

  getState(): Observable<any> {
    return this.loginState.asObservable();
  }

}
