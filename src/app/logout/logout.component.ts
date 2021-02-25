import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from '../employeedata.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  
  constructor(private service:EmployeedataService, private router:Router) { }

  ngOnInit(): void {
    
    this.service.logout();
   
  }

}
