import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidate } from 'src/app/Models/Candidate';
import { JobPosition } from 'src/app/Models/JobPosition';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-candidate-result',
  templateUrl: './candidate-result.component.html',
  styleUrls: ['./candidate-result.component.css']
})
export class CandidateResultComponent implements OnInit {

  candidateID:number=0
  candidateScore:number=0
  candidate=new Candidate(0,'',0)
  jobPostion=new JobPosition(0,'')
  constructor(private jobPostionService:JobPositionService ,private activatedRoute:ActivatedRoute,private router: Router,private candidateService:CandidateService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.candidateScore=parseInt(params.get('secor')!);
      this.candidateID=parseInt(params.get('candidateid')!);
    })

    this.candidateService.getCandidateById(this.candidateID).subscribe(
      data=>
      {
        this.candidate=data
        console.log(this.candidate)
        this.jobPostionService.getJobPositionById(this.candidate.jobPositionID).subscribe(
          data=>
          {
            this.jobPostion=data;
          }
        )
      }
    )
  
    
  }

}
