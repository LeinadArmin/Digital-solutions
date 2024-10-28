// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component.component';
import { ServicesComponent } from './services-component/services-component.component';
import { AboutComponent } from './about-component/about-component.component';
import { ContactComponent } from './contact-component/contact-component.component';

// Asegúrate de exportar correctamente la constante
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
