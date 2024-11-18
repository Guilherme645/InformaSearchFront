import { Component } from '@angular/core';
import { PesquisaService } from 'src/app/services/pesquisa.service';

@Component({
  selector: 'app-adicionar-feed',
  templateUrl: './adicionarFeed.component.html',
  styleUrls: ['./adicionarFeed.component.css'],
})
export class AdicionarFeedComponent {
  form = {
    nome: '',
    urlId: '',
    descricao: '',
    tipoIndexacao: null,
    modelo: null,
  };

  tipoIndexacaoOptions = [
    { label: 'Indexação A', value: 'A' },
    { label: 'Indexação B', value: 'B' },
    { label: 'Indexação C', value: 'C' },
  ];

  modeloOptions = [
    { label: 'Modelo X', value: 'X' },
    { label: 'Modelo Y', value: 'Y' },
    { label: 'Modelo Z', value: 'Z' },
  ];
}