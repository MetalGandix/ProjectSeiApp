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
  interventoa1: InterventoA1;
  interventoa2: InterventoA2;
  showMsg1: boolean = false;
  showMsg2: boolean = false;


  constructor(
    private interventoService: InterventiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.interventoa1 = new InterventoA1();
    this.interventoa2 = new InterventoA2();
   }

  aggiornaInterventoA1(interventoa1: InterventoA1){
    console.log(interventoa1);
    this.interventoService
    .updateA1(interventoa1)
    .subscribe(()=>{
      this.showMsg1=true;
    },err=>{
      console.log(err)
    })
  }

  aggiornaInterventoA2(interventoa2: InterventoA2){
    console.log(interventoa2);
    this.interventoService
    .updateA2(interventoa2)
    .subscribe(()=>{
      this.showMsg2=true;
    },err=>{
      console.log(err)
    })
  }

  ngOnInit(){
    this.interventoService.getA1().subscribe(data =>{
      this.interventoA1 = data;
    })
    this.interventoService.getA2().subscribe(data =>{
      this.interventoA2 = data;
    })
  }

}
