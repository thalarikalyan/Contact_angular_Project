import { Component } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

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
