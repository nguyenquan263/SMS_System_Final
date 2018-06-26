import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Http, Response, Headers } from '@angular/http';
import { ConnectionService } from '../connection.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [CookieService,ConnectionService],
})

export class LoginComponent implements OnInit {
  loadAPI: Promise<any>;
  inputUsername: string = '';
  inputPassword: string = '';

  serverLink: string = this.connectionLink.getConnection();//The link of the server
  constructor(private cookieService: CookieService, private router: Router, private http: Http,private connectionLink:ConnectionService) { 
    let cookie = this.cookieService;
    //Reset the cookie cookie
    cookie.delete('loginID');
    cookie.delete('token');
  }

  ngOnInit() {


    $("#passwordField").keyup(function (event) {
      if (event.keyCode === 13) {
        $("#loginBtn").click();
      }
    });
  }

  validAccount() {
    let router = this.router;
    let cookie = this.cookieService;
    // $.ajax({
    //   url: 'http://localhost:9000/getUserIDbyUsernameandPassword/' + this.inputUsername + '&' + this.inputPassword,
    //   type: 'GET',
    //   dataType: 'html',
    //   contentType: 'application/json',
    //   success: function (result) {
    //     console.log(result);
    //     if (result == -1) {
    //       $("#warningMes").html('Login failed. Please check your username and password.');
    //     }
    //     else {
    //       cookie.set('loginID', result);
 
    //       router.navigate(['/']);
    //     }
    //   },
    //   error: function (result) {
    //     $("#warningMes").html('An error occured in server. Please come back later');
    //   }
    // });

    // this.http.post('http://localhost:9000/login', JSON.stringify({ username: this.inputUsername, password: this.inputPassword }))
    //         .map((response: Response) => {
    //           console.log(response);
    //  });
   let user = {
    "userName": this.inputUsername,
    "password": this.inputPassword
    }
    this.http.post(this.serverLink+'/login', user).subscribe(
      res => {
         let result = res.text().split(" ");
        if (result[1] == "-1")
        {
          $("#warningMes").html('Invalid username or password. Please check them again');
        }
        else
        {
          cookie.set('loginID', result[1]);
          cookie.set('token', result[0]);
          router.navigate(['/']);
        }
         
      },
      err => {
        $("#warningMes").html('Invalid username or password. Please check them again');
      }
    );
  }

  ngOnDestroy() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
      resolve(true);
    });
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
}