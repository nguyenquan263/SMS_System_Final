import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
var self:any;
@Component({
  selector: 'app-aas-seoi',
  templateUrl: './aas-seoi.component.html',

  styleUrls: ['./aas-seoi.component.css'],
  providers: [ CookieService,ConnectionService]
})
export class AasSeoiComponent implements OnInit {
  listClasses: any = null;
  
  constructor(private cookie: CookieService,private router: Router,private http: Http
    , private connectionLink:ConnectionService) { }

  ngOnInit() {
    // this.studentCode=this.cookie.get('loginID');   
    self = this;
    this.http.get(this.connectionLink.getConnection()+'/getClassListSEOI/' +2015+'&'+1+'&'+13065 )
    .map((res: Response) => res.json())
    .subscribe(data => {
       this.listClasses= data
      console.log(data)

     });
  }
  takeSurvey(classID: any,className: any, instructorID: any,instructorName:any){
    // self.aasSeoiDataService.classID=classID
    // self.aasSeoiDataService.className=className
    // self.aasSeoiDataService.instructorID=instructorID
    // self.aasSeoiDataService.instructorName=instructorName
    // self.router.navigate['AASSeoiEvalutaion']
  
    self.router.navigate(['AASSeoiEvalutaion'], { queryParams: { classID: classID,className:className,instructorID:instructorID,instructorName:instructorName},skipLocationChange: true });
  }

}
