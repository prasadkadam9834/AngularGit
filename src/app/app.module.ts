import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TableComponent } from './table/table.component';
// import { SupplierComponent } from './supplier/supplier.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { ViewSupplierComponent } from './view-supplier/view-supplier.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    UserDetailComponent,
    LoginComponent,
    UnsubscribeComponent,
    SubscribeComponent,
    TableComponent,
    
    
     // ViewSupplierComponent,
    // CreateSupplierComponent,
    // ViewSupplierComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
     
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
