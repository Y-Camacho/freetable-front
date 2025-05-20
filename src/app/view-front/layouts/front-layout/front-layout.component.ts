import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'front-layout',
  imports: [RouterOutlet],
  templateUrl: './front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLayoutComponent { }
