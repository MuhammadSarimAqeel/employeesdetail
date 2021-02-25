import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-singleemployee',
  templateUrl: './singleemployee.component.html',
  styleUrls: ['./singleemployee.component.css']
})
export class SingleemployeeComponent implements OnInit {
  id:number;
  employee:Employee

  constructor(private route: ActivatedRoute, private employeservice:EmployeedataService) { }

  ngOnInit(): void {

    this.getdata();
    console.log("Hello");
    
  }

// this is the method of getting by promise 
//   getdata(){
//     this.id = this.route.snapshot.params['id'];
//     this.employee= new Employee();
//   this.employeservice.getemployeebyid(this.id).then((data)=>{
// this.employee=data;
// console.log("In get data function");

//     }, (error)=> console.log(error));
//   }

// this is the method of getting by async awaits
  async getdata(){
    this.id = this.route.snapshot.params['id'];
    this.employee= new Employee();
  const response = await this.employeservice.getemployeebyid(this.id)
  // below line is used when using fetch api
  // const newres = await response.json()
this.employee=response;
console.log("In get data function");

    
  }

}
