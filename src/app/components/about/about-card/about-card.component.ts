import { Component, Input } from '@angular/core';

@Component({
  selector: 'about-card',
  standalone: true,
  imports: [],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.css',
})
export class AboutCardComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
