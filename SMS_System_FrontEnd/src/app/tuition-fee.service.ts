import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { ConnectionService } from './connection.service';
@Injectable()
export class TuitionFeeService {
    
      constructor(private http: Http, private connectionLink: ConnectionService) { }
    
      getTuitionFee(academicyear: string, semester: string, id: string) {
        return this.http.get(this.connectionLink.getConnection()+'/getTuitionFee/'+id+'&'+academicyear+'&'+semester)
        .toPromise()
        .then(res =>res.json())
        .then(resJson => resJson);
      }
    
 }