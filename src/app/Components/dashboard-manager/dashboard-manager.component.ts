import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { UserProfileService } from 'src/app/Service/user-profile.service';

@Component({
  selector: 'app-dashboard-manager',
  templateUrl: './dashboard-manager.component.html',
  styleUrls: ['./dashboard-manager.component.css']
})
export class DashboardManagerComponent implements OnInit {

  constructor(private userprofileservice:UserProfileService,private loginservice:LoginserviceService) { }

  ngOnInit(): void {
  }
  newtoken:any;
  base64Url:any;
  decodedValue:any;
  email : string="";
  AllEmployeeByManager:any;
  AllEmployeeWithRejectAnWait:any;
  tempVar:boolean=false;
  tempVar1:boolean=false;
 
  //Get Employee whose Leave Status are Waiting
   getEmployeeByManagerEmailWithWaiting()
     {

      this.newtoken= this.loginservice.getToken();
      this.base64Url =this.newtoken.split('.')[1];
      this.decodedValue = JSON.parse(window.atob(this.base64Url));
        this.email=this.decodedValue["sub"];

       this.userprofileservice.getEmployeeWithWaitingState(this.email).subscribe(
         (data:any) => {
          this.AllEmployeeByManager= JSON.parse(data);
          console.log(this.AllEmployeeByManager);
          this.tempVar=true;
          this.tempVar1=false;
          
       },
       (Error)=>{
         console.log("ERROR IN GETTING EMPLOYEE")
       }
       )
     }
   


     //Approve Leave By Manager
     ApproveLeave(leaveId:number)
     {
       
      this.userprofileservice.approveLeaveByManager(leaveId).subscribe(
        (data:any) => {

       console.log(data);
       location.reload();
       
      },
      (Error)=>{
        console.log("ERROR IN APPROVE LEAVE")
      }
      )


     }



   // Reject Leave By Manager
     RejectLeave(leaveId:number)
     {
      this.userprofileservice.rejectLeaveByManager(leaveId).subscribe(
        (data:any) => {
       console.log(data);
       location.reload();
      },
      (Error)=>{
        console.log("ERROR IN APPROVE LEAVE")
      }
      )

     }


       //Getting All Employee their Leave  Status Approved or Rejected
       getAllEmployeeWithApproveOrreject()
       {
  
        this.newtoken= this.loginservice.getToken();
        this.base64Url =this.newtoken.split('.')[1];
        this.decodedValue = JSON.parse(window.atob(this.base64Url));
          this.email=this.decodedValue["sub"];
  
         this.userprofileservice.getAllEmployeeApproveOrReject(this.email).subscribe(
           (data:any) => {
            this.AllEmployeeWithRejectAnWait=data;
            this.tempVar1=true;
            this.tempVar=false;
            console.log(data);
            
            
         },
         (Error)=>{
           console.log("ERROR IN GETTING EMPLOYEE")
         }
         )
       }








}
