import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private readonly apiUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  /**
   * Realiza o login do usuário.
   * @param username Nome de usuário
   * @param password Senha do usuário
   * @returns Observable com a resposta do backend
   */
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}