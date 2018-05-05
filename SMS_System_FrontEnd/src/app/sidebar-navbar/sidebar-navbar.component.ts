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
import { Subscription } from 'rxjs/Subscription';

declare var $: any;

@Component({
  selector: 'app-sidebar-navbar',
  templateUrl: './sidebar-navbar.component.html',
  styleUrls: ['./sidebar-navbar.component.css'],
  providers: [CookieService]

})


export class SidebarNavbarComponent implements OnInit {
  private subscription: Subscription;
  private loginState:any;
  loadAPI: Promise<any>;
  imageName: string;
  studentFullname: string;

  constructor(private cookie: CookieService, private router: Router)  {
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

}
