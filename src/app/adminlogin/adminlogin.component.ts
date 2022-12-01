import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services.service';
import { LoginstatusService } from '../loginstatus.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  
  errroMessage:string=''

  form:FormGroup = new FormGroup({
    title: new FormControl(''),
        body: new FormControl('')
  
   })
   submitted=false;
   
  constructor(
    private userService:UserserviceService,
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
  adminLogin(){
    console.log(this.form.value);
    this.userService.loginAdmin(this.form.value).subscribe((response) => {
         console.log(response);
        //  this.loginStatus.changeLoginStatus(true)//changing the value of login status
        //  this.loginStatus.changeUserStatus(response)//assigning the logged in user details
         this.router.navigate(['login'])
    },(error)=>{
      console.log('invalid username/password')
     this.errroMessage=error.errroMessage;
     console.log(this.errroMessage)
     this.errroMessage="Invalid username/password"
    })
  }


  // user:User=new User();

  // constructor(private servicesService:ServicesService) { }


  // ngOnInit(): void {
  // }

  // adminLogin(){
  //   console.log(this.user);
  //   this.servicesService.loginAdmin(this.user).subscribe(data=>{
  //     alert("Login Succesful")
  //   },error=>alert("Sorry Please enter correct id and password"));
  // }

}
