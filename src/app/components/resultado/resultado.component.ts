import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  termo: string = '';
  categoria: string | null = null;
  noticias: Noticia[] = [];
  page: number = 0;
  pageSize: number = 7;
  totalItems: number = 0;

  constructor(
    private route: ActivatedRoute,
    private pesquisaService: PesquisaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.termo = params['termo'] || '';
      this.categoria = params['categoria'] || null;
      this.page = params['page'] ? +params['page'] : 0;
      this.pageSize = params['pageSize'] ? +params['pageSize'] : 10;

      this.buscarNoticias();
    });
  }

  pesquisarNovamente(): void {
    if (this.termo) {
      this.router.navigate(['/resultados'], {
        queryParams: { termo: this.termo, page: 0, pageSize: this.pageSize },
      });
    }
  }

  buscarNoticias(): void {
    this.pesquisaService
      .buscarNoticias(this.termo, this.categoria, this.page, this.pageSize)
      .subscribe((response) => {
        this.noticias = response.content;
        this.totalItems = response.totalElements;
      });
  }

  /**
   * Atualiza os parâmetros de busca ao trocar de página.
   * @param event Evento disparado pelo <p-paginator>.
   */
  onPageChange(event: any): void {
    this.page = event.page;
    this.pageSize = event.rows;
    this.router.navigate(['/resultados'], {
      queryParams: {
        termo: this.termo,
        categoria: this.categoria,
        page: this.page,
        pageSize: this.pageSize,
      },
    });
  }
}
