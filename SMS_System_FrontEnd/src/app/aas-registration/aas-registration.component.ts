import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../login.service';
import { ConnectionService } from '../connection.service';
import { TimetableService } from '../timetable.service';
import { Router } from '@angular/router';

declare var $: any;
declare var PNotify :any;
@Component({
  selector: 'app-aas-registration',
  templateUrl: './aas-registration.component.html',
  styleUrls: ['./aas-registration.component.css'],
  providers: [CookieService,LoginService,ConnectionService,TimetableService]
})
export class AasRegistrationComponent implements OnInit {
  currStudentID: any;
  currStudent:any;
  serverLink: string;
  options: RequestOptions; //Option (Used for security)
  headers:any;  //Headers (Used for security)
  specializationData;
  specializationArr;
  StudentAASInfoData;
  TimetableData;

  isToefl:any;
  acaYear:any;
  semester:any;
  majorCode:any;
  catalogID:any;
  ipAddress:any;
  getClassRegisteredData:any;
  getClassOpenedData:any;
  getClassPassedData:any;
  classRegisteredCode:any;
  classPassedCode:any;
  classOpenCode:any;
  beforeAasRegistration:any;
  eslLevel:any;

  constructor(private http: Http,private cookie: CookieService,
    private loginService: LoginService,private connectionLink:ConnectionService,
    private TimetableService: TimetableService, private router:Router) {
    //Initiate header (for security)
    this.headers = new Headers();
    this.headers.append('Authorization', 'Bearer ' + this.cookie.get('token'));
    this.options = new RequestOptions({ headers: this.headers });
  }
  // Loading data to show the page
  ngOnInit() {
    this.serverLink = this.connectionLink.getConnection();
    this.currStudentID=this.cookie.get('loginID');
    this.initializeStudentAASInfo();
    this.initializeSpecialization();
    this.getESLLevel();
    this.getSystemTime();
    setTimeout(() => {
      this.getBeforeAASRegistration();
      this.getClassRegistered();
      this.getClassOpened();
      this.getClassPassed()
    }, 2000);
     //Set navigation bar 
     $("#locationLink").html('<a href="/" class="text-infor">Home </a>/' +
     '<a href="/AASRegistration" class="text-infor">AAS Registration</a>')
   //Load current student's information (name, image, student Id,...)
   this.http.get(this.serverLink + '/getStudentinfoByIDREST/' +  this.cookie.get('loginID'),this.options).map((res: Response) => res.json())
      .subscribe(data => {
       this.currStudent = data;    
         //Set student's full name and a small photo in a sidebar 
         $("#stuFullName").text(this.currStudent.lastName + " " + this.currStudent.firstName);
         $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + this.currStudent.image);

     },err=>{
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
    //  $('.SpecializationSB').select2();
    var that=this;
     $('.SpecializationSB').select2().on("change",function(){
      alert( $('.SpecializationSB').val());
      that.majorCode=$('.SpecializationSB').val();
      that.updateData();
    });
  }
  //This function is used to get Student AAS Information
  initializeStudentAASInfo(){
    this.http.get(this.serverLink+'/getStudentAASInfo/'+this.currStudentID,this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      console.log(data);
      this.StudentAASInfoData = data;
      this.catalogID=data.catalogCode;
      this.isToefl=data.isToefl;
    },err=>{
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
  }
  //This function is used to get Specialization Information
  initializeSpecialization(){
    this.http.get(this.serverLink+'/getSpecializationActived',this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.specializationData = data;
        this.majorCode=data[0].id;
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
      
  }
  //This function is used to get ESL Level
  getESLLevel(){
    this.http.get(this.serverLink+'/getESLLevel/'+this.currStudentID,this.options)
    .map((res: Response) => res.json())
    .subscribe(data => {
      this.eslLevel=data.eslLevel;
    },err=>{
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
  }
 //This function is used to get academic year and semester
  private getSystemTime() {
    return this.http.get(this.serverLink+'/getSystemTimeREST',this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.acaYear=data.acaYear;
        this.semester=data.semester;
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }
  //This function is used to get Class Registered Information
  private getClassRegistered() {
    return this.http.get(this.serverLink+'/getClassRegistered/'+this.acaYear+'&'+this.semester+'&'+this.currStudentID,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.getClassRegisteredData = data;
        // console.log(this.getClassRegisteredData);
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }
  //This function is used to get Class Opened Information
  private getClassOpened() {
    return this.http.get(this.serverLink+'/getClassOpened/'+this.acaYear+'&'+this.semester+'&'+this.currStudentID+
    '&'+this.majorCode+'&'+this.catalogID,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.getClassOpenedData = data;
        // console.log(this.getClassOpenedData);
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }
  //This function is used to get Class Passed Information
  getClassPassed() {
    return this.http.get(this.serverLink+'/getClassPassed/'+this.acaYear+'&'+this.semester+'&'+this.currStudentID+
    '&'+this.catalogID,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.getClassPassedData = data;
        // console.log(this.getClassPassedData);
      },err=>{
        this.cookie.delete('loginID');
        this.cookie.delete('token');
        this.router.navigate(['/Login']);
      });
  }
  //This function is used to add new class from class offered (send class info to api)
  insertCourseRegistration(){
    var formData = new FormData();
    formData.append('studentID',this.currStudentID);
    formData.append('domain', this.currStudentID);
    // formData.append('ipAddress', this.ipAddress);
    formData.append('acaYear', this.acaYear);
    formData.append('semester', this.semester);
    formData.append('classCode', this.classOpenCode);
    formData.append('catalog', this.catalogID);
    formData.append('isToefl', this.isToefl);

    this.http.post(this.serverLink+'/insertCourseRegistrationREST', formData,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        alert(data.token);
        this. updateData();
        if(data.token==1)
        {
          var notification1 = new PNotify({
            title: 'Successfully !!!',
            text: 'Add New Class Successfully',
            type: 'success',
            delay: 2000
          });
        }else{
          if(data.token==0)
          {
            var notification0 = new PNotify({
              title: 'Error !!!',
              text: data.error,
              type: 'error',
              delay: 4000
            });
          }else{
            if(data.token==2)
            {
            var notification2 = new PNotify({
              title: 'Error !!!',
              text:  data.error,
              type: 'error',
              delay: 4000
            });
            }else{
              if(data.token==3)
              {
                var notification3 = new PNotify({
                title: 'Error !!!',
                text:  'Timetable of '+ data.error + ' are duplicated',
                type: 'error',
                delay: 4000
              });
              }else{
              if(data.token==4)
              {
                var notification4 = new PNotify({
                title: 'Error !!!',
                text: data.error,
                type: 'error',
                delay: 4000
              });
              }else{
                if(data.token==5)
                {
                  var notification5 = new PNotify({
                  title: 'Error !!!',
                  text: data.error,
                  type: 'error',
                  delay: 4000
                });
                }else{
                  if(data.token==6)
                  {
                    var notification6 = new PNotify({
                    title: 'Error !!!',
                    text: data.error,
                    type: 'error',
                    delay: 4000
                    });
                  }else{
                    if(data.token==7)
                    {
                      var notification7 = new PNotify({
                      title: 'Error !!!',
                      text: data.error,
                      type: 'error',
                      delay: 4000
                      });
                    }else{
                      if(data.token==8)
                      {
                        var notification8 = new PNotify({
                        title: 'Error !!!',
                        text: data.error,
                        type: 'error',
                        delay: 4000
                        });
                      }
                    }   
                }          
              }
            } 
          }         
        }
       }
      }
    },err=>{
      console.log(err);
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
  }
  //This function is used to delete class (send class info to api)
  deleteCourseRegistration(){
    var formData = new FormData();
    formData.append('studentID',this.currStudentID);
    formData.append('domain', this.currStudentID);
    // formData.append('ipAddress', this.ipAddress);
    formData.append('acaYear', this.acaYear);
    formData.append('semester', this.semester);
    formData.append('classCode', this.classRegisteredCode);
    formData.append('catalog', this.catalogID);

    this.http.post(this.serverLink+'/deleteCourseRegistrationREST', formData,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        alert(data);
        this. updateData();
        if(data==1)
        {
          var notification1 = new PNotify({
            title: 'Successfully !!!',
            text: 'Delete Class Successfully',
            type: 'success',
            delay: 2000
          });
        }
      },
      err => {
        console.log(err);
      });
  }
  //This function is used to add new class from class Passed (send class info to api)
  insertCoursePassed(){
    var formData = new FormData();
    formData.append('studentID',this.currStudentID);
    formData.append('domain', this.currStudentID);
    // formData.append('ipAddress', this.ipAddress);
    formData.append('acaYear', this.acaYear);
    formData.append('semester', this.semester);
    formData.append('classCode', this.classPassedCode);
    formData.append('catalog', this.catalogID);
    formData.append('isToefl', this.isToefl);

    this.http.post(this.serverLink+'/insertCourseRegistrationREST', formData,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        alert(data.token);
        this. updateData();
        if(data.token==1)
        {
          var notification1 = new PNotify({
            title: 'Successfully !!!',
            text: 'Add New Class Successfully',
            type: 'success',
            delay: 2000
          });
        }else{
          if(data.token==0)
          {
            var notification0 = new PNotify({
              title: 'Error !!!',
              text: data.error,
              type: 'error',
              delay: 4000
            });
          }else{
            if(data.token==2)
            {
            var notification2 = new PNotify({
              title: 'Error !!!',
              text:  data.error,
              type: 'error',
              delay: 4000
            });
            }else{
              if(data.token==3)
              {
                var notification3 = new PNotify({
                title: 'Error !!!',
                text:  'Timetable of '+ data.error + ' are duplicated',
                type: 'error',
                delay: 4000
              });
              }else{
              if(data.token==4)
              {
                var notification4 = new PNotify({
                title: 'Error !!!',
                text: data.error,
                type: 'error',
                delay: 4000
              });
              }else{
                if(data.token==5)
                {
                  var notification5 = new PNotify({
                  title: 'Error !!!',
                  text: data.error,
                  type: 'error',
                  delay: 4000
                });
                }else{
                  if(data.token==6)
                  {
                    var notification6 = new PNotify({
                    title: 'Error !!!',
                    text: data.error,
                    type: 'error',
                    delay: 4000
                    });
                  }else{
                    if(data.token==7)
                    {
                      var notification7 = new PNotify({
                      title: 'Error !!!',
                      text: data.error,
                      type: 'error',
                      delay: 4000
                      });
                    }else{
                      if(data.token==8)
                      {
                        var notification8 = new PNotify({
                        title: 'Error !!!',
                        text: data.error,
                        type: 'error',
                        delay: 4000
                        });
                      }
                    }   
                }          
              }
            } 
          }         
        }
       }
      }
    },err=>{
      console.log(err);
      this.cookie.delete('loginID');
      this.cookie.delete('token');
      this.router.navigate(['/Login']);
    });
  }
//Function is use to get Before AAS Registration
  private getBeforeAASRegistration(){
    var formData = new FormData();
    formData.append('studentID',this.currStudentID);
    formData.append('acaYear', this.acaYear);
    formData.append('semester', this.semester);

    this.http.post(this.serverLink+'/getBeforeAASRegistration', formData,this.options)
      .map((res: Response) => res.json())
      .subscribe(data => {
        this.beforeAasRegistration=data.beforeAASRegistraion;
      },
      err => {
        console.log(err);
      });
  }


  updateData(){
    this.getClassRegistered();
    this.getClassOpened();
    this.getClassPassed();
  }
  getClassRegisteredCode(){
    let classRegisteredCodeArr = [];

    $(".classRegisteredCB:checked").each(function() {
      classRegisteredCodeArr.push($(this).val());
    });

    console.log(classRegisteredCodeArr);
    this.classRegisteredCode=classRegisteredCodeArr[0];
    for (var x = 1; x<classRegisteredCodeArr.length; x++) {
      this.classRegisteredCode=this.classRegisteredCode+","+classRegisteredCodeArr[x];
    }
    // alert(this.classRegisteredCode);
  }
  getClassOpenCode(){
    let classOpenCodeArr = [];

    $(".classOpenCB:checked").each(function() {
      classOpenCodeArr.push($(this).val());
    });

    console.log(classOpenCodeArr);
    this.classOpenCode=classOpenCodeArr[0];
    for (var x = 1; x<classOpenCodeArr.length; x++) {
      this.classOpenCode=this.classOpenCode+","+classOpenCodeArr[x];
    }
    alert(this.classOpenCode);
  }

  getClassPassedCode(){
    let classPassedCodeArr = [];

    $(".classPassedCB:checked").each(function() {
      classPassedCodeArr.push($(this).val());
    });

    console.log(classPassedCodeArr);
    this.classPassedCode=classPassedCodeArr[0];
    for (var x = 1; x<classPassedCodeArr.length; x++) {
      this.classPassedCode=this.classPassedCode+","+classPassedCodeArr[x];
    }
    // alert(this.classPassedCode);
  }
  //This function is used to show Timetable Modal
  showTimetable(classCode: string){
    this.http.get(this.serverLink + '/getTimetableREST/'+classCode+'&'+this.acaYear+'&'+this.semester,this.options).map((res: Response) => res.json())
    .subscribe(data => {
      this.TimetableData = data;
      console.log(this.TimetableData.timetableMatrix);
      $('.timeTableModal').modal();
    });
    
  }
  convertToSemester(semester: Number) {
    if (semester == 1)
      return "SUMMER";
    else if (semester == 4)
      return "SPRING";
    else if (semester == 3)
      return "FALL";
    else
      return "UNKNOWN";
  }
}
