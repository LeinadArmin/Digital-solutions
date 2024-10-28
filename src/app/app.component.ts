import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mmsd-website';

  constructor(private router: Router) {}

  navigateToHome() {
    console.log('Navigating to Services');
    this.router.navigate(['/']);
  }

  navigateToServices() {
    console.log('Navigating to Services');
    this.router.navigate(['/services']);
  }

  navigateToAbout() {
    console.log('Navigating to Services');
    this.router.navigate(['/about']);
  }

  navigateToContact() {
    console.log('Navigating to Services');
    this.router.navigate(['/contact']);
  }
}
