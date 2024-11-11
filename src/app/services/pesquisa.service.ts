import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para representar uma notícia
export interface Noticia {
  id: string;
  titulo: string;
  link: string;
  descricao: string;
  dataPublicacao: string;
  faviconUrl: string;
  sourceUrl: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root',
})
export class PesquisaService {
  private readonly apiUrl = 'http://localhost:8080/noticias/noticiasC'; // Altere para o endpoint do backend

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

    return this.http.get<Noticia[]>(this.apiUrl, { params });
  }

  /**
   * Adiciona um novo feed RSS com as categorias associadas.
   * @param rssUrl URL do feed RSS
   * @param categorias Categorias associadas ao feed
   * @returns Observable para acompanhar a resposta do backend
   */

}
