import { Component, OnInit } from '@angular/core';
import { Noticia, PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent  {
  termoBusca: string = ''; // Alterado para "termoBusca" para ser mais claro
  noticias: Noticia[] = []; // Armazena as notícias retornadas pela busca

  constructor(private pesquisaService: PesquisaService) {}

  // Método chamado ao pressionar Enter na barra de busca
  buscarNoticias(): void {
    if (this.termoBusca) {
      this.pesquisaService.buscarNoticias(this.termoBusca).subscribe(
        (data: Noticia[]) => {
          this.noticias = data;
        },
        (error) => {
          console.error("Erro ao buscar notícias", error);
        }
      );
    }
  }
}  
