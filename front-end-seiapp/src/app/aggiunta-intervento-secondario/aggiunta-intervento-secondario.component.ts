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

  deltaPunteggioFinale: number
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
  selectedElement = []

  ngOnInit() {
    this.caratteristicheStrutturaService.getStrutturaDalleCaratteristiche().subscribe(caratteristicheStrutture => {
      this.carStrutt = caratteristicheStrutture
      console.log(caratteristicheStrutture)
    })
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

  selezionaCaratteristica(index: string){
    this.strutturaService.getStruttureByCaratteristiche(index).subscribe(car => {
      this.strutturaObj = car
    })
    this.selectedElement = []
  }

  selezionaInterventiByCaratteristica(index: string){
    this.serviceAssociazione.getInterventoByCaratteristica(index).subscribe(z => {
      this.variabileIntervento = z
    })
  }
}