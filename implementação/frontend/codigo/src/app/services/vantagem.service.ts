import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VantagemService {
  token = localStorage.getItem('token');
  constructor(private httpClient: HttpClient) { }
  create(titulo: any, descricao:any, img: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    const URL = `${environment.BASE_URL}/api/empresa/vantagens/`;
    const body = {
      titulo,
      descricao,
      img
    };

    return this.httpClient.post<any>(URL, body, {headers});
  }
  getAll() {
    const URL = `${environment.BASE_URL}/api/empresa/vantagens/`;
    return this.httpClient.get<any>(URL);
  }
}
