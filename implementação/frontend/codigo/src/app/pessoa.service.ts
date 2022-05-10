import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
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
      curso: content.curso
    };

    return this.httpClient.post<any>(URL, body);
  }

  getAll() {
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/`;
    return this.httpClient.get<any>(URL);
  }
  update(content:any) {
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/` + content.id;
    const headers = new HttpHeaders();
    const body = content;

    return this.httpClient.patch<any>(URL, body, {headers});
  }
  remove(content:any) {
    const URL = `${environment.BASE_URL}/api/pessoa/alunos/` + content;
    return this.httpClient.delete<any>(URL);
  }
  getInstituicoes(){
    const URL = `${environment.BASE_URL}/api/instituicao/instituicao/`;
    return this.httpClient.get<any>(URL);
  }
}
