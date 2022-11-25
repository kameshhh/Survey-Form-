import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { SurveylistComponent } from './surveylist/surveylist.component';
import { SurveypageComponent } from './surveypage/surveypage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SinglesurveyComponent } from './singlesurvey/singlesurvey.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SignupuserComponent } from './signupuser/signupuser.component';
import { UserserviceComponent } from './userservice/userservice.component';
import { UserserviceDirective } from './userservice.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AdminloginComponent,
    AdminpageComponent,
    CreatesurveyComponent,
    SurveylistComponent,
    SurveypageComponent,
    HomepageComponent,
    SinglesurveyComponent,
    UserloginComponent,
    SignupuserComponent,
    UserserviceComponent,
    UserserviceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
