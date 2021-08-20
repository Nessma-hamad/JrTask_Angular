import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobPosition } from 'src/app/Models/JobPosition';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn:boolean=false;
  jobPostions:JobPosition[]=[]
  constructor(private authService:AuthenticationService,private router: Router,private jobPostionService:JobPositionService) { }

  ngOnInit(): void {
    this.loggedIn=this.authService.isLoggedIn();
    this.jobPostionService.getAllJobPosition().subscribe(
      data=>
      {
        this.jobPostions=data;
        console.log(this.jobPostions)
      }
    )
  }
  LogOut()
{
   this.authService.logout();
}
mackInterview(jobpostionID:number)
{
  this.router.navigate(['/createcandidate/'+jobpostionID]);
}

}
