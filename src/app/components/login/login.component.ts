import { Router } from '@angular/router';
import { LoginServiceService } from './../../services/loginService.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  isLoading = false;

  constructor(private LoginServiceService: LoginServiceService, private router: Router) {}

  /**
   * Tenta realizar o login com as credenciais fornecidas.
   */
  login(): void {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    this.isLoading = true;
    this.LoginServiceService.login(this.username, this.password).subscribe({
      next: (response) => {
        // Supondo que o token seja retornado pelo backend
        localStorage.setItem('token', response.token);
        this.isLoading = false;
        this.router.navigate(['/dashboard']); // Redireciona após o login bem-sucedido
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage =
          err.error?.message || 'Erro ao realizar login. Tente novamente.';
      },
    });
  }
}
