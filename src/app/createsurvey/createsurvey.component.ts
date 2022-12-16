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
    }); 
  }

  createsurvey(){
    console.log(this.form.value);
    this.servicesService.createSurvey(this.form.value).subscribe(data=>{
      // alert("Survey Created")
      this.router.navigateByUrl('adminlogin/surveylist');
    },error=>alert("Email Already Exists"));
    
}
}
