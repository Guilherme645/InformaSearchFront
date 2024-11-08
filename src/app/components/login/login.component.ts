import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor() {}

  onLogin(): void {
    if (this.email && this.password) {
      console.log('E-mail:', this.email);
      console.log('Senha:', this.password);

      // Aqui você pode chamar o serviço para autenticação
      // Exemplo:
      // this.authService.login(this.email, this.password).subscribe(response => {
      //   // Redirecionar ou mostrar mensagem de sucesso
      // });
    } else {
      console.error('Preencha os campos corretamente.');
    }
  }
}
