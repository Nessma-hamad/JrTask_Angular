import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Answer } from 'src/app/Models/Answer';
import { Candidate } from 'src/app/Models/Candidate';
import { CandidateAnswer } from 'src/app/Models/CandidateAnswer';
import { Question } from 'src/app/Models/Question';
import { AnswerService } from 'src/app/services/answer.service';
import { CandidateAnswerService } from 'src/app/services/candidate-answer.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobPositionService } from 'src/app/services/job-position.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-interview-questions',
  templateUrl: './interview-questions.component.html',
  styleUrls: ['./interview-questions.component.css']
})
export class InterviewQuestionsComponent implements OnInit {

  jobPostionID:number=0
  jobPostionQuestions:Question[]=[]
  QuestionAmswers:any[]=[]
  candidateAnswers:CandidateAnswer[]=[]
  candidateScore:number=0
  candidateID:number=0
  candidate=new Candidate(0,'',0)
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService,private router: Router,private answerService:AnswerService,private candidateService:CandidateService,private candidateAnswerService:CandidateAnswerService ) { }

  ngOnInit(): void {
   
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.jobPostionID=parseInt(params.get('jobpostionid')!);
      this.candidateID=parseInt(params.get('candidateid')!);
    })
    
    this.candidateService.getCandidateById(this.candidateID).subscribe(
      data=>
      {
        this.candidate=data
      }
    )

    this.questionService.getJobPostionQuestionsById(this.jobPostionID).subscribe(
      data=>
      {
        this.jobPostionQuestions=data;
        console.log(data);
        data.forEach(question => {
          this.getQuestionAnswers(question.id)
        });
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

  CandidateAnswer(questionID:number,questionBodyText:string,answerBodyText:string,IsCorrect:boolean)
  {
    let answer=new CandidateAnswer(0,questionID,questionBodyText,answerBodyText,IsCorrect,this.candidateID)
    this.candidateAnswers.push(answer);
    
    console.log(this.candidateScore);

  }
  getCandidateResult()
  {
    this.candidateAnswers.forEach(answer => {
      if(answer.isCorrect==true)
    {
      this.candidateScore+=10;
    }
      this.candidateAnswerService.addNewCandidateAnswer(answer).subscribe(
        data=>
        {
          console.log(data)
        }
      )
      
    });
    this.router.navigate(['/result/'+this.candidateID+'/'+this.candidateScore]);
  }

}
