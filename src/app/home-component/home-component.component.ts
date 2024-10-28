// home-component.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  standalone: true
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    console.log('Navigating to Services');
    this.router.navigate(['/']);
  }

  navigateToServices() {
    console.log('Navigating to Services');
    this.router.navigate(['/services']);
  }


}
