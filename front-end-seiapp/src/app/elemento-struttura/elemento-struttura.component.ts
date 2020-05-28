import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';
import { InfissiEsterni } from '../classi-servizi/classes/strutture/infissi-esterni';
import { StrutturaVerticale } from '../classi-servizi/classes/strutture/struttura-verticale';
import { StruttureInclinate } from '../classi-servizi/classes/strutture/strutture-inclinate';
import { StruttureOrizzontali } from '../classi-servizi/classes/strutture/strutture-orizzontali';
import { StruttureSpaziali } from '../classi-servizi/classes/strutture/strutture-spaziali';
import { ElementiStrutturaService } from '../classi-servizi/service/elementi-struttura.service';
import { Struttura } from '../classi-servizi/classes/strutture/struttura';
import { TypeStruttura } from '../classi-servizi/classes/strutture/type-struttura';

@Component({
  selector: 'app-elemento-struttura',
  templateUrl: './elemento-struttura.component.html',
  styleUrls: ['./elemento-struttura.component.css']
})
export class ElementoStrutturaComponent implements OnInit {

  typeStruttura: TypeStruttura[];
  struttura: Struttura[];
  selectedIndex: number;
  infissiEsterni: InfissiEsterni[];
  strutturaVerticale: StrutturaVerticale[];
  verticale: StrutturaVerticale;
  strutturaInclinata: StruttureInclinate[];
  strutturaOrizzontale: StruttureOrizzontali[];
  strutturaSpaziale: StruttureSpaziali[];
  selectedElement = [];
  selectArr: number;
  caratteristiche: CaratteristicheQualitative[];
  subscriptionsToDelete: Subscription = new Subscription();
  variabile1;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ElementiStrutturaService
  ) {
  }

  onChangeSecondo(index: number){
    this.caratteristiche = this.selectedElement[index].carQuality
    this.selectArr = 0;
  }

  onChange(index: number) {
    this.selectedElement = []
    this.struttura.forEach(t => {
      if(t.tipoStruttura.id === this.typeStruttura[index].id){
      this.selectedElement.push(t)
      }
    })
    this.selectedIndex = 0;
  }

  ngOnInit() {
    this.service.getTypeStruttura().subscribe(data => {
      this.typeStruttura = data;
      console.log(this.typeStruttura)
    })
    this.service.getStruttura().subscribe(data => {
      this.struttura = data;
      console.log(this.struttura)
    })
    this.service.getCaratteristicheQualitative().subscribe(data =>{
      this.caratteristiche = data;
      console.log(this.caratteristiche)
    })
  }
}