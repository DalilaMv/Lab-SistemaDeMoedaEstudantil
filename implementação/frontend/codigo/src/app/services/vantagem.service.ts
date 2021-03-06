import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VantagemService {
  token = localStorage.getItem('token');
  constructor(private httpClient: HttpClient) { }
  create(titulo: any, descricao:any, img: any, preco): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/empresa/vantagens/`;
    const body = {
      titulo,
      descricao,
      img,
      preco
    };

    return this.httpClient.post<any>(URL, body, {headers});
  }
  getAll(): any {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/empresa/vantagens/`;
    return this.httpClient.get<any>(URL, {headers});
  }

  buyVantage(novoSaldo: any, empresaId: any, valor, vantagemId): any{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    const body = {
      novo_saldo: novoSaldo,
      empresa: empresaId,
      valor_enviado: valor,
      vantagem: vantagemId
    };
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/get_vantagem/`;
    return this.httpClient.post<any>(URL, body, {headers});
  }
}
