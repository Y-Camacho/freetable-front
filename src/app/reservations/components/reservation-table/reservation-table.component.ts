import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reservation } from '../../interfaces/reservation.interface';

@Component({
  selector: 'reservation-table',
  imports: [],
  templateUrl: './reservation-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationTableComponent {

  reservations = input.required<Reservation[]>();
}
