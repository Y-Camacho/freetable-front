import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RestaurantsServices } from '../../../restaurants/services/restaurant.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Restaurant } from '../../../restaurants/interfaces/restaurant.intesface';
import { RestaurantImagePipe } from '../../../restaurants/pipes/restaurant-image.pipe';
import { RestaurantTagsPipe } from '../../../restaurants/pipes/restaurant-tags.pipe';
import { RouterLink } from '@angular/router';
import { RestaurantMenuPipe } from '../../../restaurants/pipes/restaurant-menu.pipe';

@Component({
  selector: 'app-admin-restauants-page',
  imports: [
    RestaurantImagePipe,
    RestaurantTagsPipe,
    RouterLink
  ],
  templateUrl: './admin-restauants-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminRestauantsPageComponent {

  restaurantsService = inject(RestaurantsServices);

  searchNameRestaurant = signal<string>('');
  searchTagRestaurant = signal<string>('');

  restaurantResource = rxResource({
    request: () => ({
      resName: this.searchNameRestaurant(),
      tag: this.searchTagRestaurant()
    }),
    loader: ({request}) => {
      return this.restaurantsService.getRestaurants({
        resName: request.resName,
        tag: request.tag
      });
    }
  })


}
