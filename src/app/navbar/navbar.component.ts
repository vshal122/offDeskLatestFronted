import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginserviceService } from '../Service/loginservice.service';
import { UserProfileService } from '../Service/user-profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn = false;
   
  constructor(private loginservice:LoginserviceService,private userservice:UserProfileService) { }

  ngOnInit(): void {
    this.loggedIn = this.loginservice.isLoggedIn();
  }
  newtoken:any;
  base64Url:any;
  decodedValue:any;
  email : string="";
  
 public userProfile:any;
 
  logOut()
  {
    this.loginservice.logout();
    location.reload();
    this.loginservice.activeUser=false; 
    Swal.fire({text:"Exit Successfully",timer:30000});
    window.location.href="/login";
  }
  logIn()
  {
    window.location.href="/login";
  }
  register()
  {
    window.location.href="/registration";
  }
  homePage(){
    window.location.href="/home";
  }
  Dashboard(){
    window.location.href="/dashboard";
  }

  myprofile()
  {
    
      this.newtoken= this.loginservice.getToken();
      this.base64Url =this.newtoken.split('.')[1];
      this.decodedValue = JSON.parse(window.atob(this.base64Url));
        this.email=this.decodedValue["sub"];
       this.userservice.getUserbyEmail(this.email).subscribe(
         (Response:any)=>{
                console.log(Response);
                this.userProfile=Response;
         },
         (Error)=>{
             console.log("My Profile ERRoR");
         }
       )
      
    
  }
  

}
