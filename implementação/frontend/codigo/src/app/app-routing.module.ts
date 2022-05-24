import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormEmpresaComponent } from './forms/form-empresa/form-empresa.component';
import { FormPessoaComponent } from './forms/form-pessoa/form-pessoa.component';
import { LoginComponent } from './forms/login/login.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { SaldoComponent } from './shared/saldo/saldo.component';
import { VantagemComponent } from './vantagem/vantagem.component';

const routes: Routes = [];

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'pessoa',
    component: PessoaComponent,
  },
  {
    path: 'pessoa/criar',
    component: FormPessoaComponent
  },
  {
    path: 'empresa',
    component: EmpresaComponent,
  },
  {
    path: 'empresa/criar',
    component: FormEmpresaComponent
  },
  {
    path: 'home',
    component: SaldoComponent
  },
  {
    path: 'cadastro/vantagem',
    component: VantagemComponent
  }
];


@NgModule({
imports: [
  RouterModule.forRoot(appRoutes),
],
exports: [
  RouterModule
]
})
export class AppRoutingModule { }
