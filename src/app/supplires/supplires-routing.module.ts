import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuppliresComponent } from './supplires.component';
import { CreateSupplierComponent } from '../create-supplier/create-supplier.component';
import { ViewSupplierComponent } from '../view-supplier/view-supplier.component';

const routes: Routes = [{path:'',component:SuppliresComponent},
{path:'create',component:CreateSupplierComponent},
{path:'view',component:ViewSupplierComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliresRoutingModule { }
