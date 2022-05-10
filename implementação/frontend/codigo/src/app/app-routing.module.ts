import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { PessoaComponent } from './pessoa/pessoa.component';

const routes: Routes = [];

const appRoutes: Routes = [
  {
    path: '',
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
