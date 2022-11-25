import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SinglesurveyComponent } from './singlesurvey/singlesurvey.component';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'adminlogin', component: AdminloginComponent},
  
  {path:'',component:HomepageComponent},
  {path:'surveypage' ,component:SurveypageComponent},
  
  {path:'login',component:AdminpageComponent},
  {path:'signup', component:SignupuserComponent},

  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin/createsurvey',component:CreatesurveyComponent},
  {path:'adminlogin/surveylist', component: SurveylistComponent},
  {path:'survey/:pid/view', component: SinglesurveyComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
