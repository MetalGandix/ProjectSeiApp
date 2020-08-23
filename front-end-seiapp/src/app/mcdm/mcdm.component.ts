import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ValutazionePunteggio } from '../classi-servizi/classes/valutazione-punteggio';
import { RisultatoSelezioneService } from '../classi-servizi/service/risultato-selezione.service';

@Component({
  selector: 'app-mcdm',
  templateUrl: './mcdm.component.html',
  styleUrls: ['./mcdm.component.css']
})

export class McdmComponent {

  constructor(
    private risultatoSelezione: RisultatoSelezioneService,
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
  deltaPunteggioFinale: number = 0
  vulClass: number;
  risk: String
  pam: String
  punteggio: number
  soglia: number
  emsType: Number
  arraySelezionati: AssociazioneIntervento[] = []
  selectedElement: AssociazioneIntervento
  counterClickCheck: number = 0
  punteggioPassaggioClasse: number
  punteggioDiVul: number = 0
  punteggioPassaggioClasseAggiornato: number = 0
  contatoreVolte: number
  interventoSingolo: number
  bottoneVisibile: boolean = false
  bottoneVisibile1: boolean = false
  

  ngOnInit() {
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.pam = window.history.state.pam;
    this.caratteristiche = window.history.state.caratteristiche
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.contatoreVolte = window.history.state.contatoreVolte
    this.service.getCaratteristicheQualitative().subscribe(data => {
      this.car = data
    })
    console.log(this.ponderazione)
    this.cambiaTotale()
    this.calcoloSoglia()
    this.massimoNumero()
    this.sogliaUgualeZero()
  }

  sogliaUgualeZero() {
    this.punteggioPassaggioClasse = this.punteggio - this.soglia    
  }

  cambiaTotale() {
    this.variabileIntervento.forEach(t => {
      t.totale = []
      for (const i in t.varianti) {
        this.modCos = t.modicitaDiCosto[i] * this.ponderazione[0]
        this.effic = t.efficacia[i] * this.ponderazione[1]
        this.supInton = this.toggleSuperficie ? t.supIntonacate[i] * this.ponderazione[2] : 0
        this.supVis = !this.toggleSuperficie ? t.supVista[i] * this.ponderazione[2] : 0
        this.revers = t.reversibilita[i] * this.ponderazione[3]
        this.semplCant = t.semplicitaDiCantiere[i] * this.ponderazione[4]
        this.esigIngom = t.esiguitaDiIngombro[i] * this.ponderazione[5]
        t.totale.push(this.modCos + this.effic + this.supInton + this.supVis + this.revers + this.semplCant + this.esigIngom)
      }
      console.log("Totale: ", t.totale)
    })
  }

  calcoloSoglia() {
    if (this.emsType == 3) {
      this.soglia = 50
    }
    else if (this.emsType == 5 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 5 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
    else if (this.emsType == 6 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 6 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
    else if (this.emsType == 7 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } 
    else if (this.emsType == 7 && (this.punteggio < 30 || this.punteggio > 60)){
      this.soglia = 60
    }
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    let maxIndex: number
    let maxIntervento: AssociazioneIntervento
    let minIntervento: AssociazioneIntervento
    let minIndex: number
    this.variabileIntervento.forEach(interventi => {
      for (let index in interventi.varianti) {
        if (interventi.totale[index] >= max) {
          max = interventi.totale[index]
          maxIntervento = interventi
          maxIndex = parseInt(index)
        }
        if (interventi.totale[index] < min) {
          min = interventi.totale[index]
          minIntervento = interventi
          minIndex = parseInt(index)
        }
      }
    })
    maxIntervento.maxVariante = maxIndex
    minIntervento.minVariante = minIndex
  }

  aggiuntaInterventoSecondario() {
    console.log("Interventi nell'Array: ",this.arraySelezionati)
    this.router.navigate(['/aggiunta-intervento-secondario'], {
      state: {
        soglia: this.soglia
        , punteggioPassaggioClasse: this.punteggioPassaggioClasse
        , emsType: this.emsType
        , vulClass: this.vulClass
        , punteggio: this.punteggio
        , risk: this.risk
        , pam: this.pam
        , variabileIntervento: this.variabileIntervento
        , caratteristiche: this.caratteristiche
        , deltaPunteggioFinale: this.deltaPunteggioFinale
        , punteggioPassaggioClasseAggiornato: this.punteggioPassaggioClasseAggiornato
        , punteggioDiVul: this.punteggioDiVul
        , contatoreVolte: this.contatoreVolte
        , interventoSingolo: this.interventoSingolo
      }
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

  interventoSingoloRisultato(){
    this.interventoSingolo = this.selectedElement.ante - this.selectedElement.post
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.arraySelezionati.forEach(selezionato => {
      this.deltaPunteggioFinale += selezionato.ante - selezionato.post
    })
    this.punteggioDiVul = this.punteggio - this.deltaPunteggioFinale
    this.punteggioPassaggioClasseAggiornato = this.punteggioPassaggioClasse - this.deltaPunteggioFinale
    this.a = true
    this.bottoneVisibile = true
  }

  premiBottone(selezionato: AssociazioneIntervento, variante: number, index: number, checkBox: boolean) {
    if (!checkBox) {
      let indexToRemove = -1
      for (let index in this.arraySelezionati) {
        let current = this.arraySelezionati[index]
        if (current.caratteristicaAssociazioneIntervento.id === selezionato.caratteristicaAssociazioneIntervento.id && current.strutturaAssociazione.id === selezionato.strutturaAssociazione.id && current.intervento.id === selezionato.intervento.id) {
          indexToRemove = parseInt(index)
          break
        }
      }
      this.arraySelezionati.splice(indexToRemove, 1)
    } else {
      const nuovo = Object.assign({}, selezionato)
      nuovo.ante = 0
      nuovo.post = 0
      this.selectedElement = nuovo
      this.arraySelezionati.push(nuovo)
      this.buttonIntervento = true
      if (selezionato.varianti.length === 0) {
        this.variabileIntervento.splice(index, 1)
      }
      this.massimoNumero()
    }
    this.interventoSingoloRisultato()
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

  trasferisciClasseDiRischio(){
    this.router.navigate(['/riepilogo-costi'], {
      state: {
        risk: this.risk,
        soglia: this.soglia,
        sommaPacchettoInterventi: this.interventoSingolo
      }
    })
  }

}