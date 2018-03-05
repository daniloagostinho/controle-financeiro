import { Component, OnInit } from '@angular/core';

import { Cadastro } from './../models/cadastro';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  titulo = 'Cadastro de usuário';

  sucesso: boolean;
  convertida;
  cadastros = new Cadastro('carlos', 'carlos@gmail.com', 'calorsilva', 'digite sua senha');

  constructor() {

  }


  cadastrarUsuario(form: NgForm) {
    this.convertida = JSON.stringify(form.value);
    this.cadastros = this.convertida;

    if(this.convertida) {
      console.log('cadastrado com sucesso!!');
      localStorage.setItem("respostas", this.convertida);
    }else {
      console.log('erro ao salvar no localstora!!');
    }

  }

  ngOnInit() {
    console.log(this.convertida);
    console.log('valor cadastro agora: ', this.cadastros )
  }

  enviar(evento: Event) {
    this.sucesso = true;
    evento.preventDefault();
  }

  debug(): string {
    return JSON.stringify(this.cadastros);
  }

}
