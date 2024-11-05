import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';


const routes: Routes = [
  { path: '', redirectTo: '/pesquisa', pathMatch: 'full' }, 
  { path: 'pesquisa', component: PesquisaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
