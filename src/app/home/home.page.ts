import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  password: string = '';
  confirmPassword: string = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  message: string = '';
  isMatch: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  validatePasswords() {
    this.isMatch = this.password === this.confirmPassword;
    this.message = this.isMatch
      ? '¡Las contraseñas coinciden!'
      : 'Las contraseñas no coinciden.';
  }
}
