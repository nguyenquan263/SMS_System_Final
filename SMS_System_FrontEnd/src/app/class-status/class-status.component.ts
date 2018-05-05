import { Component, OnInit } from '@angular/core';
import { ClassStatusService } from '../class-status.service';
import { ConnectionService } from '../connection.service';
import { StudentInfoforRegistrationService } from '../student-infofor-registration.service';
import { CookieService } from 'ngx-cookie-service';
import { SemesterInformationService } from '../semester-info.service'
declare var $: any;

@Component({
  selector: 'app-class-status',
  templateUrl: './class-status.component.html',
  styleUrls: ['./class-status.component.css'],
  providers: [SemesterInformationService, CookieService,ClassStatusService, ConnectionService, StudentInfoforRegistrationService]
})

export class ClassStatusComponent implements OnInit {
  classes: any;
  currStudent: any;
  academicYearInfo: any;
  currSemester: any;
  currSemesterString: string;
  constructor(private semesterService: SemesterInformationService, private cookie: CookieService,private classStatusService: ClassStatusService, private studentInfoservice: StudentInfoforRegistrationService){}

  ngOnInit() {


    this.studentInfoservice.getStudentinfoforRegistration(this.cookie.get('loginID'))
      .then(data => {
        this.currStudent = data;
       // console.log(this.currStudent);
        $("#stuFullName").text(this.currStudent.studentName);

      });
    this.studentInfoservice.getStudentAvaImage(this.cookie.get('loginID'))
      .then(data => {
        $("#smallPhoto").attr("src", "http://oms.saigontech.edu.vn/oms_app/Saigontech_College/student/image/" + data);
      });
    this.semesterService.getAcademicYear()
    .then(data => {
      this.academicYearInfo = data;
      
      this.semesterService.getSemesterInformation()
      .then(data1 => {
        console.log(data1);
        this.currSemester = data1;
        this.getAllClassStatus(data1.acaYear, data1.semester, '-1');
      });
    });


    

    
  }

  getAllClassStatus(acaYear: string, semester: string, type: string){
    this.classStatusService.getAllClassStatus(acaYear,semester, type)
    .then(data =>{
      console.log(data);
      this.classes = data;
    });
  }

  choosed(type: string){
    this.getAllClassStatus($('#academicYear option:selected').text(), $('#semester option:selected').val(), type);
  }


}
