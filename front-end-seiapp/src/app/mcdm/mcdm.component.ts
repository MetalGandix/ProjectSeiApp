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

  struttura: Struttura[];
  variabileIntervento: AssociazioneIntervento[];
  caratteristiche: CaratteristicheQualitative[]

    ngOnInit() {
      this.serviceAssociazione.getAssociazioneIntervento().subscribe(data => {
        this.variabileIntervento = data;
        console.log(this.variabileIntervento)
      })
    }
}

