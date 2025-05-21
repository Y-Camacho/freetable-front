
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';
import { Restaurant } from '../interfaces/restaurant.intesface';

const baseUrl = environment.baseUrl

interface Options {
  resName?: string,
  tag?: string
}

@Injectable({providedIn: 'root'})
export class RestaurantsServices {

  http = inject(HttpClient);

  getRestaurants(options: Options): Observable<Restaurant[]> {
    const { resName = '', tag= ''} = options;

    return this.http.get<Restaurant[]>(`${baseUrl}/restaurant`,{
      params: {
        resName,
        tag
      }
    })
    .pipe(
      tap( resp => console.log(resp) )
    )
  }

  getRestaurantById(restaurantId: string): Observable<Restaurant> {

    return this.http.get<Restaurant>(`${baseUrl}/restaurant/${restaurantId}`)
      .pipe(
        tap( resp => console.log(resp) )
      )
  }

}
