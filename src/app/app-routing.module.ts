import { Component401Component } from './component401/component401.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

import { RouterModule, Routes } from '@angular/router';
import { Component404Component } from './component404/component404.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: CadastroUsuariosComponent },
  { path: '404', component: Component404Component },
  { path: '401', component: Component401Component },
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
