import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Restaurant } from '../../interfaces/restaurant.intesface';
import { RestaurantImagePipe } from '../../pipes/restaurant-image.pipe';
import { SlicePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'restaurant-card',
  imports: [RestaurantImagePipe, SlicePipe, RouterLink],
  templateUrl: './restaurant-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCardComponent {

  restInfo = input.required<Restaurant>();
}
