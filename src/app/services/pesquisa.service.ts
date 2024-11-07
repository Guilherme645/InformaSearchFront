// pesquisa.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost:8080/noticias';

  constructor(private http: HttpClient) {}

  buscarNoticias(termo: string, page: number, pageSize: number): Observable<Noticia[]> {
    const params = new HttpParams()
      .set('termo', termo)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<Noticia[]>(`${this.apiUrl}/buscar`, { params });
  }
}
