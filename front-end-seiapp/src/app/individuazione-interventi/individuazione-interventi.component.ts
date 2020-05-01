import { Component, OnInit } from '@angular/core';
import { StrutturaVerticaleService } from '../classi-servizi/service/struttura-verticale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StrutturaVerticale } from '../classi-servizi/classes/struttura-verticale';
import { CaratteristicheQualitative } from '../classi-servizi/classes/caratteristiche-qualitative';


@Component({
  selector: 'app-individuazione-interventi',
  templateUrl: './individuazione-interventi.component.html',
  styleUrls: ['./individuazione-interventi.component.css']
})
export class IndividuazioneInterventiComponent implements OnInit {

  struttura: StrutturaVerticale;
  verticale: StrutturaVerticale[];
  caratteristica: CaratteristicheQualitative[];

  constructor(private strutturaVerticaleService: StrutturaVerticaleService,
              private route: ActivatedRoute,
              private router: Router) {
              this.struttura = new StrutturaVerticale();

               }

  ngOnInit() {
    this.strutturaVerticaleService.getStrutturaVerticale().subscribe(data=>{
      this.verticale = data;
    })
      
      this.strutturaVerticaleService.getCaratteristicheQualitative().subscribe(data=>{
        this.caratteristica = data;
    })
  }

}
