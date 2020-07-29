import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociazioneIntervento } from '../classes/associazione-intervento';
import { Intervento } from '../classes/intervento';

@Injectable({
  providedIn: 'root'
})
export class AssociazioneInterventoService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getAssociazioneIntervento(): Observable<AssociazioneIntervento[]> {
    return this.http.get<AssociazioneIntervento[]>(this.url + "associazioneIntervento")
  }

  public getInterventoByCaratteristicaAndStruttura(carQualId: number, strutturaId: number): Observable<AssociazioneIntervento[]>{
    return this.http.get<AssociazioneIntervento[]>(this.url + "getInterventoByCaratteristica", {
      params: {
        carQual: `${carQualId}`,
        struttura: `${strutturaId}`
      }
    })
  }

  public getInterventoSingolo(carQual: number, intervento: number, strutturaAssociazione: number): Observable<AssociazioneIntervento[]> {
    return this.http.get<AssociazioneIntervento[]>(this.url + "getInterventoSingolo", {
      params: {
        carQual: `${carQual}`,
        intervento: `${intervento}`,
        strutturaAssociazione: `${strutturaAssociazione}`
      }
    })
  }
}
