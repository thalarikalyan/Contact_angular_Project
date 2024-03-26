import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private router:Router) {}

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['signup']);
  }

}
