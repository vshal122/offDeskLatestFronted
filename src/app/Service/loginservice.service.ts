import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  url ="http://localhost:8081/jwt"
  activeUser:boolean=false;

  constructor(private http:HttpClient) {
    console.log(this.activeUser);
   }
  
  generateToken(credentials:any)
  {

    return this.http.post(`${this.url}/token`,credentials)

  }



  loginUser(token:any)
  {
    localStorage.setItem('token', token);
    return true;
  }

  isLoggedIn()
  {
    let token = localStorage.getItem('token');
    //console.log(token);
    if(token===undefined || token==='' || token==null)
    {
      return false;
    }
    else{
      return true;
    }
  }

  logout()
  {
    localStorage.removeItem('token');
    return true;
  }

  getToken()
  {
    return localStorage.getItem('token');
  }
}
