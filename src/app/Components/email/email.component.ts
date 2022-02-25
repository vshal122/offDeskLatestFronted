import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/Service/mail.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data={
    fromMail: " ",
    toMail: " ",
    subjectMail: " ",
    bodyMail:" "
  }

  constructor(private email: MailService) { }

  ngOnInit(): void {
  }
   
  doSubmit()
  {
    console.log("Try to submit Form");
    console.log("DATA",this.data);
    this.email.SendMail(this.data).subscribe(
      response=>{
        console.log(response);
        Swal.fire({"text" :"Sent Message"});
      },
      error=>{
       console.log(error);
      }
    )

  }

}
