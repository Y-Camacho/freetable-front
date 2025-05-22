import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'client-table',
  imports: [RouterLink],
  templateUrl: './client-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientTableComponent {

  clients = input.required<Client[]>();
}
