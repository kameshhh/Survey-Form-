import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewSurvey } from '../models/newSurvey';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {
  errroMessage:string=''

  form:FormGroup = new FormGroup({
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


  constructor(private servicesService:ServicesService ,private router:Router,private formBuilder:FormBuilder) { }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      surveyname:['',Validators.required],
      startdate:['',Validators.required],
      enddate: ['', Validators.required],
      question1:['',Validators.required],
      question2: ['', Validators.required],
      question3: ['', Validators.required],
      question:['',Validators.required],
      choice1:['',Validators.required],
      choice2:['',Validators.required],
      choice3:['',Validators.required],
      choice4:['',Validators.required],
    }); 
  }

  createsurvey(){
    // alert('User Created')
    console.log(this.form.value);
    this.servicesService.createSurvey(this.form.value).subscribe(data=>{
      alert("User Created")
      // this.router.navigate(['userlogin'])
    },error=>alert("Email Already Exists"));
    
}
createchoicequestion(){
  // alert('User Created')
  console.log(this.form.value);
  this.servicesService.createChoiceQuestion(this.form.value).subscribe(data=>{
    alert("Survey Created")
    // this.router.navigate(['userlogin'])
  },error=>alert("Error"));
  
}
}
