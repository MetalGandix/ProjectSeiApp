import { Component, OnInit, EventEmitter } from '@angular/core';
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

 outputSelezione(){
  var select1 = (<HTMLInputElement>document.getElementById("strutturaVerticale")).value;
  var select2 = (<HTMLInputElement>document.getElementById("strutturaCaratteristica")).value;
  var valore1 = parseInt(select1)
  var valore2 = parseInt(select2)
  //Scrive i valori presi in input document.write(select1,select2);
  if(valore1.valueOf() == 0 && valore2.valueOf() == 0){
    alert("Il metodo selezionato è questo: 0-0 ")
  }
  if(valore1.valueOf() == 0 && valore2.valueOf() == 1){
    this.router.navigate(['/home']);
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
  if(valore1.valueOf() == 2 && valore2.valueOf() == 0){
    alert("Il metodo selezionato è questo: 2-0 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 1){
    alert("Il metodo selezionato è questo: 2-1 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 2){
    alert("Il metodo selezionato è questo: 2-2 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 3){
    alert("Il metodo selezionato è questo: 2-3 ")
  }
  if(valore1.valueOf() == 2 && valore2.valueOf() == 4){
    alert("Il metodo selezionato è questo: 2-4 ")
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

  //Trasformo l'array di oggetti in un array di stringhe, non ci serve per ora
  visualizzaArrayVerticale() {
    var elementiArrayVerticale = this.verticale.map(function(verticale) {
      return verticale['strutturaVerticale'];
    })
    var elementiArrayCaratteristica = this.caratteristica.map(function(caratteristica){
      return caratteristica['caratteristicheQualitative'];
    })

    if(elementiArrayVerticale[0] && elementiArrayCaratteristica[0]){
      alert("funziona");
    }else{
      console.log("errore")
    }

  }

}
