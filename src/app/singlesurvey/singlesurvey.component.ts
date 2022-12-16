import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginstatusService } from '../loginstatus.service';
import { NewSurvey } from '../models/newSurvey';
import { UserSurvey } from '../models/userSurvey';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-singlesurvey',
  templateUrl: './singlesurvey.component.html',
  styleUrls: ['./singlesurvey.component.css']
})
export class SinglesurveyComponent implements OnInit {
  user!:any

  // data:any={

  // }
  id!:number;
  surveysingle:NewSurvey[]=[];;
  surveysinglechoice!:NewSurvey;
  userSurvey!:UserSurvey;

  errroMessage:string=''

  form:FormGroup = new FormGroup({
      sid:new FormControl(''),
      cid:new FormControl(''),
      qid:new FormControl(''),
      email:new FormControl(''),
      chquestion:new FormControl(''),
      choice:new FormControl('')

   })
   submitted=false;

  constructor(private loginStatusService:LoginstatusService, public plansService:ServicesService,public route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { 
    this.loginStatusService.currentUserDetails.subscribe(res=>{
      console.log(res)
      this.user=res;
    })
  }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['pid'];
    this.plansService.surveyById(this.id).subscribe((data:NewSurvey[])=>{
      this.surveysingle=data;
      console.log(this.surveysingle)
    })
    



    // this.form = this.formBuilder.group({
    //   sid:['',Validators],
    //   cid:['',Validators],
    //   qid:['',Validators],
    //   email:['',Validators],
    //   chquestion:['',Validators],
    //   choice:['',Validators],
    // }); 
  }
  

  // Save(){

  //   this.plansService.surveyById(this.id).subscribe((data:NewSurvey[])=>{
  //     this.surveysingle=data;
  //     console.log(this.user.email)
  //     this.userSurvey.email=this.user.email;
  //     this.userSurvey.cid=this.user.id;
  //     console.log(this.userSurvey)

  //   })


  // }




  Save(form:NgForm):void{        
    console.log(form.value)       
    // console.log(this.data)  
      this.id=this.route.snapshot.params['pid'];      
      this.plansService.postSurvey(form.value,this.id).subscribe(data=>{       
        // console.log(form)       
        // this.userSurvey.qid=form.value.id;      
        this.userSurvey=data;       
      this.userSurvey.email=this.user.email;       
      this.userSurvey.cid=this.user.id;       
      console.log(this.userSurvey)     
      this.router.navigate(['thankyou'])     
      })
  }

  
  // Save(form:NgForm){

  // this.id=this.route.snapshot.params['pid'];
  // this.id=this.route.snapshot.params['pid'];
  //   this.plansService.surveyById(this.id).subscribe((data:NewSurvey[])=>{
  //     this.surveysingle=data;
  //     console.log(this.surveysingle)
   
  //   // this.plansService.surveyyById(this.id).subscribe((data:NewSurvey[])=>{
  //     // this.userSurvey=data;
  //     console.log(data)
  //     this.userSurvey.email=this.user.email;
  //     this.userSurvey.cid=this.user.id;
  //     // console.log(this.postpaidplans)
  //     this.plansService.postSurvey(this.userSurvey,this.id).subscribe(data=>{
  //       // alert('Recharge Successfull')
  //     })
  //   })
  // }


   
  }


  


  
  


