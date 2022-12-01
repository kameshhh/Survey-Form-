import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginstatusService {

  private loginStatus= new BehaviorSubject<boolean>(false);//to store the values
  private userDetails=new BehaviorSubject<User>({id:0,email:'',password:'',enabled:false,role:''});
  currentLoginStatus = this.loginStatus.asObservable();//to get the latest value
  currentUserDetails=this.userDetails.asObservable();
  //get latest value return.
  constructor() { }

  changeLoginStatus(status:boolean){
    this.loginStatus.next(status);//to change the value.Call this method from login ts
    console.log(this.currentLoginStatus);
  }
  
  changeUserStatus(userDetails:User){
    this.userDetails.next(userDetails);
  
    console.log(this.userDetails);
    console.log(this.currentUserDetails)
  }

}
