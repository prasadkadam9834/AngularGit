import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
 subject=new Subject();
 obser=this.subject.asObservable()
  constructor() { }
  counterincrement(num:number){
    this.subject.next(num)
  }
  empdata:any[]=[
    {name:'dev',age:30,salery:3000},
    {name:'virat',age:35,salery:4000},
    {name:'sachin',age:40,salery:5000}
  ]
}
