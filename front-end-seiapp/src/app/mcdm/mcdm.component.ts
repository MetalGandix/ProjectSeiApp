import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { Intervento } from '../classi-servizi/classes/intervento';
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

  ngOnInit() {
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    //this.service.getValutazionePunteggio().subscribe(data => {
    //  this.valutazionePunteggio = data
    //})
    console.log(this.ponderazione)
    this.cambiaTotale()
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

  premiBottone(){
    this.buttonIntervento = true
  }
}