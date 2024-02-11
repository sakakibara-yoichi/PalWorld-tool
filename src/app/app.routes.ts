import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
  { path: 'paldeck', loadComponent: () => import('./paldeck/paldeck.component').then(mod => mod.PaldeckComponent) },
  { path: 'breeding', loadComponent: () => import('./breeding/breeding.component').then(mod => mod.BreedingComponent) },
  { path: 'map', loadComponent: () => import('./map/map.component').then(mod => mod.MapComponent) },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
