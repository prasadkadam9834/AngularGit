import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {

  constructor() { }
  empdata:any[]=[
    {name:'dev',age:30,salery:3000},
    {name:'virat',age:35,salery:4000},
    {name:'sachin',age:40,salery:5000}
  ]
}
