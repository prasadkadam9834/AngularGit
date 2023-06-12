import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDeactive } from '../Guards/deactive.guard';
import { LoginserviceService } from '../loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,IDeactive{
 login!:FormGroup;
 constructor(private builder:FormBuilder,private loginid:LoginserviceService){}
  ngOnInit(): void {
   this.createform()
  }
createform(){
  this.login=this.builder.group({
    Email:['',[Validators.required]],
    Password:['',[Validators.required]]
  })
}
Save(){
console.log(this.login.value)
this.loginid.isUserlogin()
}
get Email(){
  return this.login.get('Email')
}
get Password(){
  return this.login.get('Password')
}
canexit(){
  if(this.login.dirty){
    const result=confirm('Are you sure exit these page')
    if(result){
      return true;
    }else{
      return false;
    }
  }else{
    return true;
  }
}
}
