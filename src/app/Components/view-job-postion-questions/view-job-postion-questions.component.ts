import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JobPosition } from 'src/app/Models/JobPosition';
import { Question } from 'src/app/Models/Question';
import { AnswerService } from 'src/app/services/answer.service';
import { JobPositionService } from 'src/app/services/job-position.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-job-postion-questions',
  templateUrl: './view-job-postion-questions.component.html',
  styleUrls: ['./view-job-postion-questions.component.css']
})
export class ViewJobPostionQuestionsComponent implements OnInit {

  jobPostionQuestions:Question[]=[]
  jobPostionID:number=0
  QuestionAmswers:any[]=[]
  jobPostion=new JobPosition(0,'')
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService,private answerService:AnswerService,private jobPostionService:JobPositionService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.jobPostionID=parseInt(params.get('jobpostionid')!);
    })

    this.questionService.getAllJobPostionQuestionsById(this.jobPostionID).subscribe(
      data=>{
        this.jobPostionQuestions=data
        data.forEach(question => {
          this.getQuestionAnswers(question.id)
        });
      }
    )
    this.jobPostionService.getJobPositionById(this.jobPostionID).subscribe(
      data=>{
        this.jobPostion=data
      }
    )
  }
  getQuestionAnswers(questionID:number)
  {
    this.answerService.getQuestionanswersById(questionID).subscribe(
      data=>
      {
        let questionAnswers={
          question_ID:questionID,
          answers:data
        }
        this.QuestionAmswers.push(questionAnswers);
      }
    )
  }

}
