import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/Service/user-profile.service';
import { UserRegisterService } from 'src/app/Service/user-register.service';
import { User } from 'src/app/User';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css']
})
export class RegistraionComponent implements OnInit {

  
  user:User = new User("","","","","","","","",0,"");
  message:any;
  AllManager:any=[];
    public expose!: FormGroup;
 
  constructor(private userservice:UserRegisterService,private userprofile:UserProfileService,public SnackBar:MatSnackBar)
   { 
    
   }
  
 
  ngOnInit(): void {
    
    }

  
  public registerNow()
  { 
       if(this.user.address!='' && this.user.designation!='' && this.user.email!='' && this.user.gender!='' && this.user.joinDate!='' && this.user.mobile!='' && this.user.password!='' && this.user.userName!='')
  {
         let res=this.userservice.doRegistration(this.user);
         res.subscribe((data)=>{this.message=data
              Swal.fire({text:"Registration successfull",timer:6000})
         },
              (Error)=>{
                console.log("Registration Error");
                
              }
              
              
         )
  }
  else{
    this.SnackBar.open('fields can\'t be empty', 'Cancel');
  }
}


  public getAllManager()
  {
         this.userprofile.getAllEmailManager().subscribe((data)=>{
        this.AllManager=data;
         console.log(data);
      })
    }



}
