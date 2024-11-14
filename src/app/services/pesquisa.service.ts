import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para representar uma notícia
export interface Noticia {
  id: string;
  title: string; // Atualize para refletir o campo do backend
  description: string;
  link: string;
  pubDate: string;
  faviconUrl: string;
  sourceUrl: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {
  private readonly apiUrl = 'http://localhost:8080'; // Base URL do backend

  constructor(private http: HttpClient) {}

  /**
   * Busca notícias filtradas por termo e categoria, com paginação.
   * @param termo Termo de busca
   * @param categoria Categoria da notícia
   * @param page Página atual
   * @param pageSize Tamanho da página
   * @returns Observable com a lista de notícias
   */
  buscarNoticias(
    termo: string | null,
    categoria: string | null,
    page: number,
    pageSize: number
  ): Observable<Noticia[]> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    if (termo) {
      params = params.set('termo', termo);
    }

    if (categoria) {
      params = params.set('categoria', categoria);
    }

    return this.http.get<Noticia[]>(`${this.apiUrl}/buscar`, { params });
  }


  /**
   * Processa os feeds RSS e armazena as notícias no backend.
   * @returns Observable para acompanhar a resposta do backend
   */
  processarFeeds(): Observable<any> {
    return this.http.post(`${this.apiUrl}/processar-rss`, null);
  }

  /**
   * Adiciona um novo feed RSS com as categorias associadas.
   * @param rssUrl URL do feed RSS
   * @param categorias Categorias associadas ao feed
   * @returns Observable para acompanhar a resposta do backend
   */
  adicionarFeedRSS(rssUrl: string, categorias: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/adicionar-feed`, {
      url: rssUrl,
      categorias,
    });
  }
}
