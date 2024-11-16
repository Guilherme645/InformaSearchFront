import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  termo: string = ''; // Termo da busca
  categoria: string | null = null; // Categoria da busca
  noticias: Noticia[] = []; // Lista de notícias
  page: number = 0; // Página atual
  pageSize: number = 7; // Tamanho da página
  totalItems: number = 0; // Total de itens (para paginação)
  totalPages: number = 0; // Total de páginas
  pageNumbers: number[] = []; // Números de páginas para navegação

  constructor(
    private route: ActivatedRoute,
    private pesquisaService: PesquisaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Obtém parâmetros de consulta para a busca
    this.route.queryParams.subscribe((params) => {
      this.termo = params['termo'] || '';
      this.categoria = params['categoria'] || null;
      this.page = params['page'] ? +params['page'] : 0;
      this.pageSize = params['pageSize'] ? +params['pageSize'] : 10;

      // Realiza a busca inicial
      if (this.termo || this.categoria) {
        this.buscarNoticias();
      }
    });
  }

  /**
   * Busca as notícias a partir dos parâmetros.
   */
  buscarNoticias(): void {
    this.pesquisaService.buscarNoticias(this.termo, this.categoria, this.page, this.pageSize).subscribe(
      (response) => {
        // Limpa as tags <img> e <br> de cada descrição
        this.noticias = response.content.map((noticia) => ({
          ...noticia,
          description: this.limparTagsImg(noticia.description),
        }));
        this.totalItems = response.totalElements;
        this.totalPages = response.totalPages;
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      (error) => {
        console.error('Erro ao buscar notícias:', error);
      }
    );
  }

  /**
   * Limpa as tags <img> do conteúdo da notícia.
   * @param descricao A descrição da notícia com tags <img>
   * @returns A descrição sem as tags <img> e <br>
   */
  limparTagsImg(descricao: string): string {
    // Usando expressão regular para remover todas as tags <img> e <br>
    return descricao.replace(/<img[^>]*>/g, '').replace(/<br\s*\/?>/g, '');
  }

  /**
   * Realiza uma nova busca com o termo fornecido.
   */
  pesquisarNovamente(): void {
    if (this.termo) {
      this.router.navigate(['/resultados'], {
        queryParams: { termo: this.termo, page: 0, pageSize: this.pageSize },
      });
    }
  }

  /**
   * Navega para uma página específica.
   * @param pagina Número da página a ser exibida.
   */
  irParaPagina(pagina: number): void {
    this.page = pagina - 1;
    this.router.navigate(['/resultados'], {
      queryParams: { termo: this.termo, categoria: this.categoria, page: this.page, pageSize: this.pageSize },
    });
  }
}
