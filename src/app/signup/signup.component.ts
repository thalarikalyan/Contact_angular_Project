import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToSignupDetails() {
    this.router.navigate(["signupdetails"]);
  }

  navigateToLoginDetails() {
    this.router.navigate(["login"]);
  }
}
