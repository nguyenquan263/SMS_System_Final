import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { StudentInformationComponent } from '../student-information/student-information.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { Http, Response, Headers } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { ConnectionService } from '../connection.service';

declare var $: any;

@Component({
  selector: 'app-sidebar-navbar',
  templateUrl: './sidebar-navbar.component.html',
  styleUrls: ['./sidebar-navbar.component.css'],
  providers: [CookieService,ConnectionService]

})


export class SidebarNavbarComponent implements OnInit {
  private subscription: Subscription;
  private loginState:any;
  serverLink: string = this.connectionLink.getConnection();
  loadAPI: Promise<any>;
  imageName: string;
  studentFullname: string;
  oldPassword: string;
  newPassword: string;
  reNewPassword: string;
  constructor(private cookie: CookieService, private router: Router, private http: Http,private connectionLink:ConnectionService)  {
  }

  ngOnInit() {
  }


  public loadScript() {
    var isFound = false;
    var scripts = document.getElementsByTagName("script")
    for (var i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
        isFound = true;
      }
    }

    if (!isFound) {
      var dynamicScripts = ["./assets/js/light-bootstrap-dashboard.js-v=2.0.1.htm"];
      for (var i = 0; i < dynamicScripts.length; i++) {
        let node = document.createElement('script');
        node.src = dynamicScripts[i];
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        document.getElementsByTagName('head')[0].appendChild(node);
      }

    }
  }

  logOut()
  {
    this.cookie.delete('loginID');
    this.cookie.delete('token');
    this.router.navigate(['/Login']);
  }

  changePassword() {
    let router = this.router;
    var studentCode=this.cookie.get('loginID');   

      let user = {
      "userName": studentCode,
      "newPassword": this.newPassword
      }
      this.http.get(this.serverLink+'/getUserIDbyCodeandPassword/'+studentCode+'&'+ this.oldPassword).subscribe(
        data => {
          var check:any =data.text();
           if(check==-1){
            $("#warningMes").html('Invalid username or password. Please check them again');
           }
           else if(this.newPassword===this.reNewPassword){
            $("#warningMes").html('');
            this.http.post(this.serverLink+'/changePassword', user).subscribe(
              res => {
                  let result = res.text().split(" ");
                  router.navigate(['/']);
              },
              err => {
                $("#warningMes").html('There is something happens please try it again');
              }
            );
           }
           else{
            $("#warningMes").html('Your re-entered new password is different with new passwod');
           }
        console.log(check);
        },
        err => {
          $("#warningMes").html('Incorrect password. Please check them again');
        }
      );
   
      this.http.post(this.serverLink+'/changePassword', user).subscribe(
        res => {
            let result = res.text().split(" ");
            router.navigate(['/']);
        },
        err => {
          $("#warningMes").html('Invalid username or password. Please check them again');
        }
      );

  }

}
