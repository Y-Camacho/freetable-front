import { Pipe, PipeTransform } from "@angular/core";
import { environment } from "../../../environments/environment";


const baseUrl = environment.baseUrl;

@Pipe({
  name: 'restaurantMenu'
})
export class RestaurantMenuPipe implements PipeTransform {
  transform(value: string | string[]): string {

    if( typeof value === 'string' ){
      return `${baseUrl}/files/menu?fileName=${value}`;
    }

    const image = value.at(0);

    if( !image ){
      return './assets/images/no-image.jpg';
    }

    return `${baseUrl}/files/menu?fileName=${image}`
  }
}
