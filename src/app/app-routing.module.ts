import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { LoginComponent } from './components/login/login.component';
import { PageAdicionarFeedComponent } from './pages/PageAdicionarFeed/PageAdicionarFeed.component';

const routes: Routes = [
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'resultados', component: ResultadoComponent },
  { path: 'adicionar', component: PageAdicionarFeedComponent,},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'pesquisa', pathMatch: 'full' },
  { path: '**', redirectTo: 'pesquisa' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
