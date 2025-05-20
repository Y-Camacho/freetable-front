import { RestaurantMenuPipe } from './../../../restaurants/pipes/restaurant-menu.pipe';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RestaurantsServices } from '../../../restaurants/services/restaurant.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RestaurantImagePipe } from '../../../restaurants/pipes/restaurant-image.pipe';
import { RestaurantCollegeComponent } from "../../../restaurants/components/restaurant-college/restaurant-college.component";
import { ReservationFormComponent } from "./reservation-form/reservation-form.component";
import { RestaurantMapaComponent } from "./restaurant-mapa/restaurant-mapa.component";

@Component({
  selector: 'app-restaurant-page',
  imports: [
    RestaurantImagePipe,
    RestaurantMenuPipe,
    RestaurantCollegeComponent,
    ReservationFormComponent,
    RestaurantMapaComponent
],
  templateUrl: './restaurant-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantPageComponent {

  activateRoute = inject(ActivatedRoute);
  restaurantsService = inject(RestaurantsServices)

  restaurantId = this.activateRoute.snapshot.params['idRes'];

  restaurantResource = rxResource({
    request: () => ({ idRes: this.restaurantId}),
    loader: ({ request }) => {
      return this.restaurantsService.getRestaurantById(request.idRes);
    }
  })

}
