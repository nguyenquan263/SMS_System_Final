import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarNavbarComponent } from './sidebar-navbar/sidebar-navbar.component';
import { APP_BASE_HREF } from '@angular/common';
import { StudentInformationComponent } from './student-information/student-information.component';
import { ClassStatusComponent } from './class-status/class-status.component';
import { AasRegistrationComponent } from './aas-registration/aas-registration.component';
import { StudentProhibitedComponent } from './student-prohibited/student-prohibited.component';
import { GradeAndSemesterComponent } from './grade-and-semester/grade-and-semester.component';
import { TranscriptHccComponent } from './transcript-hcc/transcript-hcc.component';
import { Policy2Component } from './policy2/policy2.component';
import { DegreePlanComponent } from './degree-plan/degree-plan.component';
import { AasTranscriptComponent } from './aas-transcript/aas-transcript.component';
import { EslTranscriptComponent } from './esl-transcript/esl-transcript.component';
import { DarsComponent } from './dars/dars.component';
import { VnRegistrationComponent } from './vn-registration/vn-registration.component';
import { CheckLoginService } from './check-login.service';
import { EnrichmentRegistrationComponent } from './enrichment-registration/enrichment-registration.component';
import { EslRegistrationComponent } from './esl-registration/esl-registration.component';
import { CourseEnrolledComponent} from './course-enrolled/course-enrolled.component';
import { TimetableComponent } from './timetable/timetable.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { TuitionFeeComponent } from './tuition-fee/tuition-fee.component';
import { OtherSeoiComponent } from './other-seoi/other-seoi.component';
import { EslSeoiListingComponent } from './esl-seoi-listing/esl-seoi-listing.component';
import { EslSeoiValuationComponent } from './esl-seoi-valuation/esl-seoi-valuation.component';
import { AasSeoiComponent } from './aas-seoi/aas-seoi.component';
import { AasSeoiEvaluationformComponent } from './aas-seoi-evaluationform/aas-seoi-evaluationform.component';
import { RequestAasDegreeComponent } from './request-aas-degree/request-aas-degree.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarNavbarComponent,
    StudentInformationComponent,
    ClassStatusComponent,
    AasRegistrationComponent,
    StudentProhibitedComponent,
    GradeAndSemesterComponent,
    TranscriptHccComponent,
    Policy2Component,
    DegreePlanComponent,
    AasTranscriptComponent,
    EslTranscriptComponent,
    DarsComponent,
    VnRegistrationComponent,
    EnrichmentRegistrationComponent,
    EslRegistrationComponent,
	  CourseEnrolledComponent,
    TimetableComponent,
    StudentAttendanceComponent,
    TuitionFeeComponent,
    OtherSeoiComponent,
    EslSeoiListingComponent,
    EslSeoiValuationComponent,
    AasSeoiComponent,
    AasSeoiEvaluationformComponent,
    RequestAasDegreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    RouterModule.forRoot([
      {
        path: 'Login',
        component: LoginComponent
      },
      {
        path: '',
        component: SidebarNavbarComponent,
        children:[
          {
            path: '',
            component: StudentInformationComponent
          },
          {
            path: 'StudentInformation',
            component: StudentInformationComponent
          },
          {
            path: 'ClassStatus',
            component: ClassStatusComponent
          },
          {
            path: 'AASRegistration',
            component: AasRegistrationComponent
          },
          {
            path: 'StudentProhibited',
            component: StudentProhibitedComponent
          },
          {
            path:'GradeAndSemester',
            component:GradeAndSemesterComponent
          },
		           {
            path: 'CourseEnrolled',
            component: CourseEnrolledComponent
          },
          {
            path: 'StudentAttendance',
            component: StudentAttendanceComponent
          },
          {
            path: 'Timetable',
            component: TimetableComponent
          },
          {
            path: 'TuitionFee',
            component: TuitionFeeComponent
          },
          {
            path: 'CourseEnrolled',
            component: CourseEnrolledComponent
          },
          {
            path:'TranscriptHCC',
            component:TranscriptHccComponent
          },
          {
            path:'Policy2',
            component:Policy2Component
          },
          {
            path:'DegreePlan',
            component:DegreePlanComponent
          },
          {
            path:'AASTranscript',
            component:AasTranscriptComponent
          },
          {
            path:'Dars',
            component:DarsComponent
          },
		      {
            path: 'VNRegistration',
            component: VnRegistrationComponent
          },
          {
            path:'ESLTranscript',
            component:EslTranscriptComponent
          },
          {
            path:'EnrichmentRegistration',
            component:EnrichmentRegistrationComponent
          },
          {
            path:'ESLRegistration',
            component:EslRegistrationComponent
          },
          {
            path:'OtherSEOI',
            component:OtherSeoiComponent
          },
          {
            path:'ESLSEOI',
            component:EslSeoiListingComponent
          },
          {
            path:'ESLSEOIEvaluation',
            component:EslSeoiValuationComponent
          },
          {
            path:'AASSeoiEvalutaion',
            component:AasSeoiEvaluationformComponent
            // data: { className: '',classID:'',instructorName:'',instructorId:'' }
          },
          {
            path:'AASSeoi',
            component:AasSeoiComponent
          },
          {
            path:'requestAASDegree',
            component:RequestAasDegreeComponent
          }

        ]
      },
      {
        path: 'test',
        component: AasRegistrationComponent
      }

    ])
  ],
  providers: [CheckLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
