import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    // {
    //   conteudo: 'Passo informaçoes para o coneudo componete',
    //   autoria: 'angular',
    //   modelo: 'modelo3'
    // },
    // {
    //   conteudo: 'Passo informaçoes para o coneudo componetecdlmd',
    //   autoria: 'angular',
    //   modelo: 'modelo3'
    // },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
