import { Component, OnInit } from '@angular/core';
import { NewUser } from '../models/newUser';
import { User } from '../models/user';
import { ServicesService } from '../services.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {


  userlist:NewUser[]=[];
  constructor(public userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.getuserlist().subscribe((data:NewUser[])=>{
      this.userlist=data;
    })
  }

  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe(res=>{
      this.userlist=this.userlist.filter(user=>user.id!==id);
    })
  }

  }


