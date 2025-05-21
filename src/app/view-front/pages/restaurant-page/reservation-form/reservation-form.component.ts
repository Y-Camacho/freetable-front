import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from '../../../../reservations/services/reservations.service';

@Component({
  selector: 'reservation-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reservation-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent {

  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);

  reservationsService = inject(ReservationsService);

  restaurantId = this.activateRoute.snapshot.params['idRes'];

  isInValid = signal(false);
  hasError = signal(false);

  reservationForm = this.fb.group({
    numDiners: [0, Validators.required],
    date: ['', [Validators.required, this.fechaMinimaValidator]],
    hour: ['', [Validators.required, this.horaValidator]],
    clientEmail: ['', [Validators.required, Validators.email]],
    clientFullName: ['', Validators.required],
    clientPhone: ['', Validators.required],
    restaurantId: [Number(this.restaurantId)]

  });

  fechaMinimaValidator(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();

    // Set both to midnight to compare only the dates
    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return inputDate >= today ? null : { fechaInvalida: true };
  }

  horaValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const [hora, minutos] = value.split(':').map(Number);

    // Validar rango (09:00 a 18:00)
    if (hora < 9 || (hora === 18 && minutos > 0) || hora > 18) {
      return { fueraDeRango: true };
    }

    // Validar que los minutos estén en intervalos de 15
    if (minutos % 15 !== 0) {
      return { intervaloInvalido: true };
    }

    return null;
  }

  // Metodo que hace la petición http para una reseva
  onSubmit(): void {
    if(!this.reservationForm.valid) {
      this.isInValid.set(true);
      setTimeout(() => {
        this.isInValid.set(false);
      }, 2000);

      return;
    }

    this.reservationsService.newReservation({
      numDiners: this.reservationForm.value.numDiners!,
      date: this.reservationForm.value.date!,
      hour: this.reservationForm.value.hour!,
      clientEmail: this.reservationForm.value.clientEmail!,
      clientFullName: this.reservationForm.value.clientFullName!,
      clientPhone: this.reservationForm.value.clientPhone!,
      restaurantId: this.reservationForm.value.restaurantId!,
    }).subscribe(reservationOk => {
      // Si la reserva se ha hecho redirecciona al home
      if(reservationOk) {
        this.router.navigateByUrl('/');
        return;
      }

      // Sino, muestra un mensaje de error
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 4000);
    })
    console.log(this.reservationForm.value);
  }
    isInvalid(controlName: string): boolean {
    const control = this.reservationForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}
