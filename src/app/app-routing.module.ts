import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailComponent } from './Components/email/email.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AuthGuard } from './Service/auth.guard';
import { RegistraionComponent } from './Components/registraion/registraion.component';
import { DashboardManagerComponent } from './Components/dashboard-manager/dashboard-manager.component';
import { DashboardHrComponent } from './Components/dashboard-hr/dashboard-hr.component';
import { DashboardDeveloperComponent } from './Components/dashboard-developer/dashboard-developer.component';


const routes: Routes = [
  { path: 'SendMail', component: EmailComponent, pathMatch:"full", canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent , pathMatch:"full" },
  { path: 'dashboard', component: DashboardComponent , pathMatch:"full", canActivate:[AuthGuard] },
  { path : 'home' ,component : HomeComponent,pathMatch:"full"},
  { path : 'registraion' ,component : RegistraionComponent,pathMatch:"full", canActivate:[AuthGuard]},
  { path : 'dashboard-manager' ,component : DashboardManagerComponent,pathMatch:"full", canActivate:[AuthGuard]},
  { path : 'dashboard-hr' ,component : DashboardHrComponent,pathMatch:"full"},
  { path : 'dashboard-developer' ,component : DashboardDeveloperComponent,pathMatch:"full", canActivate:[AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }