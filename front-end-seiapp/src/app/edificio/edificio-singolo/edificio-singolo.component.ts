import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EdificioService } from 'src/app/classi-servizi/service/edificio.service';
import { TipoEdificio } from 'src/app/classi-servizi/classes/tipo-edificio';

@Component({
  selector: 'app-edificio-singolo',
  templateUrl: './edificio-singolo.component.html',
  styleUrls: ['./edificio-singolo.component.css']
})
export class EdificioSingoloComponent implements OnInit {


  edificioSingolo: TipoEdificio[];

  valori: EventEmitter<string> = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private edificioService: EdificioService
    ) { }

  ngOnInit(){
      this.edificioService.getTipoEdificio().subscribe(data =>{
      this.edificioSingolo = data;
      console.log(this.edificioSingolo)
    })
  }

  outputSelezione(){
    var select1 = (<HTMLInputElement>document.getElementById("edificioSingolo")).value;
    var valore1 = parseInt(select1)
    //Scrive i valori presi in input document.write(select1,select2);
    if(valore1.valueOf() == 0){
      this.router.navigate["/edificio-singolo-q"]
    }
    if(valore1.valueOf() == 2){
      this.router.navigate["/edificio-singolo-q"]
    }
    if(valore1.valueOf() == 4){
      this.router.navigate["/edificio-singolo-q"]
    }
    if(valore1.valueOf() == 5){
      this.router.navigate["/edificio-singolo-q"]
    }
    if(valore1.valueOf() == 6){
      this.router.navigate["/edificio-singolo-q"]
    }
  }
}
