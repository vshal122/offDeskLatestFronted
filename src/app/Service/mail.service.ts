import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http:HttpClient) { }
  baseurl="http://localhost:8081"
 
   SendMail(data:any)
    {
    return this.http.post(`${this.baseurl}/offdesk/sendmail`,data);
    }
  
}
