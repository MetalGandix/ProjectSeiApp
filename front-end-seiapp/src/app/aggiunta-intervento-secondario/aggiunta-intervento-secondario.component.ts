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
import { RisultatoSelezioneService } from '../classi-servizi/service/risultato-selezione.service';

@Component({
  selector: 'app-aggiunta-intervento-secondario',
  templateUrl: './aggiunta-intervento-secondario.component.html',
  styleUrls: ['./aggiunta-intervento-secondario.component.css']
})
export class AggiuntaInterventoSecondarioComponent implements OnInit {



  constructor(
    private risultatoSelezione: RisultatoSelezioneService,
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
  deltaPunteggioFinale: number = 0
  deltaPunteggioPrecedente: number
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
  idCaratteristica: number
  punteggioPassaggioClasse: number
  interventoTabella: string
  interventoSelezionato: AssociazioneIntervento | null = null
  punteggioDiVul: number
  punteggioPassaggioClasseAggiornato: number
  idStruttura: number
  contatoreVolte: number
  caratteristicheSelezionabili: CaratteristicheQualitative[] = []

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
    this.deltaPunteggioPrecedente = window.history.state.deltaPunteggioFinale
    this.punteggioDiVul = window.history.state.punteggioDiVul
    this.punteggioPassaggioClasseAggiornato = window.history.state.punteggioPassaggioClasseAggiornato
    this.contatoreVolte = window.history.state.contatoreVolte
    console.log("Contatore: ",this.contatoreVolte)
    this.strutturaService.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    this.emsService.getTipoEdificio().subscribe(data => {
      this.caratteristicheSelezionabili = []
      this.emsCar = data
      for (let caratteristica of this.emsCar[this.emsType - 1].carQualEms) {
        if(!this.risultatoSelezione.checkCaratteristica(caratteristica.id)){
          this.caratteristicheSelezionabili.push(caratteristica)
        }
      }
    })
    console.log(this.strutturaService.test)
  }

  deltaPunteggio1(x: number) {
    console.log(x)
    this.interventoSelezionato.ante = x
  }

  deltaPunteggio2(y: number) {
    console.log(y)
    this.interventoSelezionato.post = y
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.deltaPunteggioFinale += this.interventoSelezionato.ante - this.interventoSelezionato.post
    this.a = true
    debugger
  }

  selezionaCaratteristica(strCaratteristica: string) {
    let idCaratteristica = parseInt(strCaratteristica)
    this.strutturaService.getStruttureByCaratteristiche(idCaratteristica).subscribe(car => {
      this.strutturaObj = car
      this.selezionaInterventiByCaratteristicaAndStruttura(this.strutturaObj[0].id)
    })
    this.idCaratteristica = idCaratteristica
    //this.selectedElement.push(this.strutturaObj[this.idCaratteristica])
  }

  selezionaInterventiByCaratteristicaAndStruttura(idStruttura: number) {
    this.idStruttura = idStruttura
    this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.idCaratteristica, this.idStruttura).subscribe(z => {
      this.interventiSecondari = z
    })
  }

  onChangeIntervento(indexIntervento: number) {
    this.interventoSelezionato = this.interventiSecondari[indexIntervento]
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

  trasferisciOggetti() {
    this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche)
    this.router.navigate(['/matrice'], {
      state: {
        emsType: this.emsType
        , caratteristiche: this.caratteristiche
        , vulClass: this.vulClass
        , punteggio: this.punteggio
        , risk: this.risk
        , pam: this.pam
        , variabileIntervento: this.variabileIntervento
        , interventoSelezionato: this.interventoSelezionato
        , idCaratteristica: this.idCaratteristica
        , idStruttura: this.idStruttura
        , contatoreVolte: this.contatoreVolte
        , interventiSecondari: this.interventiSecondari
      }
    })
  }
  /*
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
  /*this.buttonIntervento = true
  if(selezionato.varianti.length === 0){
    this.variabileIntervento.splice(index, 1)
  }
  this.massimoNumero()
  this.counterClickCheck + 1
}else{

}
}*/

}