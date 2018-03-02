import { Component, OnInit } from '@angular/core';

import { Cadastro } from './../models/cadastro';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  titulo = 'Cadastro de usuário';

  sucesso: boolean;

  cadastros = new Cadastro('carlos', 'carlos@gmail.com', 'calorsilva', 'digite sua senha');

  enviado = false;

  onSubmit() { this.enviado = true; }

  clickMessage  = '';
  valor = '';

  constructor() {  

   }

   get diagnostic() { return JSON.stringify(this.cadastros); }

   onClickMe(event: Event): void {
     this.clickMessage  = 'dadsadsa';
     event.preventDefault();
   }

   textoDigitado(valor: string) {
    this.valor = valor;
   }

  ngOnInit() {
    console.log(this.cadastros);
  }

  enviar(evento: Event) {
    this.sucesso = true;
    evento.preventDefault();
  }

  debug(): string {
    return JSON.stringify(this.cadastros);
  }


}
