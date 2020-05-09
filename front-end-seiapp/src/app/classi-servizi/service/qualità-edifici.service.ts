import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { EdificioSingolo } from 'src/app/classi-servizi/classes/edificio-singolo';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';


@Injectable({
  providedIn: 'root'
})
export class QualitàEdificiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getQEdificio(): Observable<EdificioInAggregato[]>{
    return this.http.get<EdificioInAggregato[]>(this.url + 'edificio');
  }
}
