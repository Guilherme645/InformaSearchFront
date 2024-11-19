import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  private readonly validUsername = 'guilherme64513@gmail.com';
  private readonly validPassword = '123456';

  constructor(private router: Router) {}

  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }
    if (
      this.username === this.validUsername &&
      this.password === this.validPassword
    ) {
      localStorage.setItem('isLoggedIn', 'true'); 
      this.router.navigate(['/adicionar']); 
    } else {
      this.errorMessage = 'Usuário ou senha inválidos. Tente novamente.';
    }
  }
}
