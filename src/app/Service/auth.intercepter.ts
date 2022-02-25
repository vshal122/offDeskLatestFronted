import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginserviceService } from "./loginservice.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{

    constructor(private loginservice:LoginserviceService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let NewResponse=req;
        let token= this.loginservice.getToken();

       // console.log("Interceptor"+token)
        if(token!=null)
        {
           NewResponse= NewResponse.clone({setHeaders:{Authorization:`Bearer ${token}`}})
        }

        return next.handle(NewResponse);
    }

}