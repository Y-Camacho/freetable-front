import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { FrontNavbarSearchComponent } from "../components/front-navbar-search/front-navbar-search.component";
import { RestaurantsServices } from '../../restaurants/services/restaurant.service';
import { RestaurantCardComponent } from "../../restaurants/components/restaurant-card/restaurant-card.component";

@Component({
  selector: 'home-page',
  imports: [RestaurantCardComponent],
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {

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
