import { Component, OnInit } from '@angular/core';
import { InterventoA2 } from '../classi-servizi/classes/intervento-a2';
import { InterventiService } from '../classi-servizi/service/interventi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InterventoA1 } from '../classi-servizi/classes/intervento-a1';

@Component({
  selector: 'app-modifica-intervento',
  templateUrl: './modifica-intervento.component.html',
  styleUrls: ['./modifica-intervento.component.css']
})
export class ModificaInterventoComponent implements OnInit {

  interventoA2: InterventoA2[];
  interventoA1: InterventoA1[];

  constructor(
    private interventoService: InterventiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(){
    this.interventoService.getA1().subscribe(data =>{
      this.interventoA1 = data;
    })
    this.interventoService.getA2().subscribe(data =>{
      this.interventoA2 = data;
    })
  }

}
