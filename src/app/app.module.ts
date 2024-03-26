import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SignupdetailsComponent } from './signupdetails/signupdetails.component';
import { LoginComponent } from './login/login.component';
import { ContactService } from './contact.service';
import { InsertrecordComponent } from './insertrecord/insertrecord.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { UserContactComponent } from './user-contact/user-contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorInterceptor } from './error-interceptor.service';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { UpdaterecordComponent } from './updaterecord/updaterecord.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExportContactDetailsComponent } from './export-contact-details/export-contact-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableExporterModule } from 'mat-table-exporter';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SignupdetailsComponent,
    LoginComponent,
    InsertrecordComponent,
    DashboardComponent,
    AboutComponent,
    UserContactComponent,
    HomeComponent,
    ContacteditComponent,
    UpdaterecordComponent,
    NavigationComponent,
    ContactDetailsComponent,
    CarouselComponent,
    ExportContactDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule, 
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableExporterModule
    
],
providers: [ContactService,
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add CUSTOM_ELEMENTS_SCHEMA here
})
export class AppModule { }


