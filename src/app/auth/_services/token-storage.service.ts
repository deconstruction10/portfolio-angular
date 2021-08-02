import { Injectable } from '@angular/core';
import {Auth} from "../auth";
import {Observable, of, Subject} from "rxjs";
import {ajaxPost} from "rxjs/internal-compatibility";
import {map} from "rxjs/operators";

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }


}
