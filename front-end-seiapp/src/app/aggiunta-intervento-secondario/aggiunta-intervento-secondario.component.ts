import { Component, OnInit } from '@angular/core';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { EdificioInAggregato } from '../classi-servizi/classes/edificio-in-aggregato';
import { EdificioService } from '../classi-servizi/service/edificio.service';
import { TipoEdificio } from '../classi-servizi/classes/tipo-edificio';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { CaratteristicheStrutturaServiceService } from '../classi-servizi/service/caratteristiche-struttura-service.service';
import { CaratteristicheStruttura } from '../classi-servizi/classes/caratteristiche-struttura';
import { Intervento } from '../classi-servizi/classes/intervento';

@Component({
  selector: 'app-aggiunta-intervento-secondario',
  templateUrl: './aggiunta-intervento-secondario.component.html',
  styleUrls: ['./aggiunta-intervento-secondario.component.css']
})
export class AggiuntaInterventoSecondarioComponent implements OnInit {

  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private strutturaService: ElementiStrutturaService,
    private serviceAssociazione: AssociazioneInterventoService,
    private emsService: EdificioService,
    private caratteristicheStrutturaService: CaratteristicheStrutturaServiceService
  ) {
  }

  a: boolean;
  arraySelezionati: AssociazioneIntervento[] = []
  counterClickCheck: number;
  selectedIndex: number;
  deltaPunteggioFinale: number
  buttonIntervento: boolean = false
  vulClass: number;
  risk: String
  pam: String
  punteggio: number
  soglia: number
  emsType: number
  variabileIntervento: AssociazioneIntervento[] = []
  caratteristiche: CaratteristicheQualitative
  strutturaObj: Struttura[] = []
  car: CaratteristicheQualitative[]
  emsCar: TipoEdificio[] = []
  carStrutt: CaratteristicheStruttura[]
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  selectedElement1: any
  selectedElement2: any
  selectedElement: AssociazioneIntervento
  passaggioCaratteristica: string
  interventiSecondari: AssociazioneIntervento[] = []
  indexParam: number
  punteggioPassaggioClasse: number
  interventoTabella: string

  ngOnInit() {
    this.caratteristicheStrutturaService.getStrutturaDalleCaratteristiche().subscribe(caratteristicheStrutture => {
      this.carStrutt = caratteristicheStrutture
      console.log(caratteristicheStrutture)
    })
    this.soglia = window.history.state.soglia
    this.punteggioPassaggioClasse = window.history.state.punteggioPassaggioClasse
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.strutturaService.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    this.emsService.getTipoEdificio().subscribe(data => {
      this.emsCar = data
    })
  }

  deltaPunteggio1(x: number) {
    console.log(x)
    this.selectedElement.ante = x
  }

  deltaPunteggio2(y: number) {
    console.log(y)
    this.selectedElement.post = y
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.arraySelezionati.forEach(selezionato => {
      this.deltaPunteggioFinale += selezionato.ante - selezionato.post 
    })
    this.a = true
  }

  selezionaCaratteristica(indexCaratteristica: number){
    this.strutturaService.getStruttureByCaratteristiche(indexCaratteristica).subscribe(car => {
      this.strutturaObj = car
    })
    this.emsCar[this.emsType].carQualEms.id = indexCaratteristica
    this.indexParam = this.emsCar[this.emsType].carQualEms.id
    this.indexParam = indexCaratteristica
    //this.selectedElement.push(this.strutturaObj[this.indexParam])
  }

  selezionaInterventiByCaratteristicaAndStruttura(indexStruttura: number){
      this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.indexParam,indexStruttura).subscribe(z => {
        this.interventiSecondari = z
      })
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    let maxIndex: number
    let maxIntervento: AssociazioneIntervento
    this.variabileIntervento.forEach(interventi => {
      for (let index in interventi.varianti) {
        if (interventi.totale[index] > max) {
          max = interventi.totale[index]
          maxIntervento = interventi
          maxIndex = parseInt(index)
        }
      }
    })
    maxIntervento.maxVariante = maxIndex
  }

  premiBottone(selezionato: AssociazioneIntervento, variante: number, index: number) {
    if(this.counterClickCheck == 0){
    const nuovo = Object.assign({}, selezionato)
    nuovo.ante = 0
    nuovo.post = 0
    this.selectedElement = nuovo
    this.arraySelezionati.push(nuovo)
    //Rimuovo l'elemento dall'array
    /*selezionato.totale.splice(variante, 1);
    (selezionato.efficacia as number[]).splice(variante, 1);
    (selezionato.esiguitaDiIngombro as number[]).splice(variante, 1);
    (selezionato.modicitaDiCosto as number[]).splice(variante, 1);
    (selezionato.reversibilita as number[]).splice(variante, 1);
    (selezionato.semplicitaDiCantiere as number[]).splice(variante, 1);
    (selezionato.supIntonacate as number[]).splice(variante, 1);
    (selezionato.supVista as number[]).splice(variante, 1);
    selezionato.varianti.splice(variante, 1);*/
    this.buttonIntervento = true
    if(selezionato.varianti.length === 0){
      this.variabileIntervento.splice(index, 1)
    }
    this.massimoNumero()
    this.counterClickCheck + 1
  }else{

  }
  }

}