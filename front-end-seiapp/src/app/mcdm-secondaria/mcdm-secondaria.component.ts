import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ValutazionePunteggio } from '../classi-servizi/classes/valutazione-punteggio';
import { RisultatoSelezioneService } from '../classi-servizi/service/risultato-selezione.service';
import { Intervento } from '../classi-servizi/classes/intervento';

@Component({
  selector: 'app-mcdm-secondaria',
  templateUrl: './mcdm-secondaria.component.html',
  styleUrls: ['./mcdm-secondaria.component.css']
})
export class McdmSecondariaComponent implements OnInit {

  constructor(
    private risultatoSelezione: RisultatoSelezioneService,
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService,
    private serviceAssociazione: AssociazioneInterventoService
  ) {
  }

  result: boolean = false
  interventiDaMostrare: AssociazioneIntervento[] = []
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  struttura: Struttura[];
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative
  car: CaratteristicheQualitative[] = []
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
  idCaratteristica: number
  idStruttura: number
  contatoreVolte: number
  interventoSingolo: number
  interventiSecondari: AssociazioneIntervento[];
  arrayDiNumeriIntervento: number[] = []
  sommaPacchettoInterventi: number

  ngOnInit() {
    this.interventoSingolo = window.history.state.interventoSingolo
    this.emsType = window.history.state.emsType
    this.vulClass = window.history.state.vulClass;
    this.punteggio = window.history.state.punteggio;
    this.risk = window.history.state.risk;
    this.contatoreVolte = window.history.state.contatoreVolte
    console.log("Contatore: ", this.contatoreVolte)
    this.pam = window.history.state.pam;
    this.variabileIntervento = window.history.state.variabileIntervento
    this.ponderazione = window.history.state.ponderazione;
    this.idCaratteristica = window.history.state.idCaratteristica
    this.idStruttura = window.history.state.idStruttura
    this.risultatoSelezione.interventiSelezionati.forEach(z => {
      this.interventiDaMostrare.push(z)
      console.log("interventi: ", this.interventiDaMostrare)
    })
    this.service.getCaratteristicheQualitative().subscribe(x => {
      this.car = x
      for(let caratteristicaDellArray of this.car){
        if(caratteristicaDellArray.id === this.idCaratteristica){
         this.caratteristiche = caratteristicaDellArray
        }
      }
    })
    this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.idCaratteristica, this.idStruttura).subscribe(z => {
        this.interventiSecondari = this.serviceAssociazione.interventGrouping(z)
        this.cambiaTotale()
        this.massimoNumero()
    })
    this.calcoloSoglia()
    this.sogliaUgualeZero()
  }

  /*selezionaInterventiByCaratteristicaAndStruttura() {
    this.serviceAssociazione.getInterventoByCaratteristicaAndStruttura(this.idCaratteristica, this.idStruttura).subscribe(z => {
      this.interventiSecondari = z
    })
    console.log("interventi: ", this.interventiSecondari)
  }*/

  sogliaUgualeZero() {
    this.punteggioPassaggioClasse = this.punteggio - this.soglia
  }

  cambiaTotale() {
    this.interventiSecondari.forEach(t => {
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

  aggiuntaInterventoSecondario() {
    this.risultatoSelezione.aggiungiCaratteristica(this.caratteristiche)
    this.router.navigate(['/aggiunta-intervento-secondario'], {
      state: {
        soglia: this.soglia
        , interventoSingolo: this.interventoSingolo
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
      }
    })
  }

  calcoloParziale(index: number){
    this.sommaPacchettoInterventi = this.deltaPunteggioFinale
    for(let i=0; i<=index; i++){
      this.sommaPacchettoInterventi += this.interventiDaMostrare[i].ante - this.interventiDaMostrare[i].post
    }
    return this.sommaPacchettoInterventi
  }

  risultatoDelta() {
    this.deltaPunteggioFinale = 0
    this.arraySelezionati.forEach(selezionato => {
      this.deltaPunteggioFinale += selezionato.ante - selezionato.post
    })
    this.punteggioDiVul = this.punteggio - this.deltaPunteggioFinale
    this.punteggioPassaggioClasseAggiornato = this.punteggioPassaggioClasse
    this.a = true
  }

  cambioClasse(){
    /*if(this.sommaPacchettoInterventi < this.punteggioPassaggioClasse){
    }else{
      alert("Hai cambiato classe! Yeee")
    }*/
  }

  massimoNumero() {
    let min = Infinity
    let max = 0
    let maxIntervento: AssociazioneIntervento
    let minIntervento: AssociazioneIntervento
    let maxIndex: number
    let minIndex: number
    this.interventiSecondari.forEach(interventi => {
      for (let index in interventi.varianti) {
        if (interventi.totale[index] > max) {
          max = interventi.totale[index]
          maxIntervento = interventi
          maxIndex = parseInt(index)
        } if (interventi.totale[index] < min) {
          min = interventi.totale[index]
          minIntervento = interventi
          minIndex = parseInt(index)
        }
      }
    })
    maxIntervento.maxVariante = maxIndex
    minIntervento.minVariante = minIndex
  }

  deltaPunteggio1(x: number) {
    console.log(x)
    this.selectedElement.ante = x
  }

  deltaPunteggio2(y: number) {
    console.log(y)
    this.selectedElement.post = y
  }

  calcoloSoglia() {
    if (this.emsType == 3) {
      this.soglia = 50
    }
    if (this.emsType == 5 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } else {
      this.soglia = 60
    }

    if (this.emsType == 6 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } else {
      this.soglia = 60
    }

    if (this.emsType == 7 && (this.punteggio >= 30 && this.punteggio <= 60)) {
      this.soglia = 30
    } else {
      this.soglia = 60
    }
  }

  interventoSingoloRisultato(){
        this.interventoSingolo = this.selectedElement.ante - this.selectedElement.post
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
        this.interventiSecondari.splice(index, 1)
      }
      this.massimoNumero()
    }
    this.interventoSingoloRisultato()
    this.risultatoSelezione.aggiungiIntervento(this.arraySelezionati[0])
  }

}
