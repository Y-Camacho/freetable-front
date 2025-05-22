import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsServices } from '../../../restaurants/services/restaurant.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { RestaurantTagsPipe } from '../../../restaurants/pipes/restaurant-tags.pipe';
import { RestaurantImagePipe } from '../../../restaurants/pipes/restaurant-image.pipe';
import { RestaurantMenuPipe } from '../../../restaurants/pipes/restaurant-menu.pipe';
import { ReservationsService } from '../../../reservations/services/reservations.service';
import { ReservationTableComponent } from "../../../reservations/components/reservation-table/reservation-table.component";

@Component({
  selector: 'admin-restaurant-page',
  imports: [
    RestaurantTagsPipe,
    RestaurantImagePipe,
    RestaurantMenuPipe,
    ReservationTableComponent
],
  templateUrl: './admin-restaurant-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRestaurantPageComponent {

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  restaurantsService = inject(RestaurantsServices);
  resservationsService = inject(ReservationsService);

  resId = toSignal(
    this.activatedRoute.params.pipe(
      map(({idRes}) => idRes)
    )
  );

  restaurantResource = rxResource({
    request: () => ({ id: this.resId() }),
    loader: ({ request }) => {
      return this.restaurantsService.getRestaurantById( request.id );
    }
  })

  reservationResource = rxResource({
    request: () => ({ id: this.resId() }),
    loader: ({ request }) => {
      return this.resservationsService.getRestaurantReservations( request.id );
    }
  })

}
