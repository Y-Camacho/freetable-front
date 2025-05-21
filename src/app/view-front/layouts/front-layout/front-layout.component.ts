import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'front-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './front-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrontLayoutComponent {

  authService = inject(AuthService);
}
