// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component.component';
import { ServicesComponent } from './components/services-component/services-component.component';
import { AboutComponent } from './components/about-component/about-component.component';
import { ContactComponent } from './components/contact-component/contact-component.component';

// Asegúrate de exportar correctamente la constante
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];
