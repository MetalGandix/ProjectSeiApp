import { Injectable } from '@angular/core';
import { CaratteristicheQualitative } from '../classes/caratteristiche-qualitative';
import { Intervento } from '../classes/intervento';

@Injectable({
  providedIn: 'root'
})
export class RisultatoSelezioneService {

  constructor() { }

  caratteristicheSelezionate: CaratteristicheQualitative[] = []
  interventiSelezionati: Intervento[] = []
  
  public reset(){
    this.caratteristicheSelezionate = []
    this.interventiSelezionati = []
  }

  public aggiungiCaratteristica(x: CaratteristicheQualitative){
    this.caratteristicheSelezionate.push(x)
  }

  public checkCaratteristica(id: number): boolean{
    for(let caratteristicaSelezionata of this.caratteristicheSelezionate){
      if(caratteristicaSelezionata.id === id){
        return true
      }
    }
    return false
  }

  public aggiungiIntervento(x: Intervento){
    this.interventiSelezionati.push(x)
  }
}
