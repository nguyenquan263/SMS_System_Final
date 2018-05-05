import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
@Injectable()
export class StudentAASAttendanceService {
    
      constructor(private http: Http,  private connectionLink: ConnectionService) { }
    
      getStudentAttendanceAASLists(academicyear: string, semester: string, id: string) {
        return this.http.get(this.connectionLink.getConnection()+'/getStudentAttendanceAASList/'+id+'&'+academicyear+'&'+semester)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }
    
 }