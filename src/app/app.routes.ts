import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { NotFoundComponent } from './pages/404/404.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/details', component: DetailsComponent },
  { path: '**', component: NotFoundComponent },
];
