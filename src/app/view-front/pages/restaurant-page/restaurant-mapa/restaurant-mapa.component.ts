import { ChangeDetectionStrategy, Component, inject, input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'restaurant-mapa',
  imports: [],
  templateUrl: './restaurant-mapa.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantMapaComponent implements OnChanges {

  sanitizer = inject(DomSanitizer);

  direccion = input.required<string>();
  mapaUrl: SafeResourceUrl = '';

  ngOnChanges(): void {
    if (this.direccion()) {
      const encodedDireccion = encodeURIComponent(this.direccion());
      const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCgqoyeiCdYvxXP6pAdJ350xjRHFmpklBY&q=${encodedDireccion}`;
      this.mapaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
}
