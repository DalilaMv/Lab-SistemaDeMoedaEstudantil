import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPessoaComponent } from './form-pessoa/form-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmpresaComponent } from './form-empresa/form-empresa.component';
import { EmpresaComponent } from './empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent,
    FormPessoaComponent,
    FormEmpresaComponent,
    EmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
