import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit {

  id:number;
  employee:Employee = new Employee();

  constructor(private employeeservice:EmployeedataService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeservice.getemployeebyid(this.id).then(data=>{
      this.employee=data;
    }, error=> console.log(error));
    
  }
  onsubmit(){

    this.employeeservice.updateemploye(this.id, this.employee).subscribe(data=>{
this.gotoemployeelist();
    }, error=> console.log(error));
    
  }
  gotoemployeelist(){
    this.router.navigate(['processing/employees']);
      }
}
