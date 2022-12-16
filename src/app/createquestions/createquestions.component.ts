import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-createquestions',
  templateUrl: './createquestions.component.html',
  styleUrls: ['./createquestions.component.css']
})
export class CreatequestionsComponent implements OnInit {
  id!:number;
  
  errroMessage:string=''

  form:FormGroup = new FormGroup({
      question: new FormControl(''),
      choice1: new FormControl(''),
      choice2:new FormControl(''),
      choice3:new FormControl(''),
      choice4:new FormControl(''),


   })
   submitted=false;

  constructor(private servicesService:ServicesService ,private router:Router,private formBuilder:FormBuilder ,public route:ActivatedRoute ) { }
  get f(){
    return this.form.controls;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      question:['',Validators.required],
      choice1:['',Validators.required],
      choice2: ['', Validators.required],
      choice3:['',Validators.required],
      choice4:['',Validators.required]
    }); 
  }
    

  createques(){
    console.log(this.form.value);
    this.id=this.route.snapshot.params['pid'];
    
    this.servicesService.createQuestion(this.form.value,this.id).subscribe(data=>{
      alert("Question Created")
    },error=>alert("Already Exists"));
    
}
  }
