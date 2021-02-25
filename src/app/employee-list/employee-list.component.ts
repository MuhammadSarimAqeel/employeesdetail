import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeedataService } from '../employeedata.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';




@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  Swal = require('sweetalert2')
  employees: Employee[];
  employee:Employee = new Employee();
  emp:Employee= new Employee();
  key:string='firstename';
firstName:any;  
reverse:boolean = false;



  constructor(private employeeservice:EmployeedataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getemployees();
  }
  private getemployees(){
this.employeeservice.getemployeelist().subscribe(data=>{
  this.employees=data;
});

  }

  updateemployee(id:number){
this.router.navigate(['processing/updateemployee',id]);
  }
  deleteemployee(id:number){


    


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.employeeservice.deleteemployee(id).subscribe(data=>{
          this.getemployees();
        },error=>console.log(error));
        Swal.fire(
          'Deleted!',
          'Employee has been deleted.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled'
          
        )
      }
    })





    /*
    if(confirm("Are you sure to delete ?? ")) {
      this.employeeservice.deleteemployee(id).subscribe(data=>{
        this.getemployees();
      },error=>console.log(error));
      console.log("Implement delete functionality here");
     
    }
 */


  }
  viewemployee(id:number){
    this.router.navigate(['processing/singleemployee',id]);
  }
/*
  onsearch(){
    console.log(this.employee.firstename);
    this.searchemployee();
    
  }
  searchemployee(){
    this.employeeservice.searchemployee(this.employee.firstename).subscribe(data=>{

      console.log(data);
      this.employees=data;
      this.employeeservice.getemployeelist();
        
     
      
     },error=> console.log(error));
     
    
     
      }
  */
    search(){
      if(this.firstName==""){
        this.ngOnInit();
      }else{
        this.employees = this.employees.filter(res=>{

          return res.firstename.toLocaleLowerCase().match(this.firstName)
        })
      }
    }
    
  sort(key){
this.key= key;
this.reverse=!this.reverse;
  }
  getemployee(id:number){
    // this.router.navigate(['processing/sendemail',id]);
    window.location.href="https://mail.google.com/mail/u/1/#inbox?compose=new"
  }
    
     }


