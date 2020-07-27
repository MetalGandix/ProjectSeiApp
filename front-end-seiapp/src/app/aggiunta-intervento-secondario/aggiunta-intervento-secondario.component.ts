import { Component, OnInit } from '@angular/core';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';

@Component({
  selector: 'app-aggiunta-intervento-secondario',
  templateUrl: './aggiunta-intervento-secondario.component.html',
  styleUrls: ['./aggiunta-intervento-secondario.component.css']
})
export class AggiuntaInterventoSecondarioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService,
    private serviceAssociazione: AssociazioneInterventoService
  ) {
  }

  deltaPunteggioFinale: number
  vulClass: number;
  risk: String
  pam: String
  punteggio: number
  soglia: number
  emsType: Number
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative
  car: CaratteristicheQualitative[]
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]

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
  }
}