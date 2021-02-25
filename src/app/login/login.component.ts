
import { LocationStrategy } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { EmployeedataService } from '../employeedata.service';
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials ={
username:'',
password:''
  }
errorMessage = 'Invalid Credentials';
successMessage: string;
invalidLogin = false;
loginSuccess = false;
messege:string;
logoutsuccess= false;
  
  constructor(private service:EmployeedataService, private router:Router, private data:AppComponent, private location: Location) { }


 
  ngOnInit(): void {
    this.data.currentMessege.subscribe(messege=> this.messege = messege);
  
    
  }

 
    
      
      
  
  handleLogin() {
    if(this.credentials.username !='' && this.credentials.password !=''){
      this.service.generatetoken(this.credentials)
    .subscribe((data:any)=> {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful.';
      let token = 'Bearer '+data.token;
      this.service.loginuser(token);
      this.router.navigate(['/processing']);
      
      
    
    }, (error) => {
      this.invalidLogin = true;
      this.loginSuccess = false;
     
      
      console.log(error);     
    }); 
  }else{

    console.log("Fields are empty");
    } 
    
  }
 
}
