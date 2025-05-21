import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Reservation } from '../interfaces/reservation.interface';

const baseUrl = environment.baseUrl

interface ReservationDto {
    numDiners?: number;
    date?: string;
    hour?: string;
    clientEmail?: string;
    clientFullName?: string;
    clientPhone?: string;
    restaurantId?: number;
}

@Injectable({providedIn: 'root'})
export class ReservationsService {

  http = inject(HttpClient);

  getClientReservation(clientEmail: string): Observable<Reservation[]> {

    if(clientEmail === null || clientEmail.length === 0) return of([])

    return this.http.get<Reservation[]>(`${baseUrl}/reservation`, {
      params: {
        clientEmail: clientEmail
      }
    }).pipe(
      tap( resp => console.log(resp))
    )
  }

  newReservation(reservationBody: ReservationDto): Observable<boolean> {

    return this.http.post<Reservation>(`${baseUrl}/reservation`, reservationBody)
      .pipe(
        map( resp => true ),
        catchError((error: any) => of(false))
      )
  }

}
