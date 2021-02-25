import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmployeedataService } from './employeedata.service';
import { LoginComponent } from './login/login.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Swal = require('sweetalert2')
  title = 'employeesfrontend';
  isLoggedIn = false;
  logoutsuccess=false;;
 
  @Input()logoutmessege:string;
  private messegeSource= new BehaviorSubject<string>("Logged out Sucessfully....");
  currentMessege = this.messegeSource.asObservable();



constructor(private route: ActivatedRoute,
  private router: Router,
  private service: EmployeedataService) { }

  ngOnInit() {
  this.isLoggedIn = this.service.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }

  changemessge(messege:string){
    this.messegeSource.next(messege);
  }
  handleLogout() {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Log Out!',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        
        this.service.logout();
        this.router.navigate(['/login']);
        this.logoutsuccess=true;
        this.logoutmessege='Logged Out Successfully';


        Swal.fire(
          'Logged out Successfully!',
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

   
  }


}