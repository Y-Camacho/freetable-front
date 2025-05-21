import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReservationsService } from '../../../reservations/services/reservations.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ReservationTableComponent } from "../../../reservations/components/reservation-table/reservation-table.component";

@Component({
  selector: 'app-client-reservation-page',
  imports: [ReservationTableComponent],
  templateUrl: './client-reservation-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientReservationPageComponent {

  reservationsService = inject(ReservationsService);

  clientEmail = signal<string>('')

  reservationResource = rxResource({
    request: () => ({clientEmail: this.clientEmail()}),
    loader: ({ request }) => {
      return this.reservationsService.getClientReservation(request.clientEmail);
    }
  })
}
