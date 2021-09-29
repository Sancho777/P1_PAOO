import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recomendacao-listar',
  templateUrl: './recomendacao-lista.component.html',
  styleUrls: ['./recomendacao-lista.component.css']
})
export class RecomendacaoListaComponent{
  @Input() recomendacao
  constructor() { }

  ngOnInit(): void {
  }

}
