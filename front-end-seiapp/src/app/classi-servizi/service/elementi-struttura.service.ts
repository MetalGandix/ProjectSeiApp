import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CaratteristicheQualitative } from '../classes/caratteristiche-qualitative';
import { Struttura } from '../classes/strutture/struttura';
import { TypeStruttura } from '../classes/strutture/type-struttura';
import { ValutazionePunteggio } from '../classes/valutazione-punteggio';



@Injectable({
  providedIn: 'root'
})
export class ElementiStrutturaService {

  url: string

  //Costruttore
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getStruttura():Observable<Struttura[]>{
    return this.http.get<Struttura[]>(this.url + 'struttura');
  }

  public getStruttureByCaratteristiche(carQualId: string): Observable<Struttura[]>{
    return this.http.get<Struttura[]>(this.url + "getStrutturaCaratteristica", {
      params: {
        carQual: carQualId
      }
    })
  }
  

  public getCaratteristicheQualitative():Observable<CaratteristicheQualitative[]>{
    return this.http.get<CaratteristicheQualitative[]>(this.url + 'caratteristicheQualitative');
  }

  public getValutazionePunteggio():Observable<ValutazionePunteggio[]>{
    return this.http.get<ValutazionePunteggio[]>(this.url + 'valutazionePunteggio')
  }

  public getTypeStruttura():Observable<TypeStruttura[]>{
    return this.http.get<TypeStruttura[]>(this.url + 'typeStruttura');
  }
}