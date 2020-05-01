import { Component, OnInit } from '@angular/core';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { StrutturaVerticale } from '../classi-servizi/classes/struttura-verticale';
import { ActivatedRoute, Router } from '@angular/router';
import { StrutturaVerticaleService } from '../classi-servizi/service/struttura-verticale.service';

@Component({
  selector: 'app-aggiungi-intervento',
  templateUrl: './aggiungi-intervento.component.html',
  styleUrls: ['./aggiungi-intervento.component.css']
})
export class AggiungiInterventoComponent {

  caratteristicaQualitativa: CaratteristicheQualitative;
  strutturaVerticale: StrutturaVerticale;
  showMsg1: boolean = false;
  showMsg2: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servizio: StrutturaVerticaleService) {
    this.caratteristicaQualitativa = new CaratteristicheQualitative();
    this.strutturaVerticale = new StrutturaVerticale();
  }

  onSubmitStrutturaVerticale() {
    this.servizio.saveStrutturaVerticale(this.strutturaVerticale).subscribe(data => {
      this.showMsg1 = true;
        })
  }

  onSubmitCaratteristicaQualitativa(){
    this.servizio.saveCaratteristicaQualitativa(this.caratteristicaQualitativa).subscribe(data => {
      this.showMsg2 = true;
      })
  }

}
