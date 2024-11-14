import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia, PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  termo: string = ''; // Termo da busca atual
  categoria: string | null = null; // Categoria selecionada
  noticias: Noticia[] = []; // Lista de notícias
  page: number = 0; // Página atual
  pageSize: number = 7; // Tamanho da página
  totalItems: number = 0; // Total de itens (para paginação)
  totalPages: number = 0; // Total de páginas
  pageNumbers: number[] = []; // Números de páginas para navegação
  termoBusca: string = ''; // Termo para nova busca

  constructor(
    private route: ActivatedRoute,
    private pesquisaService: PesquisaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Recupera os parâmetros da URL para inicializar a busca
    this.route.queryParams.subscribe((params) => {
      this.termo = params['termo'] || '';
      this.categoria = params['categoria'] || null;
      this.page = params['page'] ? +params['page'] : 0;
      this.pageSize = params['pageSize'] ? +params['pageSize'] : 7;

      if (this.termo || this.categoria) {
        this.buscarNoticias();
      }
    });
  }

  /**
   * Limpa as tags <img> do conteúdo da notícia.
   * @param descricao A descrição da notícia com tags <img>
   * @returns A descrição sem as tags <img>
   */
  limparTagsImg(descricao: string): string {
    // Usando expressão regular para remover todas as tags <img> e <br>
    return descricao.replace(/<img[^>]*>/g, '').replace(/<br\s*\/?>/g, '');
  }

  /**
   * Busca notícias com os parâmetros atuais.
   */
  buscarNoticias(): void {
    this.pesquisaService.buscarNoticias(this.termo, this.categoria, this.page, this.pageSize).subscribe(
      (response) => {
        // Limpa as tags <img> em todas as notícias
        this.noticias = response.map((noticia) => ({
          ...noticia,
          description: this.limparTagsImg(noticia.description), // Limpa a descrição de cada notícia
        }));
        this.totalItems = response.length > 0 ? 50 : 0; // Exemplo para backend
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      (error) => {
        console.error('Erro ao buscar notícias', error);
      }
    );
  }

  /**
   * Realiza uma nova pesquisa com o termo fornecido.
   */
  pesquisarNovamente(): void {
    if (this.termoBusca) {
      this.router.navigate(['/resultados'], {
        queryParams: { termo: this.termoBusca, page: 0, pageSize: this.pageSize },
      });
    }
  }

  /**
   * Navega para uma página específica.
   * @param pagina Número da página a ser carregada.
   */
  irParaPagina(pagina: number): void {
    this.page = pagina - 1; // Ajusta para zero-based
    this.router.navigate(['/resultados'], {
      queryParams: { termo: this.termo, categoria: this.categoria, page: this.page, pageSize: this.pageSize },
    });
  }
}
