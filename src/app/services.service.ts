import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { NewSurvey } from './models/newSurvey';
import { ChoiceQuestion } from './models/choiceQuestion';
import { NewUser } from './models/newUser';
import { UserSurvey } from './models/userSurvey';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  answerSurvey(newsurvey:NewSurvey) :Observable<object>{
    console.log(newsurvey)
    return this.httpClient.post("http://localhost:8080/customeranswers/surveyquestions",newsurvey);
  }
  createQuestion(newchquestion:ChoiceQuestion,id:number):Observable<object> {
    console.log(newchquestion)
    return this.httpClient.post("http://localhost:8080/choicequestions/choicequestions/"+id,newchquestion);
  }

  constructor(private httpClient:HttpClient) { }
  loginAdmin(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post("http://localhost:8090/user/adminlogin",user);
  }

  createSurvey(newsurvey:NewSurvey):Observable<object>{
    console.log(newsurvey)
    return this.httpClient.post("http://localhost:8080/adminquestions/surveyquestions",newsurvey);

  }
  getsurveylist():Observable<any>{
    return this.httpClient.get("http://localhost:8080/adminquestions/allsurveys");
  }


  surveyById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/choicequestions/choicequestionbyid/"+ id);
  }

  surveyyById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/choicequestions/choicequestionbyid/"+ id);
  }

  surveyChoiceById(id:number):Observable<any>{
    return this.httpClient.get("http://localhost:8080/choicequestions/chquestion/"+ id);
  }

  signupUser(newuser:NewUser):Observable<object>{
    console.log(newuser)
    return this.httpClient.post("http://localhost:8080/user/signup",newuser);

  }

  deleteSurveyById(id:number){
    return this.httpClient.delete("http://localhost:8080/adminquestions/delete/"+id);
  }

  // surveyAnswer(id:number):Observable<any>{
  //   return this.httpClient.get("http://localhost:8080/plans/dongleplan/"+ id);
  //  }

  postSurvey(userSurvey:UserSurvey,id:number):Observable<any>{
    return this.httpClient.post("http://localhost:8080/customeranswers/surveyanswers/"+id,userSurvey);
   }

  //  readPrepaidPlanById(id:number):Observable<any>{
  //   return this.httpClient.get("http://localhost:8090/plans/prepaidplan/"+ id);
  //  }

  //  postRecharge(paymentHistory:PaymentHistory):Observable<any>{
  //   return this.httpClient.post("http://localhost:8090/recharge/save",paymentHistory);
  //  }
}
