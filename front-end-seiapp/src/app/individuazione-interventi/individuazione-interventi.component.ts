import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  verticale: StrutturaVerticale[]; 
  caratteristica: CaratteristicheQualitative[];

  valori: EventEmitter<string> = new EventEmitter();
  
  constructor(private strutturaVerticaleService: StrutturaVerticaleService,
    private route: ActivatedRoute,
    private router: Router) {
  }

 prova(){
  var select1 = (<HTMLInputElement>document.getElementById("strutturaVerticale")).value;
  var select2 = (<HTMLInputElement>document.getElementById("strutturaCaratteristica")).value;
  var valore1 = parseInt(select1)
  var valore2 = parseInt(select2)
  //Scrive i valori presi in input document.write(select1,select2);
  if(valore1.valueOf() == 0 && valore2.valueOf() == 0){
    alert("Il metodo selezionato è questo: 0-0 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 1){
    alert("Il metodo selezionato è questo: 0-1 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 2){
    alert("Il metodo selezionato è questo: 0-2 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 3){
    alert("Il metodo selezionato è questo: 0-3 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 4){
    alert("Il metodo selezionato è questo: 0-4 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 5){
    alert("Il metodo selezionato è questo: 0-5 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 0){
    alert("Il metodo selezionato è questo: 1-0 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 1){
    alert("Il metodo selezionato è questo: 1-1 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 2){
    alert("Il metodo selezionato è questo: 1-2 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 3){
    alert("Il metodo selezionato è questo: 1-3 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 4){
    alert("Il metodo selezionato è questo: 1-4 ")
  }
  if(valore1.valueOf() == 1 && valore2.valueOf() == 5){
    alert("Il metodo selezionato è questo: 1-5 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 0){
    alert("Il metodo selezionato è questo: 2-0 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 1){
    alert("Il metodo selezionato è questo: 2-1 ")
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



 

  /* 
  PROVE JAVASCRIPT

  prova(){
    this.verticale.forEach(this.funzioneProva);
  }
  funzioneProva(item, index){
    console.log(document.getElementById("demo").innerHTML += index + ":" + item + "");
  }*/

  //Trasformo l'array di oggetti in un array di stringhe
  visualizzaArrayVerticale() {
    var elementiArrayVerticale = this.verticale.map(function(verticale) {
      return verticale['strutturaVerticale'];
    })
    var elementiArrayCaratteristica = this.caratteristica.map(function(caratteristica){
      return caratteristica['caratteristicheQualitative'];
    })

    if(elementiArrayVerticale[0] && elementiArrayCaratteristica[0]){
      alert("Hello! I am an alert box!!");
    }else{
      console.log("errore")
    }

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

}
