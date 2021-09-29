import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';
import { RecomendacaoListaComponent } from './recomendacao-lista/recomendacao-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    RecomendacaoInserirComponent,
    RecomendacaoListaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
