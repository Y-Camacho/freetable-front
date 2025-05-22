import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ReservationsService } from '../../../reservations/services/reservations.service';
import { ClientsService } from '../../../clients/services/client.service';
import { ReservationTableComponent } from "../../../reservations/components/reservation-table/reservation-table.component";

@Component({
  selector: 'admin-client-page',
  imports: [ReservationTableComponent],
  templateUrl: './admin-client-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminClientPageComponent {

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  clientService = inject(ClientsService);
  resservationsService = inject(ReservationsService);

  clientEmail = toSignal(
    this.activatedRoute.params.pipe(
      map(({emailClient}) => emailClient)
    )
  );

  clientResource = rxResource({
    request: () => ({ id: this.clientEmail() }),
    loader: ({ request }) => {
      return this.clientService.getClientByEmail( request.id );
    }
  })

  reservationResource = rxResource({
    request: () => ({ id: this.clientEmail() }),
    loader: ({ request }) => {
      return this.resservationsService.getClientReservation( request.id );
    }
  })

}
