import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { EmailComponent } from './Components/email/email.component';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LoginserviceService } from './Service/loginservice.service';
import { AuthGuard } from './Service/auth.guard';
import { AuthIntercepter } from './Service/auth.intercepter';
import { RegistraionComponent } from './Components/registraion/registraion.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { DashboardManagerComponent } from './Components/dashboard-manager/dashboard-manager.component';
import { DashboardHrComponent } from './Components/dashboard-hr/dashboard-hr.component';
import { DashboardDeveloperComponent } from './Components/dashboard-developer/dashboard-developer.component';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_DATE_FORMATS } from './my-date-formate';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MailService } from './Service/mail.service';
import { UserRegisterService } from './Service/user-register.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmailComponent,
    LoginComponent,
    DashboardComponent,
    RegistraionComponent,
    DashboardManagerComponent,
    DashboardHrComponent,
    DashboardDeveloperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MomentDateModule,
    MatSnackBarModule,
    ReactiveFormsModule
    
    

  ],
  providers: [MailService,LoginserviceService,AuthGuard,[{provide:HTTP_INTERCEPTORS,useClass:AuthIntercepter,multi:true}],RegistraionComponent,{provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},UserRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
