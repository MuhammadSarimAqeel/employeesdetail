import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeedataService } from './employeedata.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService implements CanActivate{

  constructor(private router:Router, private service:EmployeedataService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if(this.service.isUserLoggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }





    throw new Error('Method not implemented.');
  }

  
}
