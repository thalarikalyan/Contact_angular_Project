import { Component } from '@angular/core';
import { AuthenticationRequest } from '../AuthenticationRequest';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authenticationRequest: AuthenticationRequest = new AuthenticationRequest("","");
  message: string = "";

  constructor(private contactService: ContactService, private router: Router) { }

  loginContact() {
    this.contactService.loginContactDetails(this.authenticationRequest).subscribe(
      data => {
        console.log('data:', data);
        this.message = data; 
        console.log('kalyan');
        // Navigate to another route after receiving the token
        this.router.navigate(['dashboard']); 
      },
      error => {
        console.error('Error saving contact:', error);
      }
    );
  }
  }


