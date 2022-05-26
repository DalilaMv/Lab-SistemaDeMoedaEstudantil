import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  login(user: any, password: any) {
    // const URL = `${environment.BASE_URL}/admin/login/?next=/admin/`;
    const URL = `${environment.BASE_URL}/api/login/`;
    const body = { 
      username: user, 
      password: password,
      // csrfmiddlewaretoken: "GySCRyBzmyA5pVnOM1zNYMdqqdxFHSa7EcPY8VbHQewo9TATh6zKGqZLCdPYweDj"
    }

    return this.httpClient.post<any>(URL, body);
  }
}