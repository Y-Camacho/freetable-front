import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReservationsService } from '../../../reservations/services/reservations.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-client-reservation-page',
  imports: [],
  templateUrl: './client-reservation-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientReservationPageComponent {

  reservationsService = inject(ReservationsService);

  clientEmail = signal<string>('juanPerez')

  reservationResource = rxResource({
    request: () => ({clientEmail: this.clientEmail()}),
    loader: ({ request }) => {
      return this.reservationsService.getClientReservation(request.clientEmail);
    }
  })
}
