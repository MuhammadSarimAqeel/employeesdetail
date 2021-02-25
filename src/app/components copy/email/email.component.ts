import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeedataService } from 'src/app/employeedata.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  id:number;
  employee:Employee
  data:any={
    to:'',
    subject:'check',
    messege:''


  }
  techused=  new FormControl('hello')
  Swal = require('sweetalert2')
  

  constructor(private email:EmployeedataService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    
    this.employee= new Employee();
  this.loaddata()
  
 
  }

  async loaddata(){
    this.employee= await this.email.getemployeebyid(this.id).toPromise();
    console.log(this.employee);
    
    
    
  }
  dosubmit(){

    console.log("try to submit form");
    console.log(this.data)
    if(this.data.to==''|| this.data.subject==''){
        Swal.fire('Field cannot be empty');
        
    }
    
    this.email.sendemail(this.data).subscribe(
      response=>{
       
console.log(response);
Swal.fire('Sent Successfully...')




    },error=>{
    
      console.log(error);
      Swal.fire('An Error occured..')

      
    })
    
  }

}
