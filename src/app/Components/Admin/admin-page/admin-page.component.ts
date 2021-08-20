import { Component, OnInit } from '@angular/core';
import { JobPosition } from 'src/app/Models/JobPosition';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { JobPositionService } from 'src/app/services/job-position.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  adminName:string="";
  jobPostions:JobPosition[]=[]
 
  constructor(private authenticate:AuthenticationService,private jobPostionService:JobPositionService) { }

  ngOnInit(): void {
    this.adminName=this.authenticate.getUserName();
    console.log(this.adminName);
    this.jobPostionService.getAllJobPosition().subscribe(
      data=>
      {
          this.jobPostions=data
      }
    )
  }
  LogOut()
{
   this.authenticate.logout();
}


}

