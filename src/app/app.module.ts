import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginatorModule } from 'primeng/paginator';
import { PagePesquisaComponent } from './pages/PagePesquisa/PagePesquisa.component';
import { PageLoginComponent } from './pages/PageLogin/PageLogin.component';
import { PageResultadoComponent } from './pages/PageResultado/PageResultado.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
import { LoginComponent } from './components/login/login.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { AdicionarFeedComponent } from './components/adicionarFeed/adicionarFeed.component';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { PageAdicionarFeedComponent } from './pages/PageAdicionarFeed/PageAdicionarFeed.component';


@NgModule({
  declarations: [	
    AppComponent,
      PesquisaComponent,
      ResultadoComponent,
      PagePesquisaComponent,
      PageLoginComponent,
      PageResultadoComponent,
      SidebarComponent,
      LoginComponent,
      AdicionarFeedComponent,
      LoginComponent,
      PageAdicionarFeedComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    AppRoutingModule,
    PaginatorModule,
    DropdownModule,
    BrowserAnimationsModule, 
    SidebarModule,
    ButtonModule,
    TabViewModule,
    InputTextModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
