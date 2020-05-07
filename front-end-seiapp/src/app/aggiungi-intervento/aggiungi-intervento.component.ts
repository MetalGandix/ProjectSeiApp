import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterventoA1 } from '../classi-servizi/classes/intervento-a1';
import { InterventoA2 } from '../classi-servizi/classes/intervento-a2';
import { InterventiService } from '../classi-servizi/service/interventi.service';

@Component({
  selector: 'app-aggiungi-intervento',
  templateUrl: './aggiungi-intervento.component.html',
  styleUrls: ['./aggiungi-intervento.component.css']
})
export class AggiungiInterventoComponent {

  interventoA1: InterventoA1;
  interventoA2: InterventoA2;
  showMsg1: boolean = false;
  showMsg2: boolean = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private interventoService: InterventiService) {
    this.interventoA1 = new InterventoA1();
    this.interventoA2 = new InterventoA2();
  }

  onSubmitA1() {
    this.interventoService.saveA1(this.interventoA1).subscribe(data => {
      this.showMsg1 = true;
        })
  }

  onSubmitA2(){
    this.interventoService.saveA2(this.interventoA2).subscribe(data => {
      this.showMsg2 = true;
      })
  }

}
