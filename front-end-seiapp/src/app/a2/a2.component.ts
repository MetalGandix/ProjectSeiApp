import { Component, OnInit } from '@angular/core';
import { InterventoA2 } from '../classi-servizi/classes/intervento-a2';
import { InterventiService } from '../classi-servizi/service/interventi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  interventoA2: InterventoA2[];

  constructor(
    private interventoa2Service: InterventiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.interventoa2Service.getA2().subscribe(data =>{
      this.interventoA2 = data;
    })
  }

}
