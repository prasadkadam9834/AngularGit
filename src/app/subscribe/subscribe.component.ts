import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit,OnDestroy{
 
 sub!:Subscription;
  ngOnInit(): void {
    // this.sub=interval(1000).subscribe((el:any)=>{
    //   console.log(el)
   // })

  }
  ngOnDestroy(): void {
   // this.sub.unsubscribe()
  }

}
