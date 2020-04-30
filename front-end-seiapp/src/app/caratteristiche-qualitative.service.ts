import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CaratteristicheQualitative } from './caratteristiche-qualitative';


@Injectable({
  providedIn: 'root'
})
export class CaratteristicheQualitativeService {

  caratteristicaUrl: string

  constructor(private http: HttpClient) {
    this.caratteristicaUrl = 'http://localhost:8080/';
  }

  public getCaratteristicheQualitative():Observable<CaratteristicheQualitative[]>{
    return this.http.get<CaratteristicheQualitative[]>(this.caratteristicaUrl + "caratteristicheQualitative");
  }
}
