import { Injectable } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map'
@Injectable()
export class CheckLoginService {

  constructor(private http: Http) { }
  private loginAlready: boolean = false;

  setLogin(login:boolean)
  {
    this.loginAlready = login;
  }

  getLogin()
  {
    return this.loginAlready;
  }

}
