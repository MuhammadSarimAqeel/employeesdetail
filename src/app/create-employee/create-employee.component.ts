import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee= new Employee();

  constructor(private employeeservice:EmployeedataService, private router:Router) { }

  ngOnInit(): void {
  }
  saveemployee(){
 this.employeeservice.createEmployee(this.employee).subscribe(data=>{

  console.log(data);
  this.gotoemployeelist();
  
 },error=> console.log(error));
 

 
  }
  gotoemployeelist(){
this.router.navigate(['processing/employees']);
  }
  onsubmit(){
    console.log(this.employee);
    this.saveemployee();
    
  }

}
