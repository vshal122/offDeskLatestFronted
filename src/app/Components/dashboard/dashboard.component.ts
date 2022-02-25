import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tempuserData: boolean=false;

  allProfiles: any;

  constructor(private userprofile:UserProfileService) { }

  ngOnInit(): void {
  }
  getUserProfile()
  {
          this.userprofile.getUserDetails().subscribe(
          Response=>{
              this.allProfiles = Response;
              this.tempuserData=true;
               console.log(Response);
          },
          error=>{
               console.log(error);
          }

          )
  }
  deleteUser(userId :number)
  {
    this.userprofile.deleteUser(userId).subscribe(
      Response=>{
         Swal.fire("deleted user");
         location.reload();
         
      },
      error=>{
           console.log(error);
      }

      )
  }


}
