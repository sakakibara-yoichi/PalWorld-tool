import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaldeckComponent } from './paldeck/paldeck.component';
import { BreedingComponent } from './breeding/breeding.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'paldeck', component: PaldeckComponent },
  { path: 'breeding', component: BreedingComponent },
  { path: 'map', component: MapComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
