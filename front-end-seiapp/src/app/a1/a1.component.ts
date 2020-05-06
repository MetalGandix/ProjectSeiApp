import { Component, OnInit } from '@angular/core';
import { InterventoA1 } from '../classi-servizi/classes/intervento-a1';
import { InterventiService } from '../classi-servizi/service/interventi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  interventoA1: InterventoA1[]

  constructor(
    private interventoa1Service: InterventiService,
    private route: ActivatedRoute,
    private router: Router) 
    {     }

  ngOnInit() {
    this.interventoa1Service.getA1().subscribe(data =>{
      this.interventoA1 = data;
    })
  }

}
