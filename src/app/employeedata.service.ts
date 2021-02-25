import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeedataService {
  employees:Employee[];
  public username:string;
  public password:string;
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  
private baseurl="http://localhost:8585/api/employees";
  constructor(private http:HttpClient) { }


  getemployeelist():Observable<Employee[]>{
/*
    const httpHeaders: HttpHeaders = new HttpHeaders({
    Authorization: 'Bearer '+this.gettoken()});
*/
// const httpHeaders = new Headers({
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer token'
// })

    return this.http.get<Employee[]>(`${this.baseurl}`,
    {
      headers: {
        Authorization:localStorage.getItem('token'),
      }});
  }
  createEmployee(employee:Employee): Observable<object>{
    return this.http.post(`${this.baseurl}`, employee , 
    {
      headers: {
        Authorization:localStorage.getItem('token'),
      }});
  }
  getemployeebyid(id:number):Promise<Employee>{
     return  this.http.get<Employee>(`${this.baseurl}/${id}`,
     {
      headers: {
        Authorization:localStorage.getItem('token'),
      }}).toPromise();
  }
  updateemploye(id:number, employee:Employee):Observable<object>{

    return this.http.put(`${this.baseurl}/${id}`, employee,
    {
      headers: {
        Authorization:localStorage.getItem('token'),
      }});
  }
  deleteemployee(id:number):Observable<object>{
return this.http.delete(`${this.baseurl}/${id}`,
{
  headers: {
    Authorization:localStorage.getItem('token'),
  }})
  }
  searchemployee(name:string):Observable<any>{
return this.http.get(`${"http://localhost:8585/api/names"}/${name}`,
{
  headers: {
    Authorization:localStorage.getItem('token'),
  }})
  }
  generatetoken(credentials:any):Observable<any>
 {
 
//  if(username=== 'SarimAqeel' && password==='SarimSarim123'){

//   sessionStorage.setItem('username', username);
//   return true;
//  }else{
//    return false;
//  }


  // const httpHeaders: HttpHeaders = new HttpHeaders({
  //   Authorization: 'Basic'+window.btoa(username+":"+ password)});



//   const httpOptions = {
//     headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//          'Authorization': 'Basic ' + btoa('SarimAqeel:SarimSarim123')
//     })
// };
  
  return this.http.post(`http://localhost:8585/api/login`,credentials);
 
  
//   .pipe(map((res)=>{
//   this.username = username;
//   this.password=password;
   
//   this.registerSuccessfulLogin(username, password);
//  }));
  }


  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
  }

  isUserLoggedIn() {
    let user = localStorage.getItem('token')
    if (user === null) return false
    return true
  }
  loginuser(token){
  
  localStorage.setItem("token",token );
return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }
  gettoken(){
  return  localStorage.getItem('token')
  }

  logout():boolean {
    localStorage.removeItem('token');
    this.username = null;
    this.password = null;
    return true;
  }

  sendemail(data:any):Observable<any>{
    return  this.http.post("http://localhost:8282/sendemail", data)
 
 
   }
}
