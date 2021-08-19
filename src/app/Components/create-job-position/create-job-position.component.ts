import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JobPosition } from 'src/app/Models/JobPosition';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-create-job-position',
  templateUrl: './create-job-position.component.html',
  styleUrls: ['./create-job-position.component.css']
})
export class CreateJobPositionComponent implements OnInit {

  jobposition=new JobPosition(0,'');
  
  
  
    constructor(private jobpositionService:JobPositionService,private router: Router) { }
  
    ngOnInit(): void {
    
    }
    
   
    errorMsg='';
    addnewJobposition(form : NgForm)
    {
      console.log(this.jobposition)
       this.jobpositionService.addNewJobPosition(this.jobposition).subscribe(
        data => {
          console.log(data)
          console.log(this.jobposition)
          this.router.navigate(['/adminpage']); 
          
        },
        error=>
        {
         this.errorMsg = error;
        }
       )
    }
    
    
     
    
      

}
