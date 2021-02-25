// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { EmployeedataService } from "./employeedata.service";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{
    
//     constructor( private employeeservice:EmployeedataService){}


//     intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        
// let newReq = req;
// let token = this.employeeservice.gettoken();
// console.log(token);

// if(token != null){

   
//     newReq.clone({setHeaders:{Authorization : localStorage.getItem('token')}});
//     console.log(newReq);
    
// }

// return next.handle(newReq);

//     }
    
// }
