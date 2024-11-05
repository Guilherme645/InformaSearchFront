/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PesquisaService } from './pesquisa.service';

describe('Service: Pesquisa', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PesquisaService]
    });
  });

  it('should ...', inject([PesquisaService], (service: PesquisaService) => {
    expect(service).toBeTruthy();
  }));
});
