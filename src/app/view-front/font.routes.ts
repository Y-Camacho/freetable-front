import { Routes } from '@angular/router';
import { FrontLayoutComponent } from './layouts/front-layout/front-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RestaurantPageComponent } from './pages/restaurant-page/restaurant-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


export const frontRoutes: Routes = [
  {
    path: '',
    component: FrontLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'restaurant/:idRes',
        component: RestaurantPageComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]

export default frontRoutes;
