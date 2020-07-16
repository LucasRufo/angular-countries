import { Routes } from '@angular/router'
import { MainComponent } from './Paises/main/main.component';
import { FormComponent } from './Email/form/form.component';

export const routerConfig: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'email', component: FormComponent }
];


