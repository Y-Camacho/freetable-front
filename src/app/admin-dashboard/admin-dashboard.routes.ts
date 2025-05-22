import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AdminRestauantsPageComponent } from "./pages/admin-restauants-page/admin-restauants-page.component";
import { AdminClientsPageComponent } from "./pages/admin-clients-page/admin-clients-page.component";
import { AdminRestaurantPageComponent } from "./pages/admin-restaurant-page/admin-restaurant-page.component";
import { AdminClientPageComponent } from "./pages/admin-client-page/admin-client-page.component";

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'restaurants',
        component: AdminRestauantsPageComponent
      },
      {
        path: 'restaurants/:idRes',
        component: AdminRestaurantPageComponent
      },
      {
        path: 'clients',
        component: AdminClientsPageComponent
      },
      {
        path: 'clients/:emailClient',
        component: AdminClientPageComponent
      },
      {
        path: '**',
        redirectTo: 'restaurants'
      }
    ]
  }
]

export default adminDashboardRoutes;
