import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-adicionar-feed',
  templateUrl: './adicionarFeed.component.html',
  styleUrls: ['./adicionarFeed.component.css'],
})
export class AdicionarFeedComponent {
  rssUrl: string = ''; // Feed RSS URL
  categoria: string = ''; // Categoria do feed
  mensagem: string = ''; // Mensagem de erro ou sucesso

  constructor(private pesquisaService: PesquisaService, private router: Router) {}

  /**
   * Adiciona um novo feed RSS com a URL e categoria fornecidas.
   */
  adicionarFeed(): void {
    if (!this.rssUrl || !this.categoria) {
      this.mensagem = 'Por favor, preencha todos os campos.';
      return;
    }

    this.pesquisaService.adicionarFeedRSS(this.rssUrl, this.categoria).subscribe({
      next: () => {
        this.mensagem = 'Feed adicionado e processado com sucesso!';
        this.rssUrl = '';
        this.categoria = '';
      },
      error: (error) => {
        this.mensagem = 'Erro ao adicionar feed. Tente novamente.';
        console.error('Erro ao adicionar feed:', error);
      },
    });
  }

  /**
   * Cancela a operação e retorna para a página anterior.
   */
  cancelar(): void {
    this.router.navigate(['/pesquisa']); // Redireciona para a página de pesquisa
  }
}
