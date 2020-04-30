import { Component, OnInit } from '@angular/core';
import { StrutturaVerticaleService } from '../struttura-verticale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StrutturaVerticale } from '../struttura-verticale';
import { CaratteristicheQualitative } from '../caratteristiche-qualitative';
import { CaratteristicheQualitativeService } from '../caratteristiche-qualitative.service';


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
    private caratteristicheQualitativeService: CaratteristicheQualitativeService,
              private route: ActivatedRoute,
              private router: Router) {
              this.struttura = new StrutturaVerticale();

               }

  ngOnInit() {
    this.strutturaVerticaleService.getStrutturaVerticale().subscribe(data=>{
      this.verticale = data;
    })
      
      this.caratteristicheQualitativeService.getCaratteristicheQualitative().subscribe(data=>{
        this.caratteristica = data;
    })
  }

}
