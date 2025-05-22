import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Client } from '../interfaces/client.interface';
import { environment } from '../../../environments/environment';

const baseUrl = environment.baseUrl

@Injectable({providedIn: 'root'})
export class ClientsService {

  http = inject(HttpClient);

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${baseUrl}/client`)
          .pipe(
            tap( resp => console.log(resp) )
          )
  }

  getClientByEmail(clientEmail: string): Observable<Client> {
    return this.http.get<Client>(`${baseUrl}/client/${clientEmail}`)
          .pipe(
            tap( resp => console.log(resp) )
          )
  }

}
