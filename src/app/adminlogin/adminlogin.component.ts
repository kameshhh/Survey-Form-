import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  user:User=new User();

  constructor(private servicesService:ServicesService) { }


  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.user);
    this.servicesService.loginAdmin(this.user).subscribe(data=>{
      alert("Login Succesful")
    },error=>alert("Sorry Please enter correct id and password"));
  }

}
