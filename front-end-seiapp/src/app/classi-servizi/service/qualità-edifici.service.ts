import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { EdificioSingolo } from 'src/app/classi-servizi/classes/edificio-singolo';
import { EdificioInAggregato } from 'src/app/classi-servizi/classes/edificio-in-aggregato';
import { EdificioInaggregatoComponent } from 'src/app/edificio/edificio-inaggregato/edificio-inaggregato.component';


@Injectable({
  providedIn: 'root'
})
export class QualitàEdificiService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://46.101.192.240:8080/';
  }

  public getQEdificio(): Observable<EdificioInAggregato[]>{
    return this.http.get<EdificioInAggregato[]>(this.url + 'edificio');
  }

  //public getEmpType(): Observable<EdificioInaggregatoComponent[]>{
  //  return this.http.get<EdificioInaggregatoComponent[]>()
  //}
}
