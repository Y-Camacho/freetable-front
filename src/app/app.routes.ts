import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './view-front/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view-front/font.routes'),
  }
];
