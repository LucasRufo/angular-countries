import { Routes } from '@angular/router'
import { MainComponent } from './Paises/main/main.component';
import { DetailsComponent } from './Paises/details/details.component';

export const routerConfig: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'details', component: DetailsComponent }
];


