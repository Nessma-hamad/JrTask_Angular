import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JobPosition } from 'src/app/Models/JobPosition';
import { Question } from 'src/app/Models/Question';
import { JobPositionService } from 'src/app/services/job-position.service';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  question=new Question(0,'',0);
  lastquestion=new Question(0,'',0);
  jobPostions:JobPosition[]=[];
  
  
  constructor(private activatedRoute:ActivatedRoute,private questionService:QuestionService,private jobPostionservice:JobPositionService,private router: Router) { }

  ngOnInit(): void {
    this.jobPostionservice.getAllJobPosition().subscribe(
      data=>
      {
        this.jobPostions=data;
        console.log(this.jobPostions); 
      }
    )
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.question.jobPositionID=parseInt(params.get('jobpostionid')!);
    })
  }
 
  addNewQuestion()
  {
    console.log(this.question)
    
    this.questionService.addNewQuestion(this.question).subscribe(
      data => {
        console.log(data)
        console.log(this.question)
        this.lastquestion=data;
        console.log(this.lastquestion.id);
        this.router.navigate(['/createanswer/'+this.lastquestion.id]); 
        
      }
    )
  }


}
