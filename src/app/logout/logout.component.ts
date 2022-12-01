import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  errorMessage:string=''
  constructor(public userService:UserserviceService,
    private loginStatusService:LoginstatusService,
    private router: Router) { }

  ngOnInit(): void {
    this.loginStatusService.changeLoginStatus(false)
    this.loginStatusService.changeUserStatus({id:0,email:'',password:'',enabled:false,role:''})
    this.userService.logout().subscribe((response)=>{
       localStorage.removeItem('user')
       console.log(localStorage.getItem('user'))
       this.router.navigateByUrl('/')
      // this.router.navigate(['navbar'])
    },(error)=>{
        this.errorMessage="Problem in logout"
    })
  }
  
}