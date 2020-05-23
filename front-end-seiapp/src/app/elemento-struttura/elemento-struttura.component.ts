import { Component, OnInit } from '@angular/core';
import { InfissiEsterni } from '../classi-servizi/classes/strutture/infissi-esterni';
import { StruttureOrizzontali } from '../classi-servizi/classes/strutture/strutture-orizzontali';
import { StruttureSpaziali } from '../classi-servizi/classes/strutture/strutture-spaziali';
import { StruttureInclinate } from '../classi-servizi/classes/strutture/strutture-inclinate';
import { StrutturaVerticale } from '../classi-servizi/classes/strutture/struttura-verticale';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';

@Component({
  selector: 'app-elemento-struttura',
  templateUrl: './elemento-struttura.component.html',
  styleUrls: ['./elemento-struttura.component.css']
})
export class ElementoStrutturaComponent implements OnInit {

  infissiEsterni: InfissiEsterni[];
  strutturaVerticale: StrutturaVerticale[];
  strutturaInclinata: StruttureInclinate[];
  strutturaOrizzontale: StruttureOrizzontali[];
  strutturaSpaziale: StruttureSpaziali[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService
  ) {

  }

  ngOnInit() {
    this.service.getInfissiEsterni().subscribe(data => {
      this.infissiEsterni = data;
    })
    this.service.getStrutturaInclinata().subscribe(data => {
      this.strutturaInclinata = data;
    })
    this.service.getStrutturaSpaziale().subscribe(data => {
      this.strutturaSpaziale = data;
    })
    this.service.getStrutturaVerticale().subscribe(data => {
      this.strutturaVerticale = data;
    })
    this.service.getStruttureOrizzontali().subscribe(data => {
      this.strutturaOrizzontale = data;
    })
  }

}
