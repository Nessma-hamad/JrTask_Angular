import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { AdminPageComponent } from './Components/Admin/admin-page/admin-page.component';
import { AdminRegisterComponent } from './Components/Admin/admin-register/admin-register.component';
import { CreateJobPositionComponent } from './Components/create-job-position/create-job-position.component';
import { CreateQuestionComponent } from './Components/create-question/create-question.component';
import { CreateAnswerComponent } from './Components/create-answer/create-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminPageComponent,
    AdminRegisterComponent,
    CreateJobPositionComponent,
    CreateQuestionComponent,
    CreateAnswerComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
