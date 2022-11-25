import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { User } from '../models/user';
import { ServicesService } from '../services.service';
// import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  errroMessage:string=''

  form:FormGroup = new FormGroup({
    title: new FormControl(''),
        body: new FormControl('')
  
   })
   submitted=false;
   
  constructor(
    private userService:ServicesService,
    private  loginStatus:LoginstatusService,
    private router: Router,
    private formBuilder:FormBuilder) { }
    get f(){
      return this.form.controls;
    }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); 
  }
  userLogin(){
    console.log(this.form.value);
    this.userService.loginUser(this.form.value).subscribe((response) => {
         console.log(response);
        //  this.loginStatus.changeLoginStatus(true)//changing the value of login status
        //  this.loginStatus.changeUserStatus(response)//assigning the logged in user details
        // //  this.router.navigateByUrl('posts');
         this.router.navigate(['surveypage'])
    },(error)=>{
      console.log('invalid username/password')
     this.errroMessage=error.errroMessage;
     console.log(this.errroMessage)
     this.errroMessage="Invalid username/password"
    })
  }
  
  
}
