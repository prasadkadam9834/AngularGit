import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CanactiveGuard } from './Guards/canactive.guard';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { DeactiveGuard } from './Guards/deactive.guard';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [{ path: 'supplires', loadChildren: () => import('./supplires/supplires.module').then(a => a.SuppliresModule) },
  // {path:'home',component:HomeComponent},
  // {path:'login',component:LoginComponent,canDeactivate:[DeactiveGuard]},
  // {path:'user-detail',component:UserDetailComponent,canActivate:[CanactiveGuard],children:[
  //   {path:'subscribe',component:SubscribeComponent},
  //   {path:'unsubscribe',component:UnsubscribeComponent}
  // ]},
  
  // {path:'',redirectTo:'/home',pathMatch:'full'}


  { path: 'customer', loadChildren: () => import('./customer/customer.module').then(b => b.CustomerModule) },
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path:'',redirectTo:'/customer',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
