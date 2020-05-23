import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrutturaVerticale } from '../classes/strutture/struttura-verticale';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfissiEsterni } from '../classes/strutture/infissi-esterni';
import { StruttureInclinate } from '../classes/strutture/strutture-inclinate';
import { StruttureOrizzontali } from '../classes/strutture/strutture-orizzontali';
import { StruttureSpaziali } from '../classes/strutture/strutture-spaziali';



@Injectable({
  providedIn: 'root'
})
export class ElementiStrutturaService {

  url: string

  //Costruttore
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getInfissiEsterni():Observable<InfissiEsterni[]>{
    return this.http.get<InfissiEsterni[]>(this.url + 'infissiEsterniVerticali');
  }

  public getStrutturaVerticale():Observable<StrutturaVerticale[]>{
    return this.http.get<StrutturaVerticale[]>(this.url + 'strutturaVerticale'); 
  }

  public getStrutturaInclinata():Observable<StruttureInclinate[]>{
    return this.http.get<StruttureInclinate[]>(this.url + 'strutturaInclinata');
  }

  public getStruttureOrizzontali():Observable<StruttureOrizzontali[]>{
    return this.http.get<StruttureOrizzontali[]>(this.url + 'strutturaOrizzontale');
  }

  public getStrutturaSpaziale():Observable<StruttureSpaziali[]>{
    return this.http.get<StruttureSpaziali[]>(this.url + 'strutturaSpaziale');
  }
}