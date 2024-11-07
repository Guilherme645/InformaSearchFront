import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ResultadoComponent } from './components/pesquisa/resultado/resultado.component';

const routes: Routes = [
  { path: '', component: PesquisaComponent },
  { path: 'resultados', component: ResultadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
