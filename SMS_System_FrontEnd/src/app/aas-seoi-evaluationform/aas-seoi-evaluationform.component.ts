import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from '../connection.service';
import { AASSeoiDataService } from '../aasseoidata.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormGroup, FormControl } from '@angular/forms'
var self:any;
declare var $:any;
declare var PNotify :any;
@Component({
  selector: 'app-aas-seoi-evaluationform',
  templateUrl: './aas-seoi-evaluationform.component.html',
  styleUrls: ['./aas-seoi-evaluationform.component.css']
})

export class AasSeoiEvaluationformComponent implements OnInit {

  constructor(private cookie: CookieService,private activatedRoute: ActivatedRoute,
    private router: Router,private http: Http
    , private connectionLink:ConnectionService) { }
  
    private classId
    private className
    private instructorId 
    private instructorName
    private listQuestion
    private studentCode
    private checkError=false
  ngOnInit() {
    this.studentCode=this.cookie.get('loginID');   
    self = this;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.classId= params['classID']
      this.className=params['className']
      this.instructorId = params['instructorID']
      this.instructorName = params['instructorName']
      console.log(this.instructorName+" "+this.instructorId )
      this.initialize();
    });
   
      $("#formdata").validate({
      
        showErrors: function(errorMap, errorList) {
          var num:number;
          num=parseInt(`${this.numberOfInvalids()}`);
          if(num>0){
            var notification1 = new PNotify({
              title: 'Error',
              text: `You have ${this.numberOfInvalids()} question did not answer `,
              type: 'error',
              delay: 1000
            });
          }
          else {
            self.checkError=true
            var notification2 = new PNotify({
              title: 'Success',
              text: `You have answer all question. Check the button to submit the data`,
              type: 'success',
              delay: 500
            });
            
          }
          // alert(`You have ${this.numberOfInvalids()} question did not answer `);
        }
        
    }); 


    $(".formdata").submit(function(e) {
    
      e.preventDefault();
      var myJsonString = $(this).serialize();
      
      console.log(myJsonString);
      if(self.checkError==true){
       self.sendDataToSever(myJsonString)
      }
  });
  }
  initialize(){
    self.http.get(this.connectionLink.getConnection()+'/getAASSEOIQuestion/' +this.classId+'&'+this.instructorId)
    .map((res: Response) => res.json())
    .subscribe(data => {
       self.listQuestion= data
      console.log(data)
      
    });
   
  }
  
 sendDataToSever(myJsonString){
      
  $.ajax({
    type: "POST",
    url: self.connectionLink.getConnection()+'/SaveEvaluationData',
    data:  myJsonString,
    dataType: "text",
    // headers: {
    //   'Authorization':'Bearer ' + this.cookie.get('token')
    // },
    cache: false,
    success: function(response)
    {
      var notification1 = new PNotify({
        title: 'Error',
        text: `Failed to save your evaluation please try again`,
        type: 'success',
        delay: 1500
      });
      location.reload()
    },
    error: function(data){
         var notification1 = new PNotify({
            title: 'Error',
            text: `Failed to save your evaluation please try again`,
            type: 'error',
            delay: 1500
          });
    }
})
 }
  


}
