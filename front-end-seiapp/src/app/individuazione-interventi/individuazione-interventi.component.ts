import { Component, OnInit } from '@angular/core';
import { StrutturaVerticaleService } from '../struttura-verticale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StrutturaVerticale } from '../struttura-verticale';


@Component({
  selector: 'app-individuazione-interventi',
  templateUrl: './individuazione-interventi.component.html',
  styleUrls: ['./individuazione-interventi.component.css']
})
export class IndividuazioneInterventiComponent implements OnInit {

  struttura: StrutturaVerticale;
  verticale: StrutturaVerticale[];

  constructor(private strutturaVerticaleService: StrutturaVerticaleService,
              private route: ActivatedRoute,
              private router: Router) {
              this.struttura = new StrutturaVerticale();
               }

  ngOnInit() {
    this.strutturaVerticaleService.getStrutturaVerticale().subscribe(data=>{
      this.verticale = data;
    })
  }

}
