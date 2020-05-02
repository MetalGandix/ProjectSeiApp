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


  visualizzaArrayVerticale() {
   this.verticale[0]
  }

  ngOnInit() {
    this.strutturaVerticaleService.getStrutturaVerticale().subscribe(data => {
      this.verticale = data;
    })

    this.strutturaVerticaleService.getCaratteristicheQualitative().subscribe(data => {
      this.caratteristica = data;
    })
  }



  onSubmit() {
    var oggettoStrutturaVerticale: StrutturaVerticale = new StrutturaVerticale();
    if (oggettoStrutturaVerticale.strutturaVerticale == "Struttura ad arco in muratura") {
      console.log("Hai selezionato struttura ad arco in muratura");
    }
    if (oggettoStrutturaVerticale.strutturaVerticale == "Struttura a pareti portanti in muratura piena") {
      console.log("Hai selezionato struttura a pareti portanti in muratura piena");
    }
    if (oggettoStrutturaVerticale.strutturaVerticale == "Struttura a pareti portanti in muratura a sacco") {
      console.log("Hai selezionato struttura a pareti portanti in muratura a sacco");
    }

  }

  /* 
  PROVE JAVASCRIPT

  prova(){
    this.verticale.forEach(this.funzioneProva);
  }
  funzioneProva(item, index){
    console.log(document.getElementById("demo").innerHTML += index + ":" + item + "");
  }*/

}
