import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  termo: string = '';
  noticias: Noticia[] = [];
  page: number = 0;
  pageSize: number = 7;
  totalPages: number = 0; // Total de páginas
  pageNumbers: number[] = []; // Números para navegação de página
  termoBusca: string = '';
  constructor(
    private route: ActivatedRoute,
    private pesquisaService: PesquisaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.termo = params['termo'];
      this.page = params['page'] ? +params['page'] : 0;
      this.pageSize = params['pageSize'] ? +params['pageSize'] : 7;
      if (this.termo) {
        this.buscarNoticias();
      }
    });
  }

  Noticias(): void {
    if (this.termoBusca) {
      this.router.navigate(['/resultados'], { queryParams: { termo: this.termoBusca, page: 0, pageSize: 7 } });
    }
  }

 buscarNoticias(): void {
    this.pesquisaService.buscarNoticias(this.termo, this.page, this.pageSize).subscribe(
      (data: Noticia[]) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Erro ao buscar notícias', error);
      }
    );
  }

  irParaPagina(pagina: number): void {
    this.page = pagina - 1;
    this.buscarNoticias();
  }
}
