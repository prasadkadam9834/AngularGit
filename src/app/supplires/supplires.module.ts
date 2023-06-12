import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliresRoutingModule } from './supplires-routing.module';
import { SuppliresComponent } from './supplires.component';


@NgModule({
  declarations: [
    SuppliresComponent
  ],
  imports: [
    CommonModule,
    SuppliresRoutingModule
  ]
})
export class SuppliresModule { }
