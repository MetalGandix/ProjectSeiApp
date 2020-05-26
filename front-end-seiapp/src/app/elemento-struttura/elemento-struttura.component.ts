import { Component, OnInit, ViewChild } from '@angular/core';
import { InfissiEsterni } from '../classi-servizi/classes/strutture/infissi-esterni';
import { StruttureOrizzontali } from '../classi-servizi/classes/strutture/strutture-orizzontali';
import { StruttureSpaziali } from '../classi-servizi/classes/strutture/strutture-spaziali';
import { StruttureInclinate } from '../classi-servizi/classes/strutture/strutture-inclinate';
import { StrutturaVerticale } from '../classi-servizi/classes/strutture/struttura-verticale';
import { ActivatedRoute, Router } from '@angular/router';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { Subscription } from 'rxjs';
import { NgModel } from '@angular/forms';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';

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
  selectedElement = [];
  caratteristiche: CaratteristicheQualitative[];
  subscriptionsToDelete: Subscription = new Subscription();

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

  onChangeSecondo(index: number){
    this.selectedElement.find(x => x == index).map(x => x.number)
    console.log(index)
    this.service.getCaratteristicheQualitative().subscribe(data => {
      this.caratteristiche = data.slice(0,2);
    })
  }

  onChange(struttura: number) {
    this.arrayStruttura.find(t => t.id == struttura)
    console.log("id:" , struttura)
    if (struttura == 1) {
      this.service.getStrutturaVerticale().subscribe(data => {
        this.strutturaVerticale = data;
        this.selectedElement.push(this.strutturaVerticale)
        this.selectedElement.forEach(t => {
          this.selectedElement = t
        })
      })
    }
    else if (struttura == 2) {
      this.service.getStruttureOrizzontali().subscribe(data => {
        this.strutturaOrizzontale = data;
        this.selectedElement.push(this.strutturaOrizzontale)
        this.selectedElement.forEach(t => {
          this.selectedElement = t
        })
      })
    }
    else if (struttura == 3) {
      this.service.getStrutturaInclinata().subscribe(data => {
        this.strutturaInclinata = data;
        this.selectedElement.push(this.strutturaInclinata)
        this.selectedElement.forEach(t => {
          this.selectedElement = t
        })
      })
    }
    else if (struttura == 4) {
      this.service.getStrutturaSpaziale().subscribe(data => {
        this.strutturaSpaziale = data;
        this.selectedElement.push(this.strutturaSpaziale)
        this.selectedElement.forEach(t => {
          this.selectedElement = t
        })
      })
    }
    else if (struttura == 5) {
      this.service.getInfissiEsterni().subscribe(data => {
        this.infissiEsterni = data;
        this.selectedElement.push(this.infissiEsterni)
        this.selectedElement.forEach(t => {
          this.selectedElement = t
        })
      })
    }
    console.log(this.selectedElement)
  }

  ngOnDestroy() {
    this.subscriptionsToDelete.unsubscribe();
  }

  ngOnInit() {
  }

}