import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewSurvey } from '../models/newSurvey';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-singlesurvey',
  templateUrl: './singlesurvey.component.html',
  styleUrls: ['./singlesurvey.component.css']
})
export class SinglesurveyComponent implements OnInit {
  id!:number;
  surveysingle!:NewSurvey;
  surveysinglechoice!:NewSurvey;

  errroMessage:string=''

  form:FormGroup = new FormGroup({
      email:new FormControl(''),
      phno:new FormControl(''),
      surveyname: new FormControl(''),
      startdate: new FormControl(''),
      enddate:new FormControl(''),
      question1:new FormControl(''),
      question2:new FormControl(''),
      question3:new FormControl(''),
      question:new FormControl(''),
      choice1:new FormControl(''),
      choice2:new FormControl(''),
      choice3:new FormControl(''),
      choice4:new FormControl(''),

   })
   submitted=false;

  constructor(public plansService:ServicesService,public route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['pid'];
    this.plansService.surveyById(this.id).subscribe((data:NewSurvey)=>{
      this.surveysingle=data;
      console.log(this.surveysingle)
    })

    this.plansService.surveyChoiceById(this.id).subscribe((data:NewSurvey)=>{
      this.surveysinglechoice=data;
      console.log(this.surveysinglechoice)
    })
    



    this.form = this.formBuilder.group({
      email:['',Validators.required],
      phno:['',Validators.required],
      question1:['',Validators],
      question2: ['', Validators],
      question3: ['', Validators],
      question:['',Validators],
      choice1:['',Validators],
      choice2:['',Validators],
      choice3:['',Validators],
      choice4:['',Validators],
    }); 
  }

  submitsurvey(){
    // alert('User Created')
    console.log(this.form.value);
    this.plansService.answerSurvey(this.form.value).subscribe(data=>{
      alert("Survey Submitted")
      // this.router.navigate(['userlogin'])
    },error=>alert("Error"));
  }


  

   
  }


  


  
  


