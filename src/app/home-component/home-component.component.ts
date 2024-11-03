import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  standalone: true
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }

  checkVisibility() {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        card.classList.add('visible');
      }
    });
  }
}
