import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'restaurantTags'
})

export class RestaurantTagsPipe implements PipeTransform {

  sanitizer = inject(DomSanitizer);

  transform(value: string | string[]): SafeHtml {
    let tags = '';

    if (typeof value === 'string') {
      tags = `<div class="badge badge-ghost">${value}</div>`;
    } else if (value.length === 1) {
      tags = `<div class="badge badge-ghost">${value[0]}</div>`;
    } else {
      for (let tag of value) {
        tags += `<div class="badge badge-ghost">${tag}</div>`;
      }
    }

    return this.sanitizer.bypassSecurityTrustHtml(tags);
  }
}
