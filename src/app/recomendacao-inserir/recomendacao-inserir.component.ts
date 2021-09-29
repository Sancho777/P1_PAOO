import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent{

  @Output() recomendacaoInserida = new EventEmitter();
  onRecomendacaoInserida(texto) {
    const recomendacao = {recomendacao:texto}
  this.recomendacaoInserida.emit(recomendacao);
 }


}
