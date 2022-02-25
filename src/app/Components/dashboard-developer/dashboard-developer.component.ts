import { Component, Input, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import * as _moment from 'moment';
import { Moment } from 'moment';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';

const moment = _moment;

@Component({
  selector: 'app-dashboard-developer',
  templateUrl: './dashboard-developer.component.html',
  styleUrls: ['./dashboard-developer.component.css'],
  
})
export class DashboardDeveloperComponent implements OnInit {
  newtoken:any;
  base64Url:any;
  decodedValue:any;
  email : string="";
  leaveRecord:any;
  checkRecord:any;
  tempVar:boolean=false;
  tempVar2 :boolean=false;
  tempVar3:boolean=false;
  minDate:Date =new Date();
  

  leavedetails={
          fromDate:"",
          endDate:"",
          leaveStatus:"waiting",
          leavePurpose:"",
          userLeaveEmail:""

        }
        temp:boolean=false;
        
         constructor(private userservice:UserProfileService,private loginservice:LoginserviceService) { }

  ngOnInit(): void {

  }
  
  // Prevent Saturday and Sunday from being selected.
   weekendsDatesFilter=(d: any | null): boolean => {
    const day = (new Date(d)).getDay();
    return day !== 0 && day !== 6;
  };
       
    
   checkLeaveBalance(){
       this.newtoken= this.loginservice.getToken();
       this.base64Url =this.newtoken.split('.')[1];
       this.decodedValue = JSON.parse(window.atob(this.base64Url));
        this.email=this.decodedValue["sub"];
        this.userservice.getLeaveRecordByEmail(this.email).subscribe(
          (Response:any)=>{
                 
                 this.leaveRecord=Response;
                 console.log(Response);
                 this.tempVar=true;
                 this.tempVar2=false;
                 this.tempVar3=false;
          },
          (Error)=>{
              console.log("Check Leave Balance Error");
          }
        )
       
     }

    InleaveForm()
    {
      this.tempVar2=true;
      this.tempVar=false;
      this.tempVar3=false;
    }


     leaveSubmit(){
      this.newtoken= this.loginservice.getToken();
      this.base64Url =this.newtoken.split('.')[1];
      this.decodedValue = JSON.parse(window.atob(this.base64Url));
       this.leavedetails.userLeaveEmail=this.decodedValue["sub"];
       console.log(this.leavedetails.userLeaveEmail);
       this.userservice.takeLeave(this.leavedetails).subscribe(
        (Response:any)=>
        {
          console.log(Response);
          if(Response==='true')
          {
            Swal.fire({text:"Sent Your Request",timer:4000});
          }else{
            Swal.fire({text:"You are also in Waiting",timer:4000});
          }
         
        },
        (Error)=>{
          console.log("Submit leave  Error");
        }
      )
     }






     checkLeaveRecord()
     {
      this.newtoken= this.loginservice.getToken();
      this.base64Url =this.newtoken.split('.')[1];
      this.decodedValue = JSON.parse(window.atob(this.base64Url));
       this.email=this.decodedValue["sub"];
       this.userservice.checkLeaveRecordByEmail(this.email).subscribe(
         (Response:any)=>{
                
              // this.checkRecord=JSON.parse('Response');
                 this.checkRecord=Response;
                if(this.checkRecord===null)
                {
                  Swal.fire("You have  Total 12 leave");
                }
                console.log(Response);
                this.tempVar=false;
                this.tempVar2=false;
                this.tempVar3=true;
               
         },
         (Error)=>{
             console.log("Check Leave Balance Error");
         }
       )
     }


}
