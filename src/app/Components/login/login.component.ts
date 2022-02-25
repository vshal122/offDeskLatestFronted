import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { LoginserviceService } from 'src/app/Service/loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
     username:'',
     password:'',
     designation:''

  }
  user:any;
  hide:boolean=true;
  
  constructor(public loginService:LoginserviceService,private SnackBar:MatSnackBar) { }

  

  ngOnInit(): void {
    
  }
  
  customSubmit()
 {  

  if((this.credentials.username !='' && this.credentials.password !='') && (this.credentials.username !=null && this.credentials.password !=null))
  {
  this.loginService.generateToken(this.credentials).subscribe(
    (Response:any)=>{
         this.loginService.loginUser(Response.token);
         var Newtoken= Response.token;
         console.log(Newtoken);
         var base64Url =Newtoken.split('.')[1];
         var decodedValue = JSON.parse(window.atob(base64Url));
         this.credentials.designation =decodedValue["userRole"][0];
         console.log(this.credentials.designation);
         
         this.loginService.activeUser=true;
          if(this.credentials.designation=="Admin")
          {
            console.log("Welcome in Admin Panel");
            Swal.fire({text:"Logged In",timer:10000});
           window.location.href="/dashboard"
          }else if(this.credentials.designation=="Manager")
          {
            console.log("Welcome in Manager Panel");
            Swal.fire({text:"Logged In",timer:10000});
           window.location.href="/dashboard-manager"
          }else if(this.credentials.designation=="Developer")
          {
            console.log("WElcome to our Developer");
            Swal.fire({text:"Logged In",timer:10000});
            window.location.href="/dashboard-developer";
            
          }

 },
   Error=>{
            console.log("Log Response Error");
            this.SnackBar.open('Credentials are not valid', 'Cancel');


      })
  }

  else
  {
    this.SnackBar.open('username && password not empty', 'Cancel');
  }
}
   
    
  
  
  
  
  


}
