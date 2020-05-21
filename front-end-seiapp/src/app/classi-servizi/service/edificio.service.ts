import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoEdificio } from '../classes/tipo-edificio';
import { map } from'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer'
  })
};

@Injectable({
  providedIn: 'root'
})
export class EdificioService {

  edificioUrl: string

  constructor(private http: HttpClient) {
    this.edificioUrl = 'http://localhost:8080/'
   }

   public getTipoEdificio():Observable<TipoEdificio[]>{
     return this.http.get<TipoEdificio[]>(this.edificioUrl + 'tipologiaStruttura').pipe(map(data =>{
       const tipiEdificio: TipoEdificio[] = [];
       data.forEach(d => {
        const tipoEdificio = new TipoEdificio();
        tipoEdificio.id = d.id;
        tipoEdificio.tipologiaStrutture = d.tipologiaStrutture;
        tipoEdificio.abilitato = d.id == 2 || d.id == 4;
        tipiEdificio.push(tipoEdificio);
       });
       return tipiEdificio;
     }))
   }

}
