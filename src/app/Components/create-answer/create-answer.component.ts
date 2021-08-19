import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Answer } from 'src/app/Models/Answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  answer=new Answer(0,'',false,0)
  constructor(private activatedRoute:ActivatedRoute,private answerService:AnswerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.answer.QuestionID=parseInt(params.get('questionid')!);
    })
  }

  IsCorrect(iscorrect:any)
  {

    this.answer.IsCorrect=iscorrect.target.value;
  }
  

  
  addNewAnswer()
  {
    console.log(this.answer)
    this.answerService.addNewanswer(this.answer).subscribe(
      data=>
      {
        console.log(data);
      }
    )
  }

}
