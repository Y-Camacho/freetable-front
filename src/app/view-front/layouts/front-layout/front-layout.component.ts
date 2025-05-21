import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'front-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLayoutComponent { }
