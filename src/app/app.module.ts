import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule} from 'ngx-pagination';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { CommonModule } from '@angular/common';
import { ProcessingComponent } from './processing/processing.component';


 








@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateemployeeComponent,
    SingleemployeeComponent,
    LoginComponent,
    LogoutComponent,
    ProcessingComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule
   
    
    
    
  
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
