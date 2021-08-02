import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Auth} from "../auth";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:3000/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  //
  // resetPassword(user: Auth): Observable<Auth> {
  //   return this.http.post('', {
  //     user
  //   })
  //}

  // login(id: Auth, username: Auth, email: Auth, password: Auth) {
  //   return this.http.post(AUTH_API + 'signin', {
  //     id,
  //     username,
  //     email,
  //     password
  //   }, httpOptions)
  // }
}
