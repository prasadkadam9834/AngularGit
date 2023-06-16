import { Component, OnDestroy } from '@angular/core';
import { TableserviceService } from './tableservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'Guard-project';
  counter:number=0;
  subscr=new Subscription()
  constructor(private share:TableserviceService){
  this.subscr=  this.share.subject.subscribe((el:any)=>{
      this.counter=el;
    })
  }
  ngOnDestroy(): void {
    this.subscr.unsubscribe()
  }
}
