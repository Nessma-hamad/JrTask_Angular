import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Answer } from 'src/app/Models/Answer';
import { AnswerService } from 'src/app/services/answer.service';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit {

  answer=new Answer(0,'',false,0)
  constructor(private activatedRoute:ActivatedRoute,private answerService:AnswerService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.answer.questionID=parseInt(params.get('questionid')!);
    })
  }

  IsCorrect(iscorrect:any)
  {

    console.log("ddd")
    if(iscorrect.target.value=="false")
    {
      this.answer.isCorrect=false;
    }
    else 
    {
      this.answer.isCorrect=true;
    }
    
  }
  

  
  addNewAnswer()
  {
    console.log(this.answer)
    this.answerService.addNewanswer(this.answer).subscribe(
      data=>
      {
        console.log(data);
        this.router.navigate(['/adminpage']); 
      }
    )
  }
  addAnthorAnswer()
  {
    console.log(this.answer)
    this.answerService.addNewanswer(this.answer).subscribe(
      data=>
      {
        console.log(data);
        this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
        this.router.navigate(['/createanswer/'+this.answer.questionID]))
        console.log("sss")
      }
    )
  }

}
