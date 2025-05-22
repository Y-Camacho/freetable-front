import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ClientsService } from '../../../clients/services/client.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ClientTableComponent } from "../../../clients/components/client-table/client-table.component";

@Component({
  selector: 'app-admin-clients-page',
  imports: [ClientTableComponent],
  templateUrl: './admin-clients-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminClientsPageComponent {

  clientService = inject(ClientsService);

  clientsResource = rxResource({
    loader: () => {
      return this.clientService.getClients()
    }
  })
}
