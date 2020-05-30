import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssociazioneIntervento } from '../classes/associazione-intervento';

@Injectable({
  providedIn: 'root'
})
export class AssociazioneInterventoService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getAssociazioneIntervento(): Observable<AssociazioneIntervento[]>{
    return this.http.get<AssociazioneIntervento[]>(this.url + "associazioneIntervento")
  }
}
