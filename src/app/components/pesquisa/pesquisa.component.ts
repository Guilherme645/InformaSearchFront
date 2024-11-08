import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {
  termoBusca: string = ''; // Termo digitado pelo usuário
  categoriaSelecionada: string = ''; // Categoria escolhida pelo usuário
  categorias: string[] = ['Tecnologia', 'Política', 'Esportes', 'Entretenimento', 'Negócios']; // Categorias disponíveis

  constructor(private router: Router) {}

  // Realiza a navegação para o componente de resultados com os parâmetros
  buscarNoticias(): void {
    if (this.termoBusca || this.categoriaSelecionada) {
      this.router.navigate(['/resultados'], {
        queryParams: {
          termo: this.termoBusca,
          categoria: this.categoriaSelecionada,
          page: 0,
          pageSize: 7
        }
      });
    }
  }
}
