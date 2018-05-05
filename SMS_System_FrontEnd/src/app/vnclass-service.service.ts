import { Injectable } from '@angular/core';
import { Http, HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
import { CookieService } from 'ngx-cookie-service';



declare var $:any;
declare var PNotify:any;
@Injectable()
export class VnclassServiceService {
  headers: any;
  options: RequestOptions;
  constructor(private http: Http, private connectionLink:ConnectionService, private cookie: CookieService) {

    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }

  getVNClassAvailable(studentCode:string, year: string, semester: string) {
    return this.http.get(this.connectionLink.getConnection()+'/getVNclassAvailableREST/'+studentCode+'&'+year+'&'+semester,this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  getVNClassRegistered(studentCode:string, year: string, semester: string) {
    console.log(studentCode);
    return this.http.get(this.connectionLink.getConnection()+'/getVNclassRegisteredREST/'+studentCode+'&'+year+'&'+semester, this.options)
    .toPromise()
    .then(res =>res.json())
    .then(resJson => resJson);
  }

  addVnclass(studentID: string, acaYear: string, Semester: string, checkedCodes: string) {
    let classObject = {
      studentCode: studentID,
      acaYear: acaYear,
      Semester: Semester,
      ipAddress: "123",
      classCodeOpen: checkedCodes
    }


    $.ajax({
      type: "POST",
      url: this.connectionLink.getConnection()+"/insertVncourseREST",
      data: classObject,
      headers: {
        'Authorization':'Bearer ' + this.cookie.get('token')
      },
      dataType: "text",
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

  deleteVnclass(studentID: string, acaYear: string, Semester: string, classCodes: string, studyCodes: string) {
    let classObject = {
      studentCode: studentID,
      acaYear: acaYear,
      Semester: Semester,
      ipAddress: "123",
      classCodes: classCodes,
      studyCodes: studyCodes
    }


    $.ajax({
      type: "POST",
      url: this.connectionLink.getConnection()+"/deleteVncourseREST",
      data: classObject,
      headers: {
        'Authorization':'Bearer ' + this.cookie.get('token')
      },
      dataType: "text",
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

}
