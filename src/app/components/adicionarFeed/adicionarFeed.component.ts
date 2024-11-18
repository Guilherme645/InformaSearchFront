import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-adicionarFeed',
  templateUrl: './adicionarFeed.component.html',
  styleUrls: ['./adicionarFeed.component.css']
})
export class AdicionarFeedComponent {
  rssUrl: string = '';
  categorias: string = '';
  mensagem: string = '';

  constructor(private pesquisaService: PesquisaService) {}

  /**
   * Adiciona um novo feed RSS chamando o serviço.
   */
  adicionarFeed(): void {
    if (!this.rssUrl || !this.categorias) {
      this.mensagem = 'Por favor, preencha todos os campos.';
      return;
    }

    // Chama o serviço para adicionar o feed
    this.pesquisaService.adicionarFeedRSS(this.rssUrl, this.categorias).subscribe({
      next: () => {
        this.mensagem = 'Feed adicionado com sucesso!';
        this.rssUrl = '';
        this.categorias = '';
      },
      error: (err) => {
        this.mensagem = `Erro ao adicionar feed: ${err.error || err.message}`;
      }
    });
  }
}
