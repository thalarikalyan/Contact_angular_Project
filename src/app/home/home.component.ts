import { Component } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() { }

  prevSlide(event: Event) {
    event.preventDefault();
    $('.carousel').carousel('prev'); // Move to the previous slide
  }

  nextSlide(event: Event) {
    event.preventDefault();
    $('.carousel').carousel('next'); // Move to the next slide
  }

}
