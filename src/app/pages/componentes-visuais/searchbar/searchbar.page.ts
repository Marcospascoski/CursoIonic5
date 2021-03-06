import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  nome: string = '';
  pessoas: any;
  pessoasFiltradas: any;

  constructor() {
    this.pessoas = [
      { id: 1, idade: 13, nome: "Marcos" },
      { id: 2, idade: 17, nome: "Luciana" },
      { id: 3, idade: 55, nome: "Ana Vitória" },
      { id: 4, idade: 22, nome: "Marcos Pascoski" },
      { id: 5, idade: 33, nome: "Rogério Marques" },
      { id: 6, idade: 11, nome: "Agatha" },
      { id: 7, idade: 12, nome: "Natalia" },
      { id: 8, idade: 13, nome: "Maria Pascoski" },
      { id: 9, idade: 14, nome: "Ana" },
    ];

    this.pessoasFiltradas = this.pessoas;
  }

  ngOnInit() {
  }

  filtrarItens(event) {
    this.nome = event.target.value.toLowerCase();

    this.pessoasFiltradas = this.filtrarPessoas(this.nome);
  }

  filtrarPessoas(nome) {
    this.pessoasFiltradas = this.pessoas;

    return this.pessoasFiltradas.filter((item) => {
      return item.nome.toLowerCase().includes(nome.toLowerCase());
    });
  }

}
