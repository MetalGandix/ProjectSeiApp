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
  selectedIntervento: number

  selezionaIntervento() {
    this.interventi.forEach(z => {
      this.elementoSelezionato.push(z)
    })
  }

  calcolaPrezzo(){
    this.interventi.forEach(z => {
      z.totalePrezzo = z.valoreCifra * z.prezzo
      console.log("totale: ", z.totalePrezzo, z.valoreCifra)
    })
    //let risultato = await chiamataAsincrona()
  }

  onChangeInput(index: number) {
    this.selectedIntervento = 0
  }

  ngOnInit() {
    this.risultatoSelezione.interventiSelezionati.forEach(z => {
      this.interventi.push(z)
      console.log("interventi: ", this.interventi)
    })
    this.selezionaIntervento()
  }

}
