import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrutturaVerticale } from './struttura-verticale';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StrutturaVerticaleService {

  verticaleUrl: string

  constructor(private http: HttpClient) {
    this.verticaleUrl = 'http://localhost:8080/';
  }

  public getStrutturaVerticale():Observable<StrutturaVerticale[]>{
    return this.http.get<StrutturaVerticale[]>(this.verticaleUrl + "strutturaVerticale");
  }
}
