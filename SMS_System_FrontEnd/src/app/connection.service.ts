import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {

  constructor() { }

  getConnection():string{

    return 'http://10.19.1.83:8080/SMS_System-2.0-Beta-1/';
  }

}
