import { Component } from '@angular/core';
import { AboutCardComponent } from './about-card/about-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [CommonModule, AboutCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  aboutCards = [
    {
      title: 'Misión',
      content:
        'Proporcionar soluciones tecnológicas confiables que impulsen el crecimiento de nuestros clientes.',
    },
    {
      title: 'Visión',
      content:
        'Ser un referente en servicios TI, reconocidos por la calidad e innovación de nuestras soluciones.',
    },
    {
      title: 'Valores',
      content:
        'Compromiso, innovación, integridad y un enfoque centrado en el cliente.',
    },
  ];
}
