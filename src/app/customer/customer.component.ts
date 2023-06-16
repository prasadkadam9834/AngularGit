import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
 counter:number=0;
 constructor(private auth:TableserviceService){}
  ngOnInit(): void {
  
  }
incrementcounter(){
  ++this.counter;
  this.auth.counterincrement(this.counter)
}
}
