import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  


  private user=new BehaviorSubject<any>(localStorage.getItem('user'))
  constructor(private httpClient:HttpClient) { }
  loginAdmin(user:User):Observable<any> {
    return this.httpClient.post("http://localhost:8080/admin/adminlogin",user)
  }
  
  loginUser(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:8080/user/userlogin",user)
  }
  logout():Observable<any>{
    return this.httpClient.delete("http://localhost:8080/user/logout");
  }

  Adminlogout():Observable<any>{
    return this.httpClient.delete("http://localhost:8080/admin/logout");
  }

  getuserlist():Observable<any>{
    return this.httpClient.get("http://localhost:8080/user/alluserdetails");
  }

  deleteUserById(id:number){
    return this.httpClient.delete("http://localhost:8080/user/delete/"+id);
  }
  get currentUserName() 
    {
        return this.user.asObservable();
    }
}