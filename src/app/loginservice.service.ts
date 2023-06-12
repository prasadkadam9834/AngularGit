import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
 loginuser:boolean=false;
  constructor() { }

  isUserlogin(){
    return this.loginuser=true;
  }
}
