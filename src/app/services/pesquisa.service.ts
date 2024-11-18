import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para representar uma notícia
export interface Noticia {
  id: string;
  title: string;
  description: string;
  link: string;
  pubDate: string;
  faviconUrl?: string;
  sourceUrl?: string;
  categoria: string;
}

// Interface para resposta com paginação
export interface Paginacao<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
}

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {
  private readonly apiUrl = 'http://localhost:8080/noticias';

  constructor(private http: HttpClient) {}

  /**
   * Busca notícias filtradas por termo e categoria, com paginação.
   * @param termo Termo de busca
   * @param categoria Categoria da notícia
   * @param page Página atual (baseado em zero)
   * @param pageSize Tamanho da página
   * @returns Observable com os dados paginados
   */
  buscarNoticias(
    termo: string | null,
    categoria: string | null,
    page: number,
    pageSize: number
  ): Observable<Paginacao<Noticia>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', pageSize.toString());

    if (termo) {
      params = params.set('termo', termo);
    }

    if (categoria) {
      params = params.set('categoria', categoria);
    }

    return this.http.get<Paginacao<Noticia>>(`${this.apiUrl}/buscar`, { params });
  }

  /**
   * Processa os feeds RSS e armazena as notícias no backend.
   * @returns Observable com a resposta do backend
   */
  processarFeeds(): Observable<any> {
    return this.http.post(`${this.apiUrl}/processar-rss`, null);
  }

  /**
   * Adiciona um novo feed RSS com as categorias associadas.
   * @param url URL do feed RSS
   * @param categorias Categorias associadas ao feed
   * @returns Observable para acompanhar a resposta do backend
   */
  adicionarFeedRSS(url: string, categorias: string): Observable<any> {
    const body = {
      url: url,
      categorias: categorias.split(',').map((categoria) => categoria.trim()), // Converte categorias para um array
    };
    return this.http.post(`${this.apiUrl}/adicionar-feed`, body);
  }
}
