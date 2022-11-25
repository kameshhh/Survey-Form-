import { Component, OnInit } from '@angular/core';
import { NewSurvey } from '../models/newSurvey';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-surveypage',
  templateUrl: './surveypage.component.html',
  styleUrls: ['./surveypage.component.css']
})
export class SurveypageComponent implements OnInit {

  surveylist:NewSurvey[]=[];
  constructor(public plansService:ServicesService) { }

  ngOnInit(): void {
    this.plansService.getsurveylist().subscribe((data:NewSurvey[])=>{
      this.surveylist=data;
    })
  }
}
