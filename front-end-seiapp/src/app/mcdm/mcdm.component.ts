import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ValutazionePunteggio } from '../classi-servizi/classes/valutazione-punteggio';

@Component({
  selector: 'app-mcdm',
  templateUrl: './mcdm.component.html',
  styleUrls: ['./mcdm.component.css']
})
export class McdmComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService,
    private serviceAssociazione: AssociazioneInterventoService
  ) {
  }

  result: boolean = false
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  struttura: Struttura[];
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative
  car: CaratteristicheQualitative[]
  totale: number[];
  modCos: number
  effic: number
  supInton: number
  supVis: number
  revers: number
  semplCant: number
  esigIngom: number
  carQual: number
  intervento: number
  strutturaAssociazione: number
  toggleSuperficie: boolean = true
  buttonIntervento: boolean = false
  valutazionePunteggio: ValutazionePunteggio[]
  a: boolean = false
  selectedElement1: any
  selectedElement2: any
  deltaPunteggioFinale: number
  vulClass: number;
  risk: String
  pam: String
  punteggio: number
  soglia: number
  emsType: Number

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.service.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    console.log(this.ponderazione)
    this.cambiaTotale()
    this.calcoloSoglia()
  }

  cambiaTotale(){
    this.variabileIntervento.forEach(t => {
      t.totale = []
      for(const i in t.varianti){
        this.modCos = t.modicitaDiCosto[i] * this.ponderazione[0]
        this.effic = t.efficacia[i] * this.ponderazione[1]
        this.supInton = this.toggleSuperficie ? t.supIntonacate[i] * this.ponderazione[2]: 0
        this.supVis = !this.toggleSuperficie ? t.supVista[i] * this.ponderazione[2]: 0
        this.revers = t.reversibilita[i] * this.ponderazione[3]
        this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
        this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
        t.totale.push(this.modCos + this.effic + this.supInton + this.supVis + this.revers + this.semplCant + this.esigIngom)
      }
      console.log("Totale: ",t.totale)
    })
  }

  calcoloSoglia(){
    if(this.emsType==3){
      this.soglia=50
    }
  
  if(this.emsType==5 && (this.punteggio >=30 && this.punteggio <=60)){
      this.soglia=30
    }else{
      this.soglia=60
    }
  
    if(this.emsType==6 && (this.punteggio >=30 && this.punteggio <=60)){
      this.soglia=30
    }else{
      this.soglia=60
    }

    if(this.emsType==7 && (this.punteggio >=30 && this.punteggio <=60)){
      this.soglia=30
    }else{
      this.soglia=60
    }
}

  deltaPunteggio1(x: number){
    console.log(x)
    this.selectedElement1 = x
  }

  deltaPunteggio2(y: number){
    console.log(y)
    this.selectedElement2 = y
  }

  risultatoDelta(){
    this.deltaPunteggioFinale = this.selectedElement1 - this.selectedElement2
    this.a = true
  }  

  premiBottone(){
    this.buttonIntervento = true
  }
}