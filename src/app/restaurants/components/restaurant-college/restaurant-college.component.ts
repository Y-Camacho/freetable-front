import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RestaurantImagePipe } from '../../pipes/restaurant-image.pipe';

@Component({
  selector: 'restaurant-college',
  imports: [RestaurantImagePipe],
  templateUrl: './restaurant-college.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantCollegeComponent {

  images = input.required<string[]>();
}
