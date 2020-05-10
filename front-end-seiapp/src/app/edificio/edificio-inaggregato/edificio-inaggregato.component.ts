import { Component, OnInit } from '@angular/core';
import { TipoEdificio } from 'src/app/classi-servizi/classes/tipo-edificio';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioService } from 'src/app/classi-servizi/service/edificio.service';

@Component({
  selector: 'app-edificio-inaggregato',
  templateUrl: './edificio-inaggregato.component.html',
  styleUrls: ['./edificio-inaggregato.component.css']
})
export class EdificioInaggregatoComponent implements OnInit {

  edificioInAggregato: TipoEdificio[];
  //showMsg1: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private edificioService: EdificioService
    ) { 
      
    }

  ngOnInit(){
      this.edificioService.getTipoEdificio().subscribe(data =>{
      this.edificioInAggregato = data;
      console.log(this.edificioInAggregato)
    })
  }

  outputSelezione(){
    var select1 = (<HTMLInputElement>document.getElementById("edificioInAggregato")).value;
    var valore1 = parseInt(select1)
    //Scrive i valori presi in input document.write(select1,select2);
    if(valore1.valueOf() == 0){
      this.router.navigate(['/edificio-singolo-q']);
    }
    if(valore1.valueOf() == 1){
      //this.showMsg1 = true;
      alert("Questo edificio non può essere selezionato");
    }
    if(valore1.valueOf() == 2){
      this.router.navigate(['/edificio-singolo-q']);
    }
    if(valore1.valueOf() == 3){
      //this.showMsg1 = true;
      alert("Questo edificio non può essere selezionato");
    }
    if(valore1.valueOf() == 4){
      this.router.navigate(['/edificio-singolo-q']);
    }
    if(valore1.valueOf() == 5){
      this.router.navigate(['/edificio-singolo-q']);
    }
    if(valore1.valueOf() == 6){
      this.router.navigate(['/edificio-singolo-q']);

    }
  }

}
