import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './Components/Admin/admin-page/admin-page.component';
import { AdminRegisterComponent } from './Components/Admin/admin-register/admin-register.component';
import { CreateAnswerComponent } from './Components/create-answer/create-answer.component';
import { CreateJobPositionComponent } from './Components/create-job-position/create-job-position.component';
import { CreateQuestionComponent } from './Components/create-question/create-question.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpage',component:AdminPageComponent},
  {path:'registeradmin',component:AdminRegisterComponent},
  {path:'createjobposition',component:CreateJobPositionComponent},
  {path:'createquestion',component:CreateQuestionComponent},
  {path:'createanswer/:questionid',component:CreateAnswerComponent},
  {path:'home',component:HomeComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
