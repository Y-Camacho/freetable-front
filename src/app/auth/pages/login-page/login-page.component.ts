import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);

  hasError = signal(false);
  isPosting = signal(false);

  loginForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(3)]],
  });

  onSubmin() {
    if( this.loginForm.invalid ) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }

    const { email = '', password = '' } = this.loginForm.value;

    this.authService.login(email!, password!).subscribe( isAuthenticated => {
      if( isAuthenticated ){
        this.router.navigateByUrl('/');
        return;
      }

      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
    })

  }


}
