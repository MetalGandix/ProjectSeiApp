import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { AssociazioneInterventoService } from '../classi-servizi/service/associazione-intervento.service';
import { AssociazioneIntervento } from '../classi-servizi/classes/associazione-intervento';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { Intervento } from '../classi-servizi/classes/intervento';

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
  caratteristiche: CaratteristicheQualitative[]
  totale: number[];
  modCos: number
  effic: number
  supInton: number
  supVis: number
  revers: number
  semplCant: number
  esigIngom: number

  ngOnInit() {
    this.ponderazione = window.history.state.ponderazione;
    console.log(this.ponderazione)
    this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
      this.variabileIntervento = data;
      this.variabileIntervento.forEach(t => {
        this.modCos = t.modicitaDiCosto * this.ponderazione[0]
        this.effic = t.efficacia * this.ponderazione[1]
        this.supInton = t.supIntonacate * this.ponderazione[2]
        this.supVis = t.supVista * this.ponderazione[2]
        this.revers = t.reversibilita * this.ponderazione[3]
        this.semplCant = t.semplicitaDiCantiere * this.ponderazione[4]
        this.esigIngom = t.esiguitaDiIngombro * this.ponderazione[5]
        t.totale = this.modCos + this.effic + this.supInton + this.supVis + this.revers + this.semplCant + this.esigIngom
      })
    }) 
  }
}