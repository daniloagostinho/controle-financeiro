import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
