import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AV1';
  recomendacoes = []
  onRecomendacaoInserida(recomendacao){
    this.recomendacoes = [recomendacao, ...this.recomendacoes]
  }
}
