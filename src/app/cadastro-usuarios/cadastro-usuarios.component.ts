import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {
  titulo = 'Cadastro de usuário';
  constructor() { }

  ngOnInit() {
  }

  escolheDados(dados) {
    switch(dados) {
      case 'Carlos':
      return 'purple'

      case 'Juliete':
      return 'red'
    }
  }

  dados: any[] = [
    {
      "name": "Juliete",
       "idade": 28
    },
    {
      "name": "Carlos",
       "idade": 18
    }
  ]

}
