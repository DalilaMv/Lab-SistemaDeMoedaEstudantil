import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  token = localStorage.getItem('token');
  constructor(private httpClient: HttpClient) { }
  create(content: any) {
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/`;
    const body = {
      username: content.usuario,
      password: content.senha,
      nome: content.nome,
      rg: content.rg,
      cpf: content.cpf,
      instituicao: content.instituicao,
      curso: content.curso,
      email: content.email
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    return this.httpClient.post<any>(URL, body, {headers});
  }

  getAll() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/`;
    return this.httpClient.get<any>(URL, {headers});
  }
  update(content:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/` + content.id;
    const body = content;

    return this.httpClient.patch<any>(URL, body, {headers});
  }
  remove(content:any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/` + content;
    return this.httpClient.delete<any>(URL, {headers});
  }
  getInstituicoes(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/instituicao/instituicao/`;
    return this.httpClient.get<any>(URL, {headers});
  }
  updateSaldo(destinatario, tipo, saldo_d, saldo_rem){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/pessoas/update_saldo/`;
    const body = {
      destinatario: destinatario,
      tipo_destinatario: tipo,
      saldo_destinatario: saldo_d,
      saldo_remetente: saldo_rem
    };

    return this.httpClient.post<any>(URL, body, {headers});
  }
  getSaldo(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/pessoas/get_saldo/`;

    return this.httpClient.get<any>(URL, {headers});
  }
  updateExtrato(destinatario, tipo, valor){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/extrato/`;
    const body = {
      destinatario: destinatario,
		  destinatario_tipo:tipo,
		  valor_enviado: valor
    };

    return this.httpClient.post<any>(URL, body, {headers});
  }
  getExtrato(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/pessoa/extrato/`;

    return this.httpClient.get<any>(URL, {headers});
  }
}
