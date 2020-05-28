import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrutturaVerticale } from '../classes/strutture/struttura-verticale';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfissiEsterni } from '../classes/strutture/infissi-esterni';
import { StruttureInclinate } from '../classes/strutture/strutture-inclinate';
import { StruttureOrizzontali } from '../classes/strutture/strutture-orizzontali';
import { StruttureSpaziali } from '../classes/strutture/strutture-spaziali';
import { CaratteristicheQualitative } from '../classes/caratteristiche-qualitative';
import { Struttura } from '../classes/strutture/struttura';
import { TypeStruttura } from '../classes/strutture/type-struttura';



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

  public getCaratteristicheQualitative():Observable<CaratteristicheQualitative[]>{
    return this.http.get<CaratteristicheQualitative[]>(this.url + 'caratteristicheQualitative');
  }

  public getTypeStruttura():Observable<TypeStruttura[]>{
    return this.http.get<TypeStruttura[]>(this.url + 'typeStruttura');
  }
}