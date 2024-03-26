import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updaterecord',
  templateUrl: './updaterecord.component.html',
  styleUrl: './updaterecord.component.css'
})
export class UpdaterecordComponent {


  constructor(private router: Router) { }

  navigateToDashBoard() {
    // Navigate to another route after receiving the token
    this.router.navigate(['dashboard']); 
  }

}
