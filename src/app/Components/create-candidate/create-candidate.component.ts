import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidate } from 'src/app/Models/Candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {

  newCandidate=new Candidate(0,'',0)

  constructor(private activatedRoute:ActivatedRoute,private candidateService:CandidateService,private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.newCandidate.jobPositionID=parseInt(params.get('jobpostionid')!);
    })
  }

  addNewCandidate()
  {
    this.candidateService.addNewCandidate(this.newCandidate).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/interviewquestions/'+data.id+'/'+data.jobPositionID]); 
      }
    )
  }

}
