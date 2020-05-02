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

  //Trasformo l'array di oggetti in un array di stringhe
  visualizzaArrayVerticale() {
    var elementiArrayVerticale = this.verticale.map(function(verticale) {
      return verticale['strutturaVerticale'];
    })
    var elementiArrayCaratteristica = this.caratteristica.map(function(caratteristica){
      return caratteristica['caratteristicheQualitative'];
    })

    if(elementiArrayVerticale[0] && elementiArrayCaratteristica[0]){
      console.log("L'operazione consigliata è questa.")
    }

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
