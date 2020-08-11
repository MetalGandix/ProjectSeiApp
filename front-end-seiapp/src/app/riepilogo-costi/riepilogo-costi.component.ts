import { Component, OnInit } from '@angular/core';
import { RisultatoSelezioneService } from '../classi-servizi/service/risultato-selezione.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervento } from '../classi-servizi/classes/intervento';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';

@Component({
  selector: 'app-riepilogo-costi',
  templateUrl: './riepilogo-costi.component.html',
  styleUrls: ['./riepilogo-costi.component.css']
})
export class RiepilogoCostiComponent implements OnInit {

  constructor(
    private risultatoSelezione: RisultatoSelezioneService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  interventiDaMostrare: Intervento[] = []
  interventi: AssociazioneIntervento[] = []
  elementoSelezionato: AssociazioneIntervento[] = []
  prezzoSingoloIntervento: number[] = []
  totale: number
  risk: String
  soglia: number
  risultatoDivisione: number
  costoDiRiparazione: number
  sommaPacchettoInterventi: number
  valoreCosto: number
  numeroUtente: number
  costoRiparazione: number

  selezionaIntervento() {
    this.interventi.forEach(z => {
      this.elementoSelezionato.push(z)
    })
  }

  calcolaInvestimentoTotale(){
    this.totale = 0
    this.prezzoSingoloIntervento = []
    this.interventi.forEach(z => {
      z.totalePrezzo = z.valoreCifra * z.prezzo
      this.prezzoSingoloIntervento.push(z.totalePrezzo)
      console.log(this.prezzoSingoloIntervento)
    })
    this.prezzoSingoloIntervento.reduce((previous, next) => {
      console.log("totale", this.totale)
      return this.totale = previous + next;
  })
    this.risultatoDivisione = this.totale/this.soglia
  }

  ngOnInit() {
    this.sommaPacchettoInterventi = window.history.state.sommaPacchettoInterventi
    console.log("Pacchetto interventi somma: ", this.sommaPacchettoInterventi)
    this.soglia = window.history.state.soglia
    this.risk = window.history.state.risk;
    this.risultatoSelezione.interventiSelezionati.forEach(z => {
      this.interventi.push(z)
      console.log("interventi: ", this.interventi)
    })
    this.selezionaIntervento()
    console.log(this.dannoIpotizzato)
    this.calcolaCostoRiparazione()
  }

  dannoIpotizzato = [
    { id: 1, valore: "D0", costo: this.valoreCosto },
    { id: 2, valore: "D1", costo: this.valoreCosto },
    { id: 3, valore: "D2", costo: this.valoreCosto },
    { id: 4, valore: "D3", costo: this.valoreCosto },
    { id: 5, valore: "D4", costo: this.valoreCosto },
    { id: 6, valore: "D5", costo: this.valoreCosto }
  ]

  calcolaCostoRiparazione(){
    if(this.risk == "A+" || this.risk == "A" || this.risk == "B"){
      this.dannoIpotizzato[2].costo = 240
      this.dannoIpotizzato[3].costo = 840
      this.dannoIpotizzato[4].costo = 1200
      this.dannoIpotizzato[5].costo = 1200
    }
    if(this.risk == "F" || this.risk == "G"){
      this.dannoIpotizzato[0].costo = 840
      this.dannoIpotizzato[1].costo = 840
      this.dannoIpotizzato[2].costo = 1080
      this.dannoIpotizzato[3].costo = 1200
      this.dannoIpotizzato[4].costo = 1200
      this.dannoIpotizzato[5].costo = 1200
    }
    if(this.risk == "C"){
      this.dannoIpotizzato[0].costo = 240
      this.dannoIpotizzato[1].costo = 240
      this.dannoIpotizzato[2].costo = 600
      this.dannoIpotizzato[3].costo = 840
      this.dannoIpotizzato[4].costo = 1200
      this.dannoIpotizzato[5].costo = 1200
    }
    if(this.risk == "D" || this.risk == "E"){
      this.dannoIpotizzato[0].costo = 600
      this.dannoIpotizzato[1].costo = 600
      this.dannoIpotizzato[2].costo = 840
      this.dannoIpotizzato[3].costo = 1080
      this.dannoIpotizzato[4].costo = 1200
      this.dannoIpotizzato[5].costo = 1200
    }
  }

  onChangeDannoIpotizzato(i: number){
    this.costoDiRiparazione = 0
    console.log(i)
    console.log("numero utente: ",this.numeroUtente)
      this.costoRiparazione = this.dannoIpotizzato[i - 1].costo * this.numeroUtente
  }

  valoreCR(){

  }

}
