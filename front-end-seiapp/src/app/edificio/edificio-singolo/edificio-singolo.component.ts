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

  edificioInAggregato: TipoEdificio[];
  //showMsg1: boolean = false
  avantiAbilitato = false
  tipoEdificioSelezionato: TipoEdificio;
  emsType: Number


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private edificioService: EdificioService
    ) { 
    }

  ngOnInit(){
      this.edificioService.getTipoEdificio().subscribe(data =>{
      this.edificioInAggregato = data;
    })
  }

  onChange(tipoEdificioId: number){
    this.tipoEdificioSelezionato = this.edificioInAggregato.find(t => t.id==tipoEdificioId);
    this.avantiAbilitato = this.tipoEdificioSelezionato.abilitato;
    this.emsType = this.tipoEdificioSelezionato.id
    console.log(this.tipoEdificioSelezionato.id)
  }

  outputSelezione(){
    this.router.navigate(['/edificio-singolo-q', this.tipoEdificioSelezionato.id], { state: {emsType: this.emsType}});
    console.log("Passo questo valore: ", this.tipoEdificioSelezionato.id)
  }
}