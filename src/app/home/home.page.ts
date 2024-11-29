import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  isMatch: boolean = false;

  validatePasswords() {
    if (this.password === this.confirmPassword) {
      this.message = 'Las contraseñas coinciden.';
      this.isMatch = true;
    } else {
      this.message = 'Las contraseñas no coinciden.';
      this.isMatch = false;
    }
  }
}