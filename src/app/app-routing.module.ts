import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CadastroUsuariosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ] ,
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
