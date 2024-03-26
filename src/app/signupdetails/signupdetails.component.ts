import { Component } from '@angular/core';
import { Contacts } from '../Contacts';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupdetails',
  templateUrl: './signupdetails.component.html',
  styleUrl: './signupdetails.component.css'
})
export class SignupdetailsComponent {
contact: Contacts = new Contacts(0, "", "", 0, "", "", "");
  message: string = "";

  constructor(private contactService: ContactService, private router: Router) { }

  createContact() {
    this.contactService.insertContactDetails(this.contact).subscribe(
      data => {
        console.log('data:', data);
        this.message = data; 
        console.log('kalyan');
        // Navigate to another route after receiving the token
        this.router.navigate(['insertrecord']); 
      },
      error => {
        console.error('Error saving contact:', error);
      }
    );
  }
  }
