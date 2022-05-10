import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(private httpClient: HttpClient) { }
  create(content: any) {
    const URL = `${environment.BASE_URL}/api/empresa/empresas/`;
    const body = {
      username: content.usuario,
      password: content.senha,
      nome: content.nome,
      cnpj: content.cnpj,
    };

    return this.httpClient.post<any>(URL, body);
  }

  getAll() {
    const URL = `${environment.BASE_URL}/api/empresa/empresas/`;
    return this.httpClient.get<any>(URL);
  }
  update(content:any) {
    const URL = `${environment.BASE_URL}/api/empresa/empresas/` + content.id;
    const headers = new HttpHeaders();
    const body = content;

    return this.httpClient.patch<any>(URL, body, {headers});
  }
  remove(content:any) {
    const URL = `${environment.BASE_URL}/api/empresa/empresas/` + content;
    return this.httpClient.delete<any>(URL);
  }
}
