import { Component, OnInit } from '@angular/core';
import { LoginstatusService } from '../loginstatus.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user!:any
  loginStatus:boolean=false
    constructor(private loginStatusService:LoginstatusService) { 
      this.loginStatusService.currentLoginStatus.subscribe(item=>{
        console.log(item);
        this.loginStatus=item
      })
      this.loginStatusService.currentUserDetails.subscribe(res=>{
        console.log(res)
        this.user=res;
      })
    }
  
    ngOnInit(): void {
    
    }

}
