import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para representar a estrutura da notícia
export interface Noticia {
  titulo: string;
  link: string;
  descricao: string;
  dataPublicacao: string;
}

@Injectable({
  providedIn: 'root'
})
export class PesquisaService {
  private apiUrl = 'http://localhost:8080/noticias'; // URL do backend

  constructor(private http: HttpClient) { }

  // Método para obter as notícias do dia
  getNoticiasDoDia(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.apiUrl}/hoje`);
  }

  // Método para buscar notícias por termo
  buscarNoticias(termo: string): Observable<Noticia[]> {
    const params = new HttpParams().set('termo', termo); // Define o parâmetro de busca
    return this.http.get<Noticia[]>(`${this.apiUrl}/buscar`, { params });
  }
}
