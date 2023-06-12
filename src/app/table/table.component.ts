import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  empobj:any[]=[]
  constructor(private tableservice:TableserviceService){

  }
  ngOnInit(): void {
  this.empobj=this.tableservice.empdata
}


}

