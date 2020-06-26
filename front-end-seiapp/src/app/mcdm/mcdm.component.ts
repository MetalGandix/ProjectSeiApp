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

  flag: boolean = false
  ponderazione: number[] = [0, 0, 0, 0, 0, 0]
  struttura: Struttura[];
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative[]
  totale: number[];

    ngOnInit() {
      this.ponderazione = window.history.state.ponderazione;
      console.log(this.ponderazione)
      this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
        this.variabileIntervento = data;
      })
    }

    metodoMoltiplicazionePesi(){
      this.ponderazione = window.history.state.ponderazione;
      console.log(this.ponderazione)
      this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
        this.variabileIntervento = data;
      })
      this.variabileIntervento.forEach(t =>{
        t.modicitaDiCosto = t.modicitaDiCosto * this.ponderazione[0]
        t.efficacia = t.efficacia * this.ponderazione[1]
        t.supIntonacate = t.supIntonacate * this.ponderazione[2]
        t.supVista = t.supVista * this.ponderazione[2]
        t.reversibilita = t.reversibilita * this.ponderazione[3]
        t.semplicitaDiCantiere = t.semplicitaDiCantiere * this.ponderazione[4]
        t.esiguitaDiIngombro = t.esiguitaDiIngombro * this.ponderazione[5]
        t.totale = t.modicitaDiCosto + t.efficacia + t.supIntonacate + t.supVista + t.reversibilita + t.semplicitaDiCantiere + t.esiguitaDiIngombro
        })
        this.flag = true
    }
}

