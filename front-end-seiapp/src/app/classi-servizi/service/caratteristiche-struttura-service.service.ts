import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CaratteristicheStruttura } from '../classes/caratteristiche-struttura';

@Injectable({
  providedIn: 'root'
})
export class CaratteristicheStrutturaServiceService {

  url: string

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  public getStrutturaDalleCaratteristiche(): Observable<CaratteristicheStruttura[]> {
    return this.http.get<CaratteristicheStruttura[]>(this.url + "caratteristicheStruttura")
  }
}
