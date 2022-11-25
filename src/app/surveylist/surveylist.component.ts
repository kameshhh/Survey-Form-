import { Component, OnInit } from '@angular/core';
import { NewSurvey } from '../models/newSurvey';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-surveylist',
  templateUrl: './surveylist.component.html',
  styleUrls: ['./surveylist.component.css']
})
export class SurveylistComponent implements OnInit {

  surveylist:NewSurvey[]=[];
  constructor(public plansService:ServicesService) { }

  ngOnInit(): void {
    this.plansService.getsurveylist().subscribe((data:NewSurvey[])=>{
      this.surveylist=data;
    })
  }

}
