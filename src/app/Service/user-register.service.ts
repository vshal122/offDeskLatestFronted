import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http:HttpClient) { }

  public doRegistration(user:User)
  {
           return this.http.post("http://localhost:8081/offdesk/user/save",user,{responseType:"text" as "json"});
  }
}
