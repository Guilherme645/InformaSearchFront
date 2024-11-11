import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionarFeed',
  templateUrl: './adicionarFeed.component.html',
  styleUrls: ['./adicionarFeed.component.css']
})
export class AdicionarFeedComponent  {
  rssUrl: string = '';
  categorias: string = '';
  mensagem: string = '';

  constructor(private http: HttpClient) {}

  adicionarFeed(): void {
    if (!this.rssUrl || !this.categorias) {
      this.mensagem = 'Por favor, preencha todos os campos.';
      return;
    }

    const categoriasArray = this.categorias.split(',').map((categoria) => categoria.trim()); // Converte categorias para array
    const body = { url: this.rssUrl, categorias: categoriasArray };

    this.http.post('http://localhost:8080/noticias/adicionar-feed', body)
      .subscribe({
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