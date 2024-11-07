// pesquisa.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  termoBusca: string = '';

  constructor(private router: Router) {}

  buscarNoticias(): void {
    if (this.termoBusca) {
      this.router.navigate(['/resultados'], { queryParams: { termo: this.termoBusca, page: 0, pageSize: 7 } });
    }
  }
}