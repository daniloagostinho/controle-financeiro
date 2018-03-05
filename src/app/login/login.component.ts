import { NgForm } from '@angular/forms';
import { Component, OnInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  titulo = "Faça seu login";
  getRespostas;
  respostaObjeto;
  keys;
  message;
  pegarValores;

  constructor() {
    this.getRespostas = JSON.parse(localStorage.getItem("respostas"));
    console.log(this.getRespostas);

    if (this.hasChaveLocalStorage("respostas")) {
      this.keys = Object.keys(this.getRespostas).map(key => key);
    } else {
      this.message = "Não existe resposta";
    }

    console.log(this.hasChaveLocalStorage("respostas"));
    console.log(this.hasChaveLocalStorage("teste"));
  }

  public hasChaveLocalStorage(key: string): boolean {
    return !!localStorage.getItem(key)
  }

  ngAfterViewInit() { 
  }

  loginUsuario(form: NgForm) {

    this.pegarValores = JSON.stringify(form.value);

    if(this.pegarValores) {
      console.log('cadastrado com sucesso!!');
      localStorage.getItem("respostas");
    }else {
      console.log('erro ao salvar no localstora!!');
    }

  }

  ngOnInit() {
    console.log('pegando valores', this.pegarValores);
  }

}
