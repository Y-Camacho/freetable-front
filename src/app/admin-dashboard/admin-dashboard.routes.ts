import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AdminRestauantsPageComponent } from "./pages/admin-restauants-page/admin-restauants-page.component";

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'restaurants',
        component: AdminRestauantsPageComponent
      }
    ]
  }
]

export default adminDashboardRoutes;
