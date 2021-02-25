import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardserviceService } from './authguardservice.service';
import { EmailComponent } from './components copy/email/email.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProcessingComponent } from './processing/processing.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {
    path:"processing", 
    component:ProcessingComponent,
    
    children:[ 
      {
        path:"",
    redirectTo:"employees",
    pathMatch:"full"

      },  
      {   
        path:"employees",  
        component:EmployeeListComponent,
        canActivate:[AuthguardserviceService]
      },
       {path:"singleemployee/:id",
       component:SingleemployeeComponent,
       canActivate:[AuthguardserviceService] }
       ,
       {
        path:"updateemployee/:id",
        component:UpdateemployeeComponent,
        canActivate:[AuthguardserviceService]
       },
       {
       path:"create-employee",
   component:CreateEmployeeComponent,
   canActivate:[AuthguardserviceService]
       },
       {  
        path:"sendemail/:id",
        component:EmailComponent,
        
      } 
    ]
  
  },
  {  
    path:"login",
    component:LoginComponent,
    
  },
  {
    path:"",
    redirectTo:"login",
    pathMatch:"full",
    // canActivate:[AuthguardserviceService]
  }, 
  // {
  //  path:"create-employee",
  //  component:CreateEmployeeComponent,
  //  canActivate:[AuthguardserviceService]
  // },
  // { 
  //   path:"updateemployee/:id",
  //   component:UpdateemployeeComponent,
  //   canActivate:[AuthguardserviceService]
  // },
  // {
  //   path:"singleemployee/:id",
  //   component:SingleemployeeComponent,
  //   canActivate:[AuthguardserviceService]
  // },
  { 
    path:"logout", 
    component:LogoutComponent,
    canActivate:[AuthguardserviceService]
  },
  // {  
  //   path:"sendemail/:id",
  //   component:EmailComponent,
    
  // }  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  