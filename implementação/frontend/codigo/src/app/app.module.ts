import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormPessoaComponent } from './forms/form-pessoa/form-pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmpresaComponent } from './forms/form-empresa/form-empresa.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { SaldoComponent } from './shared/saldo/saldo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtratoComponent } from './extrato/extrato.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { EnviarMoedaComponent } from './enviar-moeda/enviar-moeda.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './forms/login/login.component';
import { VantagemComponent } from './vantagem/vantagem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent,
    FormPessoaComponent,
    FormEmpresaComponent,
    EmpresaComponent,
    SaldoComponent,
    ExtratoComponent,
    BeneficiosComponent,
    EnviarMoedaComponent,
    LoginComponent,
    VantagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
