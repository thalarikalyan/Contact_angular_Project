import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SignupdetailsComponent } from './signupdetails/signupdetails.component';
import { LoginComponent } from './login/login.component';
import { InsertrecordComponent } from './insertrecord/insertrecord.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { HomeComponent } from './home/home.component';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { UpdaterecordComponent } from './updaterecord/updaterecord.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ExportContactDetailsComponent } from './export-contact-details/export-contact-details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"signup",pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"signupdetails",component:SignupdetailsComponent},
  {path:"login",component:LoginComponent},
  {path:"insertrecord",component:InsertrecordComponent},
 {path:"dashboard",component:DashboardComponent, canActivate: [AuthGuard]},
  {path:"userContact",component:UserContactComponent,canActivate: [AuthGuard]},
  {path:"home",component:HomeComponent,canActivate: [AuthGuard]},
  {path: 'edit/:id', component: ContacteditComponent,canActivate: [AuthGuard]},
  {path: 'updaterecord', component: UpdaterecordComponent,canActivate: [AuthGuard]},
  {path: 'createContact', component: ContactDetailsComponent,canActivate: [AuthGuard]},
  {path: 'exportContactDetails', component: ExportContactDetailsComponent,canActivate: [AuthGuard]},

 /* {path:"dashboard",component:DashboardComponent, canActivate: [CanActivate]},
  {path:"userContact",component:UserContactComponent,canActivate: [CanActivate]},
  {path:"home",component:HomeComponent,canActivate: [CanActivate]},
  {path: 'edit/:id', component: ContacteditComponent,canActivate: [CanActivate]},
  {path: 'updaterecord', component: UpdaterecordComponent,canActivate: [CanActivate]},
  {path: 'createContact', component: ContactDetailsComponent,canActivate: [CanActivate]},
  {path: 'exportContactDetails', component: ExportContactDetailsComponent,canActivate: [CanActivate]},*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
