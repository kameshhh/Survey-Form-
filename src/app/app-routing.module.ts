import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CreatequestionsComponent } from './createquestions/createquestions.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { SinglesurveyComponent } from './singlesurvey/singlesurvey.component';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  {path:'adminlogin', component: AdminloginComponent},
  
  {path:'',component:HomepageComponent},
  {path:'surveypage' ,component:SurveypageComponent},
  {path:'thankyou' ,component:ThankyouComponent},
  
  {path:'login',component:AdminpageComponent},
  {path:'signup', component:SignupuserComponent},

  {path:'userlogin',component:UserloginComponent},
  {path:'adminlogin/createsurvey',component:CreatesurveyComponent},
  {path:'adminlogin/surveylist', component: SurveylistComponent},
  {path:'adminlogin/userlist', component: UserlistComponent},
  {path:'survey/:pid/view', component: SinglesurveyComponent},
  {path:'createquestion/:pid/view', component: CreatequestionsComponent},
  {path:'logout', component:LogoutComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
