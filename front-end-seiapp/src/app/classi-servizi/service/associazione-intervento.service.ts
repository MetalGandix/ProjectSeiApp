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

  public interventGrouping(data: AssociazioneIntervento[]){
    const result = []
    const raggruppamento = {}
    for (const value of data) {
      const idIntervento = value.intervento.id
      const idCaratteristica = value.caratteristicaAssociazioneIntervento.id
      const idStruttura = value.strutturaAssociazione.id
      const key = idIntervento + "_" + idCaratteristica + "_" + idStruttura
      if (!raggruppamento[key]) {
        raggruppamento[key] = {
          ...value,
          varianti: [],
          modicitaDiCosto: [],
          reversibilita: [],
          semplicitaDiCantiere: [],
          supIntonacate: [],
          supVista: [],
          esiguitaDiIngombro: [],
          efficacia: []
        }
      }
      raggruppamento[key].varianti.push(value.variante)
      raggruppamento[key].modicitaDiCosto.push(value.modicitaDiCosto)
      raggruppamento[key].reversibilita.push(value.reversibilita)
      raggruppamento[key].semplicitaDiCantiere.push(value.semplicitaDiCantiere)
      raggruppamento[key].supIntonacate.push(value.supIntonacate)
      raggruppamento[key].supVista.push(value.supVista)
      raggruppamento[key].esiguitaDiIngombro.push(value.esiguitaDiIngombro)
      raggruppamento[key].efficacia.push(value.efficacia)
    }
    for (const key in raggruppamento) {
      result.push(raggruppamento[key])
    }
    return result
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
