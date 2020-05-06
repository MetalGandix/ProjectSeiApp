import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InterventoA1 } from '../classes/intervento-a1';
import { InterventoA2 } from '../classes/intervento-a2';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InterventiService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/';
  }

  //Metodi per gli interventi a1
  public getA1(): Observable<InterventoA1[]>{
    return this.http.get<InterventoA1[]>(this.url + 'interventoA1');
  }
  public saveA1(interventoA1: InterventoA1){
    return this.http.post<InterventoA1>(this.url + 'interventoA1', interventoA1);
  }
  public deleteA1(id: number): Observable<{}> {
    const url =  `${this.url}/${id}`;
    return this.http.delete(url + 'interventoA1', httpOptions);
  }

  public updateA1(interventoA1: InterventoA1): Observable<InterventoA1> {
    const url = `${this.url}/${interventoA1.id}`;
    return this.http.put<InterventoA1>(url + 'interventoA1', interventoA1, httpOptions);
  }

  //Metodi per gli interventi a2
  public getA2(): Observable<InterventoA2[]>{
    return this.http.get<InterventoA2[]>(this.url + 'interventoA2');
  }
  public saveA2(interventoA2: InterventoA2){
    return this.http.post<InterventoA2>(this.url + 'interventoA2', interventoA2);
  }
  public deleteA2(id: number): Observable<{}> {
    const url =  `${this.url}/${id}`;
    return this.http.delete(url + 'interventoA2', httpOptions);
  }
  public updateA2(interventoA2: InterventoA2): Observable<InterventoA2> {
    const url = `${this.url}/${interventoA2.id}`;
    return this.http.put<InterventoA2>(url + 'interventoA2', interventoA2, httpOptions);
  }
  
}
