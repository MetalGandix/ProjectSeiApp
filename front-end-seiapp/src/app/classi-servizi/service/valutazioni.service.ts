import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValutazioniClass } from '../classes/valutazioni-class';

@Injectable({
  providedIn: 'root'
})
export class ValutazioniService {

  url: String;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/'
   }

   public getValutazione(): Observable<ValutazioniClass[]>{
     return this.http.get<ValutazioniClass[]>(this.url + 'valutazioni');
   }

   public postValutazione(valutazione: ValutazioniClass){
     return this.http.post<ValutazioniClass>(this.url + 'valutazioni', valutazione);
   }


}
