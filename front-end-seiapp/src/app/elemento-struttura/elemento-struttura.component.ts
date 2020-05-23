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
  verticale: StrutturaVerticale;
  strutturaInclinata: StruttureInclinate[];
  strutturaOrizzontale: StruttureOrizzontali[];
  strutturaSpaziale: StruttureSpaziali[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService
  ) {

  }
  
  arrayStruttura = [
    { id: 1, name: "Struttura verticale" },
    { id: 2, name: "Struttura orizzontale" },
    { id: 3, name: "Struttura ad elevazioni inclinate" },
    { id: 4, name: "Strutture di elevazione spaziali" },
    { id: 5, name: "Infissi esterni verticali" },
    { id: 6, name: "Elementi non strutturali" },
  ];

  

  onChange(struttura: number){
    this.arrayStruttura.find(t => t.id == struttura)
    console.log(struttura)
    if(struttura == 1){
      this.service.getStrutturaVerticale().subscribe(data => {
        this.strutturaVerticale = data;
        })
    }
    else if(struttura == 2){
      this.service.getStrutturaInclinata().subscribe(data => {
        this.strutturaInclinata = data;
      })
    }
    else if(struttura == 3){
      this.service.getStruttureOrizzontali().subscribe(data => {
        this.strutturaOrizzontale = data;
      })
    }
    else if(struttura == 4){
      this.service.getStrutturaSpaziale().subscribe(data => {
        this.strutturaSpaziale = data;
      })
    }
    else if(struttura == 5){
      this.service.getInfissiEsterni().subscribe(data => {
        this.infissiEsterni = data;
      })
    }
  }


  ngOnInit() {
  }

}
