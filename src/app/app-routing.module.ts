import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Components/Admin/admin-page/admin-page.component';
import { AdminRegisterComponent } from './Components/Admin/admin-register/admin-register.component';
import { CandidateResultComponent } from './Components/candidate-result/candidate-result.component';
import { CreateAnswerComponent } from './Components/create-answer/create-answer.component';
import { CreateCandidateComponent } from './Components/create-candidate/create-candidate.component';
import { CreateJobPositionComponent } from './Components/create-job-position/create-job-position.component';
import { CreateQuestionComponent } from './Components/create-question/create-question.component';
import { HomeComponent } from './Components/home/home.component';
import { InterviewQuestionsComponent } from './Components/interview-questions/interview-questions.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ViewJobPostionQuestionsComponent } from './Components/view-job-postion-questions/view-job-postion-questions.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpage',component:AdminPageComponent},
  {path:'registeradmin',component:AdminRegisterComponent},
  {path:'createjobposition',component:CreateJobPositionComponent},
  {path:'createquestion/:jobpostionid',component:CreateQuestionComponent},
  {path:'viewquestions/:jobpostionid',component:ViewJobPostionQuestionsComponent},
  {path:'createanswer/:questionid',component:CreateAnswerComponent},
  {path:'createcandidate/:jobpostionid',component:CreateCandidateComponent},
  {path:'interviewquestions/:candidateid/:jobpostionid',component:InterviewQuestionsComponent},
  {path:'result/:candidateid/:secor',component:CandidateResultComponent},
  {path:'home',component:HomeComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
