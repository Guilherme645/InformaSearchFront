import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: PesquisaComponent },
  { path: 'resultados', component: ResultadoComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
