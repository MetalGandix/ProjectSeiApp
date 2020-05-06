import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrutturaVerticale } from '../classes/struttura-verticale';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CaratteristicheQualitative } from '../classes/caratteristiche-qualitative';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})

//Classe dei metodi HTTP
export class StrutturaVerticaleService {

  //Attributi
  strutturaUrl: string
  caratteristicaQualitativaUrl: string
  url: string

  //Costruttore
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  //Metodi per la struttura verticale
  public getStrutturaVerticale():Observable<StrutturaVerticale[]>{
    return this.http.get<StrutturaVerticale[]>(this.url + 'strutturaVerticale'); 
  }
  public saveStrutturaVerticale(strutturaVerticale: StrutturaVerticale){
    return this.http.post<StrutturaVerticale>(this.url + 'strutturaVerticale', strutturaVerticale);
  }

  //Metodi per le caratteristiche qualitative
  public getCaratteristicheQualitative():Observable<CaratteristicheQualitative[]>{
    return this.http.get<CaratteristicheQualitative[]>(this.url + 'caratteristicheQualitative');
  }
  public saveCaratteristicaQualitativa(caratteristicheQualitativa: CaratteristicheQualitative){
    return this.http.post<CaratteristicheQualitative>(this.url + 'caratteristicheQualitative', caratteristicheQualitativa);
  }
 
}
