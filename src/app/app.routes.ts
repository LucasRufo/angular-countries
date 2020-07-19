import { Routes } from '@angular/router'
import { MainComponent } from './Paises/main/main.component';

export const routerConfig: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
];


