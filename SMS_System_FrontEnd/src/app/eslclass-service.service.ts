import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';
declare var $:any;
declare var PNotify:any;
@Injectable()
export class EslclassServiceService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getESLClassAvailable(studentCode:string, year: string, semester: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getESLclassAvailableREST/'+studentCode+'&'+year+'&'+semester, this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getESLClassRegistered(studentCode:string, year: string, semester: string) {
    console.log(studentCode);
    return this.http.get(this.connectionLink.getConnection()+'/getESLclassRegisteredREST/'+studentCode+'&'+year+'&'+semester,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  addESLClass(studentID: string, acaYear: string, Semester: string, checkedCodes: string) {
    let classObject = {
      studentCode: studentID,
      acaYear: acaYear,
      Semester: Semester,
      ipAddress: "123",
      classCodes: checkedCodes
    }


    $.ajax({
      type: "POST",
      url: this.connectionLink.getConnection()+"/insertEslcourseREST",
      data: classObject,
      dataType: "text",
      headers: {
        'Authorization':'Bearer ' + this.cookie.get('token')
      },
      success: function(response)
      {
        var notification0 = new PNotify({
          title: 'Notification: ',
          text: response
        });

      },
      error: function(data){
        console.log(data);
      }
  })
  }

  deleteESLClass(studentID: string, acaYear: string, Semester: string, classCodes: string) {
    let classObject = {
      studentCode: studentID,
      acaYear: acaYear,
      Semester: Semester,
      ipAddress: "123",
      classCodes: classCodes,
    }


    $.ajax({
      type: "POST",
      url: this.connectionLink.getConnection()+"/deleteEslcourseREST",
      data: classObject,
      dataType: "text",
      headers: {
        'Authorization':'Bearer ' + this.cookie.get('token')
      },
      cache: false,
      success: function(response)
      {
        var notification0 = new PNotify({
          title: 'Notification: ',
          text: response
        });
      },
      error: function(data){
        alert(data);
      }
  })
  }

}
