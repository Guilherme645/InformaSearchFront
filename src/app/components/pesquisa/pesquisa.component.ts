import { PesquisaService } from 'src/app/services/pesquisa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
})
export class PesquisaComponent implements OnInit {
  termoBusca: string = '';
  categoriaSelecionada: string = '';
  categorias: string[] = [];

  constructor(private router: Router, private PesquisaService: PesquisaService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.PesquisaService.getCategorias().subscribe(
      (response) => {
        this.categorias = response;
      },
      (error) => {
        console.error('Erro ao carregar categorias:', error);
      }
    );
  }

  buscarNoticias(): void {
    if (this.termoBusca || this.categoriaSelecionada) {
      this.router.navigate(['/resultados'], {
        queryParams: {
          termo: this.termoBusca,
          categoria: this.categoriaSelecionada,
          page: 0,
          pageSize: 7,
        },
      });
    }
  }
}
